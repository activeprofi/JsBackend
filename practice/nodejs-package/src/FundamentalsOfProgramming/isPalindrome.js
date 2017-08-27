const isPalindrome = (str) => {
  const length = str.length;

  if (length === 1) return true;

  if (str[0] === str[length - 1]) {
    return isPalindrome(str.substring(1, length - 1));
  } else {
    return false;
  }
};

export default isPalindrome;
