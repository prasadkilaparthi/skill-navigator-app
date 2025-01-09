import React from 'react';

const FileUpload = ({ name, onFileUpload }) => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    onFileUpload(name, file);
  };

  return (
    <div className="mb-4">
      <label className="block mb-2">{`Upload ${name.replace(/([A-Z])/g, ' $1')}:`}
        <input
          type="file"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </label>
    </div>
  );
};

export default FileUpload;
