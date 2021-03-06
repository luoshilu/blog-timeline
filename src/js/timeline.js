let contents = document.getElementsByClassName('timeline-content');
let list = []
let playQueue = []
Array.prototype.forEach.call(contents, function (ele) {
    list.push(ele) 
})

// 显示当前可视窗的item-content
let clientHeight = window.innerHeight
function checkList(list) {
    for(let i = 0;i < list.length; i++) {
    (function(i){
        let ele = list[i];
        let rect = ele.getBoundingClientRect();
        if (rect.top > 0 && rect.top < clientHeight + 50) {
        playQueue.push(
            function () {
            setTimeout(function(){
                if(!ele.played) {
                ele.classList.add('animation');
                ele.played = true;
                }
            }, i*100)
            }
        )
        }
    })(i)
    }

    let length = playQueue.length
    playQueue.forEach(function(play, index){
    play();
    if(index === length) {
        playQueue = []
    }
    })
}
checkList(list);

// 监听滚动条
let lock = true;
setTimeout(function(){lock = false;}, 10)
document.addEventListener('scroll', function(evt){
    if(!lock) {
    checkList(list);
    lock = true
    setTimeout(function(){lock = false}, 40)
    }
})