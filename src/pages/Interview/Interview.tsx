import * as React from 'react';
import { pdfjs } from 'react-pdf';
import doc from './interview.pdf'

// use CDN worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Interview() {
    const [pagesText, setPagesText] = React.useState<string[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

    React.useEffect(() => {
        let cancelled = false;
        async function loadText() {
            try {
                // fetch the PDF as arrayBuffer to avoid cross-origin/worker issues
                const res = await fetch(doc);
                if (!res.ok) throw new Error(`Failed to fetch PDF: ${res.status}`);
                const arrayBuffer = await res.arrayBuffer();

                const loadingTask = pdfjs.getDocument({ data: arrayBuffer });
                const pdf = await loadingTask.promise;
                const texts: string[] = [];
                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const content = await page.getTextContent();
                    const strs = content.items.map((it: any) => it.str || '').join(' ');
                    texts.push(strs);
                }
                if (!cancelled) {
                    // if all pages are empty strings, mark as no-extract
                    const allEmpty = texts.every(t => (t || '').trim().length === 0);
                    if (allEmpty) {
                        setErrorMessage('PDFから抽出できるテキストが見つかりませんでした（スキャン画像などの可能性があります）。');
                    } else {
                        setPagesText(texts);
                    }
                }
            } catch (e: any) {
                console.error('Failed to extract PDF text', e);
                if (!cancelled) setErrorMessage(`PDFの読み込みでエラーが発生しました: ${e.message || e}`);
            } finally {
                if (!cancelled) setLoading(false);
            }
        }
        loadText();
        return () => { cancelled = true }
    }, []);

    if (loading) return <div>読み込んでいます…</div>;

    if (errorMessage) {
        return (
            <div>
                <p>{errorMessage}</p>
                <p>PDFをそのまま表示します。うまく表示されない場合はダウンロードしてご確認ください。</p>
                <div style={{height: '800px'}}>
                    <iframe src={doc} title="interview-pdf" style={{width:'100%',height:'100%'}} />
                </div>
                <div style={{marginTop: '1rem'}}>
                    <a href={doc} target="_blank" rel="noreferrer">PDFを開く / ダウンロード</a>
                </div>
            </div>
        );
    }

    if (pagesText.length === 0) return <div>表示できるテキストがありません。PDF をダウンロードしてご確認ください。<br /><a href={doc} target="_blank" rel="noreferrer">PDFを開く / ダウンロード</a></div>;

    return (
        <div style={{maxWidth: window.innerWidth * 0.8}}>
            {pagesText.map((text, idx) => (
                <section key={idx} style={{marginBottom: '2rem'}}>
                    <h3>Page {idx + 1}</h3>
                    <p style={{whiteSpace: 'pre-wrap', lineHeight: 1.6}}>{text}</p>
                </section>
            ))}
            <div>
                <a href={doc} target="_blank" rel="noreferrer">元のPDFを開く / ダウンロード</a>
            </div>
        </div>
    );
}

export default Interview;