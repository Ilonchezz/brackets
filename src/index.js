module.exports = function check(str, bracketsConfig) {
  const stack = [];

  const isOpening = (bracket) => {
    for (let i = 0; i < bracketsConfig.length; i++) {
      if (bracket === bracketsConfig[i][0]) {
        return true;
      }
    }
    return false;
  }

  const isClosing = (bracket) => {
    for (let i = 0; i < bracketsConfig.length; i++) {
      if (bracket === bracketsConfig[i][1]) {
        return true;
      }
    }
    return false;
  }

  const getOpening = (closingBracket) => {
    for (let i = 0; i < bracketsConfig.length; i++) {
      if (closingBracket === bracketsConfig[i][1]) {
        return bracketsConfig[i][0];
      }
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (isClosing(str[i])) {      
      if (stack[stack.length - 1] !== getOpening(str[i])) {
        if (isOpening(str[i])) {
          stack.push(str[i]);
          continue;
        }
        return false;
      }
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }

  return stack.length === 0;
}