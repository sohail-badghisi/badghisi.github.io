 var bar = document.getElementById('thebar');
var list = document.getElementById('menubar');

bar.addEventListener('click', () => {
    list.classList.toggle('addweight400');
    bar.classList.toggle('change');
})



let targets = document.querySelectorAll('.target');

var theBody = document.querySelectorAll('body');

window.addEventListener("scroll", function(){
    
  let doc = document.documentElement;
  let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
  
  let windowHeight = window.innerHeight;
  
  for (i = 0; i < targets.length; ++i) {
    let target = targets[i];
    if(target.offsetTop < (top + (windowHeight/2))) {
        target.classList.add("visible");
    }
    else {
        
    }
  }
});
            var box = document.querySelectorAll('.box');
            for(var i=0; i<box.length; i++) {
                box[i].addEventListener('mouseover', ()=> {
                   box[i].classList.toggle('addOpacity');
                })
            }
