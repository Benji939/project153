AFRAME.registerComponent('fish',{
    init: function(){
        for(i=1;i<=10;i++){
            const id = `fish${i}`;

            const posX = Math.random() *100 + -50;
            const posY = Math.random() *5 +5;
            const posZ = Math.random() *60 + -40;

            const position = {
                x : posX,
                y : posY,
                z : posZ
            }

            this.createFish(id,position)
        }
    },
    tick: function(){

    },
    createFish : function(id, position){
        const fishEN = document.querySelector('#fishes');
        const fishEL  = document.createElement('a-entity');
        fishEL.setAttribute('id', id);
        fishEL.setAttribute('position', position);
        fishEL.setAttribute('gltf-model', './assets/fish/scene.gltf');
        fishEL.setAttribute('rotation', {
            x : 0,
            y : 100,
            z : 0
        })
        fishEL.setAttribute('scale', {
            x : 0.8,
            y : 0.8,
            z : 0.8 
        })
        fishEL.setAttribute('animation', {
            property : 'position',
            to : '200 10 -20',
            loop : 'true',
            dur : 20000
        })
        fishEL.setAttribute('animation-mixer',{})
        fishEL.setAttribute('static-body', {
            shape: 'sphere',
            sphereRadius: 2
        })
        fishEL.setAttribute('game-play',{
            elementID : `#${id}`
        })
        fishEN.appendChild(fishEL);
    }
})