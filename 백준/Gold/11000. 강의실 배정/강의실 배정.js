const fs = require('fs');
const [N, ...lines] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const events = [];

for (const line of lines) {
  const [start, end] = line.split(' ').map(Number);
  events.push({ time: start, isStart: true });
  events.push({ time: end,   isStart: false });
}

events.sort((a, b) => a.time === b.time ? a.isStart - b.isStart : a.time - b.time);

let cur = 0;
let maxRooms = 0;

for (const e of events) {
  cur += e.isStart ? 1 : -1;
  if (cur > maxRooms) maxRooms = cur;
}

console.log(maxRooms);
