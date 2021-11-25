// Exercise 1

let testValue = 11
const testNum = new Promise((resolve, reject) => {
    if (testValue < 10) {
        resolve("Dit getal is kleiner dan 10")
    } else { reject("Dit getal is groter dan 10") }
})
const whatNow = () => {
    testNum
        .then(function (resolved) {
            console.log(resolved)
        })
        .catch(function (reject) {
            console.log(reject)
        })
}
whatNow()

