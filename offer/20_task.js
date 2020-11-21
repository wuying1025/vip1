console.log('1');

setTimeout(function () { //宏任务
    console.log('2');
    process.nextTick(function () { //2-微任务
        console.log('3');
    });
    new Promise(function (resolve) {
        console.log('4');
        resolve();
    }).then(function () {  //2-微任务
        console.log('5')
    });
})
process.nextTick(function () { //微任务
    console.log('6');
})