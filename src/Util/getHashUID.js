import { v5 as uuidv5 } from 'uuid';
import bigInt from 'big-integer';

const UUID_ROOT = '2.25';
export default function getHashUID(value, namespace = undefined) {
  const guid = uuidv5(value, !namespace ? '' : namespace);
  const guidBytes = `0${guid.replace(/-/g, '')}`;
  const bigInteger = bigInt(guidBytes, 16);
  return `${UUID_ROOT}.${bigInteger.toString()}`;
}
