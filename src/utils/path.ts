export function getPathArray(path: string): string[] {
  return path.split('/').reduce((pre: string[], cur) => {
    cur && pre.push('/' + cur);
    return pre;
  }, []);
}
