import dcmjs from 'dcmjs';

const { DicomMetaDictionary } = dcmjs.data;

export default class Dictionary {
  static retrieveName(name) {
    const { dictionary } = DicomMetaDictionary;
    const punctuatedName = DicomMetaDictionary.punctuateTag(name);
    if (!dictionary[punctuatedName]) {
      return undefined;
    }
    return dictionary[punctuatedName].name;
  }
}
