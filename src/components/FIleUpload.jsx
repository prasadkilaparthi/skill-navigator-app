import React, { useState } from 'react';

const FileUpload = ({ name, onFileUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    onFileUpload(name, uploadedFile);
  };

  return (
    <div className="mb-4">
      <label>{name} Upload:
        <input type="file" onChange={handleFileChange} className="block w-full p-2" />
      </label>
      {file && <p>{file.name}</p>}
    </div>
  );
};

export default FileUpload;
