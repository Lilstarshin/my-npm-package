const {sleep} = require('@lilstar/mypackage');

async function main() {
    console.log('before sleep');
    await sleep(2000);
    console.log('after sleep')
}

main();