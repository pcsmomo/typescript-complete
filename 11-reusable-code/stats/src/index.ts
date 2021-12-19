import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });
// 10/08/2018,Man United,Leicester,2,1,H,A Marriner
// 0         ,1         ,2        ,3,4,5,6

const homeWin = 'H';
const awayWin = 'A';
const draw = 'D';

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === homeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === awayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);

// This is Bad!? -> Refactoring will come up
