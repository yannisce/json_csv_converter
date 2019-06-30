/*
------------------
|  CSV Parser   |
-----------------
*/

class CSVParser {
 constructor(file, updateDownload) {

  this.csvBlob = new Blob([file]);

  this.setDownload = updateDownload;

  this.dataArray = [];

  this.csvHeaderArray = [];

  this.objectArray = [];

 }

 arrayToObject(arr) {
   let newObj = {};
   let newArr = arr.split(',');

   for (let i = 0; i < this.csvHeaderArray.length; i++) {
     newObj[this.csvHeaderArray[i]] = newArr[i];
   }

   return newObj;
 }

 async converter(arr) {
  this.dataArray = [...arr];
  this.csvHeaderArray = this.dataArray.shift().split(',').filter(str => str !== "");

  for (let i = 0; i < this.dataArray.length; i++) {
    // Remove the last "empty" object that has a single header and no value.
    if (i === (this.dataArray.length - 1) && !(this.dataArray[i].split(',').length > 2)) return;
    this.objectArray[i] = await this.arrayToObject(this.dataArray[i]);
  }
 }

 parse() {
  const reader = new FileReader();

  reader.onabort = () => alert('⚠️ File reading was aborted ⚠️');
  reader.onerror = () => alert('⚠️ File reading has failed ⚠️');

  reader.onload = async () => {
    // Converts the text into a string, and splits it on every new row or line break,
    // Creating a new array with the input data.
    const resultArray = await reader.result.toString().split(/[\r\n]+/);
    
    await this.converter(resultArray);

    this.setDownload(this.objectArray);
  }

  reader.readAsText(this.csvBlob);
 }
}

export default CSVParser;