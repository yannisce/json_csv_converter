import React from 'react';
import { DownloadButton } from './StyledDownloadButton';

function DownloadHandler({ file, type, fileName }) {
  const csv = async () => {
    const jsonItem = await JSON.stringify(file);
    const blob = await new Blob([jsonItem], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);

    a.href = url;
    a.download = `${fileName}.json`;

    a.click();

    window.setTimeout(function() {
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }, 0);
  }

  const json = async () => {
    const blob = await new Blob([file], {type: 'text/csv'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);

    a.href = url;
    a.download = `${fileName}.csv`;

    a.click();

    window.setTimeout(function() {
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }, 0);
  }


  return (
    <DownloadButton onClick={type === 'csv' ? () => csv() : () => json()}>Download <span aria-label="File Icon" role="img">💾</span></DownloadButton>
  );
}

export default DownloadHandler;
