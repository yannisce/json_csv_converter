/*
------------------
|  JSON Parser   |
-----------------
*/

class JSONParser {
  constructor(file, updateDownload) {

    this.jsonBlob = new Blob([file], {type: 'application/json'});

    this.setDownload = updateDownload;

    this.jsonString = '';

  }

  createCsvRow(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (i !== (arr.length - 1)) {
        this.jsonString += `${arr[i]},`;
      } else {
        this.jsonString += `${arr[i]}\n`;
      }
    }
  }

  converter(arr) {
    const headers = Object.keys(arr[0]);

    this.createCsvRow(headers);

    for (let i = 0; i < arr.length; i++) {
      this.createCsvRow(Object.values(arr[i]));
    }
  }

  parse() {
    const reader = new FileReader();

    reader.onabort = () => alert('⚠️ File reading was aborted ⚠️');
    reader.onerror = () => alert('⚠️ File reading has failed ⚠️');

    reader.onload = async () => {
      const parsedJSON = JSON.parse(reader.result);

      await this.converter(parsedJSON);

      this.setDownload(this.jsonString);
    }
    
    reader.readAsBinaryString(this.jsonBlob);
  }
}

export default JSONParser;