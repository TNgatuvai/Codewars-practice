// Each exclamation mark weight is 2; Each question mark weight is 3. Put two string left and right to the balance, Are they balanced?

// If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; If they are balanced, return "Balance".

// Solution: 

function balance(left,right) {
    const weight = s => [...s].map(c => c === '!' ? 2 : c === '?' ? 3 : 0).reduce((s, x) => s + x, 0);
    let diff = weight(left) - weight(right);
    return diff === 0 ? 'Balance' : diff > 0 ? 'Left' : 'Right';
  }