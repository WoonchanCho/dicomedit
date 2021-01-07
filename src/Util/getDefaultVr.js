import dcmjs from 'dcmjs';

const { DicomMetaDictionary } = dcmjs.data;

/**
 *
 * @param {*} tagName
 */
export default function getDefaultVr(tagName) {
  // TODO: Tentatively set 'LO' when there is no defined vr
  const obj =
    DicomMetaDictionary.dictionary[DicomMetaDictionary.punctuateTag(tagName)];
  const vr = obj ? obj.vr : undefined;
  return vr ? vr : 'LO';
}
