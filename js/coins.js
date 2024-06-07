AFRAME.registerComponent('coins',{
    init: function(){
        for(i=1;i<=10;i++){
            const id = `coin${i}`;

            const posX = Math.random() *100 + -50;
            const posY = Math.random() *5 +5;
            const posZ = Math.random() *60 + -40;

            const position = {
                x : posX,
                y : posY,
                z : posZ
            }

            this.createCoins(id,position)
        }
    },
    tick: function(){

    },
    createCoins : function(id, position){
        const treasureEn = document.querySelector('#treasure_coins');
        const coinEl  = document.createElement('a-entity');
        coinEl.setAttribute('id', id);
        coinEl.setAttribute('position', position);
        coinEl.setAttribute('material','color','yellow');
        coinEl.setAttribute('geometry', {
            primitive : 'circle',
            radius : 1
        })
        coinEl.setAttribute('animation', {
            property : 'rotation',
            to : '0 360 0',
            loop : 'true',
            dur : 1000
        })
        coinEl.setAttribute('static-body',{
            shape:'sphere', 
            sphereRadius: 2
        })
        coinEl.setAttribute('game-play', {
            elementID : `#${id}`
        })
        treasureEn.appendChild(coinEl);
    }
})