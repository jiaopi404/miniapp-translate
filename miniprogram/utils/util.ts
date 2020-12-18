export const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}

export const truncate = (query:string):string => {
  if (query.length <= 20) {
    return query
  } else {
    return query.substr(0, 10) + query.length + query.substr(-10)
  }
};

export const getUUid = (): string => {
  const seed = '0123456789abcdef';
  const part1 = +new Date() + '';
  const part2 = [];
  for (let i = 0; i < 16; i++) {
    part2.push(seed[Math.round(Math.random() * 16)]);
  }
  return part1 + part2.join('');
 };
