import TagLiteral from '../TagLiteral';

const BARE_REGEX = /[(),]/g;
const TAG_SPLIT_REGEX = /[/]/;

function preprocess(tagPath) {
  if (TagLiteral.isPrivateTagMember(tagPath)) {
    return (
      tagPath.substr(0, 4).toUpperCase().replace(BARE_REGEX, '') +
      tagPath.substr(4, tagPath.length - 6) +
      tagPath.substr(-2).toUpperCase().replace(BARE_REGEX, '')
    );
  } else {
    return tagPath.toUpperCase().replace(BARE_REGEX, '');
  }
}

export default function tokenizeTagPath(tagPath) {
  return tagPath
    .split(TAG_SPLIT_REGEX)
    .map((token) => token.trim())
    .filter((token) => !!token)
    .map((token) => preprocess(token));
}
