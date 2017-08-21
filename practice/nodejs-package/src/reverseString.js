const reverseString = (str) => {
  if (str === '') return '';

  return reverseString(str.substring(1)) + str[0];
};

export default reverseString;