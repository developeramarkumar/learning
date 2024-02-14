// phases
/*
microtask contain [process.nextTick, Promise]

{
    timers -> [microtask] -> pending callbacks -> [microtask] -> idle, prepare -> [microtask] -> poll -> [microtask] -> check -> [microtask] -> close callback [microtask]
}

*/

Promise.resolve('test').then(function(){
    console.log('promise will call after all nextTick in 1 cycle')
});

setTimeout(function(){
    console.log('setTimeout called timer phase in 1 cycle after microtask');
    process.nextTick(function(){
        // will pushed in microtask and immidiatly invoke to call before next phase
        console.log('called nextTick 3 in 1 cycle')
    })
},0);

setImmediate(function(){
    console.log('called in check phase after microtask')
    process.nextTick(function(){
        // will pushed in microtask and immidiatly invoke to call before next phase
        console.log('called nextTick 4 in 1 cycle')
    })
});
process.nextTick(function(){
    console.log('called nextTick 1 in 1 cycle')
    process.nextTick(function(){
        console.log('called nextTick 2 in 1 cycle')
    })
})

