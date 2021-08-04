let obj: {|
  a: string,
|};
let obj2: {|
  ...$Exact<obj>,
  b: number,
|};
