export const randomItem = (arr: string[]) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };