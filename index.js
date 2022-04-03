const uncompress = (s) => {
  // String of numberic characters
  const numbers = '0123456789';
  
  // Keep track of results
  let result = [];
  
  // Initialize 2 pointers
  let i = 0;
  let j = 0;

  // Iterare over string
  while (j < s.length) {
    // If current character is a number
    // increment j pointer
    if (numbers.includes(s[j])) {
      console.log('found a number:', s[j])
      j++;
    } else {
      console.log('not a number:', s[j])
      // current character is not a number
      // String slicing
      const num = s.slice(i, j)
      console.log('sliced number:', num)

      // Add character to result array n(num) number of times
      for (let count = 0; count < num; count++) {
        // string concatenation
        result.push(s[j]);
      }
      j++;
      i = j
    }
  }
  console.log(result.join(''))
  return result.join('');
};



// uncompress("2c3a1t"); // -> 'ccaaat'

// uncompress("4s2b"); // -> 'ssssbb'

// uncompress("2p1o5p"); // -> 'ppoppppp'

// uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'

uncompress("127y"); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'