import {data} from '/data.js'
const cover = document.getElementById("cover");
data.forEach((e,i) => {
    cover.innerHTML+=`
    <div class="box center" style="right:-${i*100}vw;">
    <h1>${e.content}</h1>
    <p>${e.para}</p>
    </div>
    `
});
let transform = 0;
document.getElementById('right').addEventListener('click',()=>{
    if(transform==data.length-1){
        transform = 0;
    }else{
        transform++;
    }
    cover.style = `transform:translate(-${transform*100}vw)`
})
document.getElementById('left').addEventListener('click',()=>{
    if(transform==0){
        transform = data.length-1;
    }else{
        transform--;
    }
    cover.style = `transform:translate(-${transform*100}vw)`
})