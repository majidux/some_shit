const characters = 'abcdefghijklmnopqrstuvwxyz';

function dirtyDecode(message: string): string {
  let str: string = '';
  const chars: string[] = [...characters];
  [...message].forEach((item: string) => {
    const reversIndex: number = chars
      /** Because reverse method mutates the original array, I had to slice it first before reversing */
      .slice()
      .reverse()
      .findIndex((i: string) => i === item);
    str += chars[reversIndex] || ' ';
  });
  return str;
}

function cleanDecode(message: string): string {
  return message.replace(/[a-z]/g, (c) => {
    return [...characters].slice().reverse()[characters.indexOf(c)];
  });
}
