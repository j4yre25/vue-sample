const Scene1 = {
    template: '#scene1',

    data(){

        return{
            datas : [],
            data: [
                {
                    x : 215,
                    y : 424,
                    w : 301,
                    h : 367,
                    zIndex : 2,
                    src : "scene-1/tree.png"
                },
                {
                    x : 303,
                    y : 424,
                    w : 125,
                    h : 86,
                    zIndex : 3,
                    src : "scene-1/grass.png"
                },
                {
                    x : 963,
                    y : 436,
                    w : 125,
                    h : 86,
                    zIndex : 4,
                    src : "scene-1/grass.png"
                },
                {
                    x : 92,
                    y : 394,
                    w : 125,
                    h : 127,
                    zIndex : 4,
                    src : "scene-1/street-sign-scene-1.png"
                },
                {
                    x : 1197,
                    y : 416,
                    w : 138,
                    h : 127,
                    zIndex : 6,
                    src : "scene-1/street-sign-next.png"
                },
                {
                    x : 205,
                    y : 77,
                    w : 352,
                    h : 68,
                    zIndex : 7,
                    rotation : -7,
                    src : "scene-1/quiz-title.png"
                },
                {
                    x : 1154,
                    y : 56,
                    w : 205,
                    h : 69,
                    zIndex : 8,
                    src : "scene-1/fullscreen-button.png"
                }
            ]

        }
    },
    methods : {
        displayAssets(item){
            if(item.src.includes('tree.png')){
                return {
                    top : item.y - item.h + 'px',
                    left : item.x - (item.w / 2) + 'px',
                    width : item.w + 'px',
                    height: item.h + 'px',
                    backgroundImage: 'url('+item.src+')',
                    zIndex: item.zIndex,
                }
            }else{
                return {
                    top : item.y - (item.h / 2) + 'px',
                    left : item.x - (item.w / 2) + 'px',
                    width : item.w + 'px',
                    height: item.h + 'px',
                    backgroundImage: 'url('+item.src+')',
                    zIndex: item.zIndex,
                    transform: item.rotation ? 'rotate(' + item.rotation + 'deg)' : 0
                }
            }
        }
        

        
    },

    
    mounted(){
        let i = 0
        const display = setInterval(() =>{
            if(this.data[i]){
                this.datas.push(this.data[i])
                i++;
            }else{
                clearInterval(display)
            }
        }, 100)
        console.log(this.$refs)

    //     const player = {
    //         x: 0,
    //         y: 0,
    //         h: 70,
    //         w: 50,
    //         isMoving: {
    //             left : false,
    //             right: false,
    //             up : false,
    //             down: false
    //         }
    //     }
        
    //     function step(){
    //         if(player.isMoving.left && player.x > 0){
    //             player.x -= 5
    //         }
    //         if(player.isMoving.right && player.x < mcontainer.offsetWidth - player.w){
    //             player.x += 5
    //         }
    //         if(player.isMoving.up && player.y > 0){
    //             player.y -= 5
    //         }
    //         if(player.isMoving.down && player.y < mcontainer.offsetHeight - player.h){
    //             player.y += 5
    //         }
        
    //         avatar.style.left = player.x + 'px'
    //         avatar.style.top = player.y + 'px'
        
    //         requestAnimationFrame(step)
    //     }
        
    //     requestAnimationFrame(step)
        
    //     document.addEventListener('keydown', ({key}) => {
    //         if(key == 'ArrowRight'){
    //             player.isMoving.right = true
    //         }
    //         if(key == 'ArrowLeft'){
    //             player.isMoving.left = true
    //         }
    //         if(key == 'ArrowDown'){
    //             player.isMoving.down = true
    //         }
    //         if(key == 'ArrowUp'){
    //             player.isMoving.up = true
    //         }
    //     })
        
    //     document.addEventListener('keyup', ({key}) => {
    //         if(key == 'ArrowRight'){
    //             player.isMoving.right = false
    //         }   
    //         if(key == 'ArrowLeft'){
    //             player.isMoving.left = false
    //         }
    //         if(key == 'ArrowDown'){
    //             player.isMoving.down = false
    //         }
    //         if(key == 'ArrowUp'){
    //             player.isMoving.up = false
    //         }
    //     })
    // }
}
}