declare module '*.svg' {
  const svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

declare module '*.jpg';
declare module '*.jpeg';

declare module '*.ico' {
  const ico: string;
  export default ico;
}

declare module '*.png' {
  const png: string;
}

declare module '*.json' {
  const json: string;
  export default json;
}
