let contents=document.getElementsByClassName("timeline-content"),list=[],playQueue=[];Array.prototype.forEach.call(contents,function(t){list.push(t)});let clientHeight=window.innerHeight;function checkList(t){for(let e=0;e<t.length;e++)!function(e){let n=t[e],l=n.getBoundingClientRect();l.top>0&&l.top<clientHeight+50&&playQueue.push(function(){setTimeout(function(){n.played||(n.classList.add("animation"),n.played=!0)},100*e)})}(e);let e=playQueue.length;playQueue.forEach(function(t,n){t(),n===e&&(playQueue=[])})}checkList(list);let lock=!0;setTimeout(function(){lock=!1},10),document.addEventListener("scroll",function(t){lock||(checkList(list),lock=!0,setTimeout(function(){lock=!1},40))});