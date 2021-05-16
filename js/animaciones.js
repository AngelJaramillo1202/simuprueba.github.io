let objt = document.querySelectorAll('#nave');

var iruno = anime({
    targets: objt,
    translateX: 850,
    translateX: -850,
    loop: true,
    easing: 'easeInOutSine'

  });
var irdos = anime({
    targets: objt,
    translateX: -850,
    loop: true,
    easing: 'easeInOutSine'

  });

  function nave1(){
    iruno;
    document.getElementById('nave').style.zIndex = "1";
    irdos;
}
document.addEventListener("DOMContentLoaded", () => {{
    while( document.getElementById('mostrar1').style.visibility != 'visible'){
    anime({
        targets: '#nave',
        translateX: [
          { value: 850, duration: 4000, easing: 'easeInOutSine'},
          { value: 50, duration: 4000, easing: 'easeInOutSine', direction: "reverse"}
                    ],
        opacity:[
                        { value: 0, delay: 4000}
                ],
        scale: [
            {value: 1.25, duration: 2000, easing: 'easeInOutSine'},
            {value: 1, duration: 2000, easing: 'easeInOutQuad',}
          ],
        loop: true,
      });
      anime({
        targets: '#nave2',
        translateX: [
          { value: -850, duration: 4000, easing: 'easeInOutSine', delay: 4000}
                    ],
        opacity: [
            { value: 0},
            { value: 1, delay: 4000}
        ],
        scale: [
            {value: .75, duration: 2000, easing: 'easeInOutSine', delay: 4000},
            {value: 1, duration: 2000, easing: 'easeInOutQuad'}
          ],
        loop: true
      });
//ROCA
anime({
targets: '#objeto',
translateX: [
  { value: -850, duration: 4000, easing: 'easeInOutSine'},
  { value: 50, duration: 4000, easing: 'easeInOutSine', }
            ],
opacity: [
    { value: 0, delay: 4000}
],
scale: [
    {value: .75, duration: 2000, easing: 'easeInOutSine'},
    {value: 1, duration: 2000, easing: 'easeInOutQuad'}
  ],
loop: true
});
anime({
  targets: '#objeto2',
  translateX: [
    { value: 850, duration: 4000, easing: 'easeInOutSine', delay: 4000},
              ],
  opacity:[
    { value: 0},
    { value: 1, delay: 4000}
          ],
  scale: [
      {value: 1.25, duration: 2000, easing: 'easeInOutSine', delay: 4000},
      {value: 1, duration: 2000, easing: 'easeInOutQuad',}
    ],
  loop: true,
});

}
        
  



            }})


    







