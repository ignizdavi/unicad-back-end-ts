this folder provides a simple way to 'tests' things only LOCALLY!

Its supposed used to test in local environments, connecting in apis or databases to aim test the returns or behaviors.

all specs inside  the folder ignore will not exec by the jest (e.g npx jest on root) and only if you provide the path to test.

Not supposed to be in coverage report

How to run them if packages.json are ignoring the path specs/ignore?

Well, i just able to run doing that:

node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand src/specs/ignore/email.ignore.ts --testRegex="^.+\\.ignore\\.ts$" --testPathIgnorePatterns=''

PS: I used the way above because i want to use debugger. This should works using npx jest with the same --testRegex and testPathIgnorePatterns params.