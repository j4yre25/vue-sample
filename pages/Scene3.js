const Scene3 = {
    template: '#scene3',
    data(){
        return{
            data : {
                moon : {
                    x : 100,
                    y : 110,
                    w : 156,
                    h : 143,
                    zIndex : 1,
                    src : "scene-3/moon.png"
                },
                cloud : {
                    x : 228,
                    y : 183,
                    w : 228,
                    h : 127,
                    zIndex : 3,
                    src : "scene-3/cloud.png"
                },
                prev : {
                    x : 178,
                    y : 383,
                    w : 138,
                    h : 127,
                    zIndex : 4,
                    src : "scene-3/street-sign-prev.png"
                },
                grass : {
                    x : 115,
                    y : 421,
                    w : 125,
                    h : 86,
                    zIndex : 5,
                    src : "scene-3/grass.png"
                },
                grass2 : {
                    x : 219,
                    y : 414,
                    w : 125,
                    h : 86,
                    zIndex : 6,
                    src : "scene-3/grass.png"
                },
                fullscreen : {
                    x : 1154,
                    y : 56,
                    w : 205,
                    h : 69,
                    zIndex : 7,
                    src : "scene-3/fullscreen-button.png"
                }
            }
        }
    },

    methods: {
        displayAssets(item){
            if(item.src.includes('tree.png')){
                return {
                    top: item.y - item.h + 'px',
                    left: item.x - (item.w / 2) + 'px',
                    width: item.w + 'px',
                    height: item.h + 'px',
                    backgroundImage: 'url(' + item.src + ')',
                    zIndex: item.zIndex,
                }
            } else {
                return {
                    top: item.y - (item.h / 2) + 'px',
                    left: item.x - (item.w / 2) + 'px',
                    width: item.w + 'px',
                    height: item.h + 'px',
                    backgroundImage: 'url(' + item.src + ')',
                    zIndex: item.zIndex,
                }
            }
        }
    },



mounted(){
    let data = [...this.data]
    let i = 0
    const display = setInterval(() =>{
        if(data[i]){
            this.datas.push(data[i])
            i++;
        }else{
            clearInterval(display)
        }
    }, 100)

}
}
