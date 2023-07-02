import Libxml from "node-libxml";
let libxml = new Libxml();
let archivoXml = libxml.loadXml('./juegos.xml');
console.log('Archivo XML Cargado:', `${archivoXml === true ? 'Si' : 'NO'}`);
console.log('Archivo DTD:', libxml.getDtd());
libxml.loadDtds(['./juegos.dtd']);
console.log('Archivo XML Valido:', `${libxml.validationDtdErrors === undefined ? 'Si' : 'NO'}`);