function concatStrings(str, separator) {
  if (typeof str !== 'string') {
    return str || 'Вы ничего не ввели';
  }

  // str = separator ? str + separator : str;

  function innerFunc(str2) {
    if (typeof str2 !== 'string') {
      return str;
    }
    str = separator ? str + separator : str;
    return concatStrings(str + str2, separator);
  }

  return innerFunc;
}

console.log(concatStrings('some-value')('333')(123n));
console.log(concatStrings('some-value')(2));
