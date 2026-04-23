import React from 'react';
import doc from './interview.pdf';

export default function InterviewRedirect() {
  React.useEffect(() => {
    // Use imported doc path so it works in dev and production
    window.location.href = doc;
  }, []);

  return (
    <div>
      <p>インタビューPDFへ移動しています…</p>
      <p>自動で開かない場合は以下をクリックしてください。</p>
      <a href={doc} target="_blank" rel="noreferrer">インタビューを開く（PDF）</a>
    </div>
  );
}
