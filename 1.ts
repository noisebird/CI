let tupleArray: [string, boolean];

type Function1 = (name: string, age: number)  => boolean;

const function1: Function1 = (x: number, y: string): number => {
  return 1;
};

const show = (name: string = 'zhagnsan') => {
  console.log(name);
};

show();

function chongzai(a: string): string;
function chongzai(a: string, b: string, c: string): string;
function chongzai(a: string, b?: string, c?: string): string {
  if (b && c) {
    return `${a}${b}${c}`;
  } else {
    return a;
  }
}

chongzai('1111');
chongzai('1111', 'b', 'c');


