# DicomEdit.js

`DicomEdit.js` is a JavaScript library that provides the ability to read DICOM objects, transform their contents based on a scripted list of commands, and to output the transformed DICOM.
DicomEdit.js is a ported version the original Java-based library (https://wiki.xnat.org/xnat-tools/dicomedit) to work with a web-browser and Node.Js environments. This can add more safety to data privacy by allowing DICOM objects to be anonymized in users's local environment before being transferred to Server to make sure any PHI is not sent to unsecure/secure network.


## Install
DicomEdit.js is available from npm or unpkg.
```javascript
npm install dicomedit
```
```javascript
yarn add dicomedit
```
```html
<script src="https://unpkg.com/dicomedit/dist/web/dicomedit.js"></script>
```

## License

MIT