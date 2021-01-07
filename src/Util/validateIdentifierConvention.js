export default function validateIdentifierConvention(identifier) {
  const regex = new RegExp('^[a-zA-Z_$][a-zA-Z_$0-9]*$');
  return regex.test(identifier);
}
