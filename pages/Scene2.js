const Scene2 = {
    template: '#scene2',
    data(){
        return{
            data : {
                tree : {
                    x : 1037,
                    y : 313,
                    w : 301,
                    h : 367,
                    zIndex : 1,
                    src : "scene-2/tree.png"
                },
                tree2 : {
                    x : 247,
                    y : 412,
                    w : 301,
                    h : 367,
                    zIndex : 2,
                    src : "scene-2/tree.png"
                },
                prev : {
                    x : 178,
                    y : 383,
                    w : 138,
                    h : 127,
                    zIndex : 4,
                    src : "scene-2/street-sign-prev.png"
                },
                grass: {
                    x : 115,
                    y : 421,
                    w : 125,
                    h : 86,
                    zIndex : 5,
                    src : "scene-2/grass.png"
                },
                grass2: {
                    x : 219,
                    y : 414,
                    w : 125,
                    h : 86,
                    zIndex : 6,
                    src : "scene-2/grass.png"
                },
                sun : {
                    x : 116,
                    y : 115,
                    w : 180,
                    h : 186,
                    zIndex : 7,
                    src : "scene-2/sun.png"
                },
                next : {
                    x : 1197,
                    y : 416,
                    w : 138,
                    h : 127,
                    zIndex : 8,
                    src : "scene-2/street-sign-next.png"
                },
                fullscreen : {
                    x : 1154,
                    y : 56,
                    w : 205,
                    h : 69,
                    zIndex : 9,
                    src : "scene-2/fullscreen-button.png"
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
                    zIndex: item.zIndex
                }
            }else {
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
    }
}