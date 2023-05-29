import React, { useState } from 'react';

const TextEditor = () => {
  const [content, setContent] = useState('');

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <textarea
        className="flex-grow bg-white p-4"
        value={content}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default TextEditor;