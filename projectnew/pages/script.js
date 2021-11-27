let elems = document.querySelectorAll('.elem');
let offsetX;
let offsetY;
let con= document.querySelector('.con');
let text=document.querySelector('.text');
var carT; var carR; var doorT; var doorR; var garT; 
var garR; var baseT; var baseR; var roofT; let roofR;

elems.forEach(function(elem,index){
    var deg=0;
    elem.addEventListener('click', function() {
    this.style.transform = 'rotate(' + (deg += 90) + 'deg)';
    }, false); 

    elem.addEventListener('dragstart', function(event){
        offsetX=event.offsetX;
        offsetY=event.offsetY;

   setTimeout(()=>{
    this.classList.add('hide');
    },0);    
    });
    
    elem.addEventListener('dragend', function(event){

        elem.style.top=(event.pageY-offsetY)+'px';
        elem.style.left=(event.pageX-offsetX)+'px';
        this.classList.remove('hide');       

    var f=base.getBoundingClientRect();
    baseT=f.top;
    baseR=f.right;

        var f=car.getBoundingClientRect();
        carT=f.top;
        carR=f.right;

    var f=door.getBoundingClientRect();
    doorT=f.top;
    doorR=f.right;

        var f=roof.getBoundingClientRect();
        roofT=f.top;
        roofR=f.right;

    if((baseT-roofT)>-5 & (baseT-roofT)<5 & (baseR-roofR)<115 & (baseR-roofR)>106){
        if((carT-baseT)>209 & (carT-baseT)<214 & (baseR-carR)<404 & (baseR-carR)>395){
           if ((doorT-baseT)>180 & (doorT-baseT)<187 & (baseR-doorR)>247 & (baseR-doorR)<254){
                con.classList.remove('con'); 
                text.classList.add('del')
      }
     }
    }
  })
});