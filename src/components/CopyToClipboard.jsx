// CopyToClipboard.js

import React, { useState } from 'react';
import copy from 'clipboard-copy';

const CopyToClipboard = () => {
  const [textToCopy, setTextToCopy] = useState('Your text to copy');
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await copy(textToCopy);
      setIsCopied(true);
    } catch (error) {
      console.error('Error copying to clipboard', error);
    }
  };

  return (
    <div>
      <textarea
        value={textToCopy}
        readOnly
        className="border p-2 mb-4"
        style={{ width: '100%' }}
      />
      <button
        onClick={handleCopyClick}
        className={`bg-blue-500 text-white py-2 px-4 rounded-md ${
          isCopied ? 'bg-green-500' : ''
        }`}
      >
        {isCopied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  );
};

export default CopyToClipboard;
