AFRAME.registerComponent('game-play', {
    schema : {
        elementID : {
            type: 'string',
            default : '#coin1'
        }
    },
    update : function(){
        this.isCollided(this.data.elementID)
    },
    isCollided : function(elementID) {
        const el = document.querySelector(elementID);
        el.addEventListener('collide', (e)=>{
            if (elementID.includes('#coin')){
                console.log('coin Collision')
            }else if (elementID.includes('#fish')){
                console.log('fish collision')
            }
        })
    }
})