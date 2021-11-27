let elems = document.querySelectorAll('.elem');
let offsetX;
let offsetY;
let con= document.querySelector('.con');
let text = document.querySelector('.text');
let congr = document.querySelector('.congr');
var babochkaT; var babochkaR; var bearT; var bearR; var belkaT; 
var belkaR; var chaikaT; var chaikaR; var clownT; let clownR;
var crabR; var dyatelR; var forelR; var kaplyaR; var kengooroR; var kozelR; var orelR; var pavukR; 
var pchelaR; var schukaR; var scorpionR; var seledkaR; var sinicaR; var sovaR; var tigerR; var crabT; 
var dyatelT; var forelT; var kaplyaT; var kengooroT; var kozelT; var orelT; var pavukT; var pchelaT; 
var schukaT; var scorpionT; var seledkaT; var sinicaT; var sovaT; var tigerT;

var container = document.querySelector(".container");

var img = document.querySelectorAll('img');

for (let i = 0; i < img.length; i++) {
  let left = Math.random() * (document.body.offsetWidth - 100)
  let top = Math.random() * (document.body.offsetHeight - 100)
  // 100 - это размер картинки, чтобы не смещалась за пределы body


  img[i].style.left = left + 'px';
  img[i].style.top = top + 'px';
}



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

    var f=chaika.getBoundingClientRect();
    chaikaT=f.top;
    chaikaR=f.right;

    var f=babochka.getBoundingClientRect();
    babochkaT=f.top;
    babochkaR=f.right;

    var f=bear.getBoundingClientRect();
    bearT=f.top;
    bearR=f.right;

    var f=clown.getBoundingClientRect();
    clownT=f.top;
    clownR=f.right;

    var f=crab.getBoundingClientRect();
    crabT=f.top;
    crabR=f.right;

    var f=dyatel.getBoundingClientRect();
    dyatelT=f.top;
    dyatelR=f.right;

    var f=forel.getBoundingClientRect();
    forelT=f.top;
    forelR=f.right;

    var f=kaplya.getBoundingClientRect();
    kaplyaT=f.top;
    kaplyaR=f.right;

    var f=kengooro.getBoundingClientRect();
    kengooroT=f.top;
    kengooroR=f.right;

    var f=kozel.getBoundingClientRect();
    kozelT=f.top;
    kozelR=f.right;

    var f=orel.getBoundingClientRect();
    orelT=f.top;
    orelR=f.right;

    var f=pavuk.getBoundingClientRect();
    pavukT=f.top;
    pavukR=f.right;

    var f=pchela.getBoundingClientRect();
    pchelaT=f.top;
    pchelaR=f.right;

    var f=schuka.getBoundingClientRect();
    schukaT=f.top;
    schukaR=f.right;

    var f=scorpion.getBoundingClientRect();
    scorpionT=f.top;
    scorpionR=f.right;

    var f=seledka.getBoundingClientRect();
    seledkaT=f.top;
    seledkaR=f.right;

    var f=sinica.getBoundingClientRect();
    sinicaT=f.top;
    sinicaR=f.right;

    var f=sova.getBoundingClientRect();
    sovaT=f.top;
    sovaR=f.right;

    var f=tiger.getBoundingClientRect();
    tigerT=f.top;
    tigerR=f.right;

    var kozelRR = kozelR.match(/\d+/)[0];
    
    var belkaRR = belkaR.match(/\d+/)[0];

    var tigerRR = tigerR.match(/\d+/)[0];

    var kengooroRR = kengooroR.match(/\d+/)[0];

    var bearRR = bearR.match(/\d+/)[0];


    if (kozelRR<100 & belkaRR<100 & tigerRR<100 & kengooroRR<100 & bearRR<100){
        con.classList.remove('con'); 
        text.classList.add('del');
        congr.classList.remove('congr');
    }
  })
});