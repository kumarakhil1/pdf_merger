const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const mergepdfs=async (p1,p2) => {
  await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(p2);
  let d=new Date().getTime
  await merger.save('public/merged.pdf')
}

module.exports={mergepdfs}