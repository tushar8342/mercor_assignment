import React from 'react';

const Toolbar = () => {
  const handleFormat = (format) => {
    document.execCommand(format, false, '');
  };

  return (
    <div className="flex bg-gray-200 p-4">
      <button
        className="px-2 py-1 mr-2 bg-white hover:bg-gray-100"
        onClick={() => handleFormat('bold')}
      >
        Bold
      </button>
      <button
        className="px-2 py-1 mr-2 bg-white hover:bg-gray-100"
        onClick={() => handleFormat('italic')}
      >
        Italic
      </button>
      <button
        className="px-2 py-1 mr-2 bg-white hover:bg-gray-100"
        onClick={() => handleFormat('underline')}
      >
        Underline
      </button>
    </div>
  );
};

export default Toolbar