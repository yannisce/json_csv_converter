import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from './StyledButton';
import { Dropzone } from './StyledDropzone';

// File type validation. {Helper Funciton}
function checkType(file) {
  let strikes = 0;

  if (file[0].name.split('.')[1] !== 'csv') strikes++;

  if (file[0].type !== 'application/json') strikes++;

  return strikes >= 2 ? true : false;
}

function FileInput({startConversion}) {
  const onDrop = async file => {
    if (file.length > 1) {
      return window.alert('⚠️ Please choose a single file! ⚠️');
    } 
    else if (checkType(file)) {
      return window.alert('⚠️ Wrong file type! ⚠️');
    } 
    else {
      // Get file type to update App state.
      const type = file[0].type ? file[0].type.split('/')[1] : file[0].name.split('.')[1];
      const fileName = file[0].name.split('.')[0];
      startConversion({
       type: type,
       file: file[0],
       name: fileName
      });
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop});

    return (
      <Dropzone {...getRootProps()}>
        <p>{isDragActive ? 'Drop file here!' : 'Drag & drop'}</p>
        {isDragActive ? '' : <p>or</p>}
        <Button>Choose File <span aria-label="File Icon" role="img">💾</span></Button>
        <input {...getInputProps()}/>
      </Dropzone>
    );
}

export default FileInput;