import jpp from './test'
let client = 10;

console.log(jpp)

function test() {
    console.log(0)
}

test();
console.log(client)

const promise = new Promise(function (resolve, reject) {
    setTimeout(_ => {
        resolve(1111)
        console.log(2222)
    }, 1000)
})

promise.then(value => {
    console.log(value)
})
