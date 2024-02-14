// process.nextQueue is part of microtask queue where 
console.log('first  response');
setTimeout(function () {
    console.log('settimeout called after next tick after next tick 3')
}, 0)
process.nextTick(function () {
    console.log('Process NextTick 1');
    process.nextTick(function () {
        console.log('Process NextTick 2');
        process.nextTick(function () {
            console.log('Process NextTick 3');
        })
    })
})
console.log('second response')