function addNumbers(a: number, b: number): number {
  return a + b;
}

export default addNumbers;

export const addStrings = (str1: string, str2: string = ""): string =>
  `${str1} ${str2}`;

export const format = (title: string, params: string | number): string =>
  `${title} ${params}`;

export const printFormat = (title: string, params: string | number): void =>
  console.log(format(title, params));

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

function introduce(salutation: string, ...names: string[]) {
  return `${salutation} ${names.join(" ")}`;
}
