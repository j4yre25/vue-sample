const Floor = {
    template : `
    <div class="floor" ref="floor">
        <img ref="avatar" src="../01_Module_E/scene-1/avatar.png" alt="" class="avatar">
    </div>
    `,
    data(){
        return {
            movement : {
                left : false,
                right : false,
                down : false, 
                up : false
            },
            keys : false,
            clicked : false,
            avatar : {
                x : 30,
                y : 20
            }
        }
    },
    props : {
        title : String
    },


    methods:{
        moving(){
            
            if(this.movement.down){this.avatar.y += 5}
            if(this.movement.up){this.avatar.y -= 5}
            if(this.movement.right){this.avatar.x += 5}
            if(this.movement.left){this.avatar.x -= 5}

            if(this.avatar.x < 35){this.avatar.x = 35}
            if(this.avatar.x > 1225){this.avatar.x = 1225}
            if(this.avatar.y < 15){this.avatar.y = 15}
            if(this.avatar.y > 190){this.avatar.y = 190}

      
            // console.log(this.avatar.x) for checking
            // console.log(this.avatar.y) for checking

            // avatar
            let avatar = this.$refs.avatar
            if(this.keys){avatar.classList.remove('clickAnim')}
            avatar.style.top = this.avatar.y - 94 + 'px'
            avatar.style.left = this.avatar.x - ( 48 / 2 ) + 'px'



            window.requestAnimationFrame(this.moving)
        },
        keyDown({key}){
            if(key == "ArrowDown"){this.movement.down = true; this.keys = true}
            if(key == "ArrowLeft"){this.movement.left = true; this.keys = true}
            if(key == "ArrowRight"){this.movement.right = true; this.keys = true}
            if(key == "ArrowUp"){this.movement.up = true; this.keys = true}
        },
        keyUp({key}){
            if(key == "ArrowDown"){this.movement.down = false; this.keys = false}
            if(key == "ArrowLeft"){this.movement.left = false; this.keys = false}
            if(key == "ArrowRight"){this.movement.right = false; this.keys = false}
            if(key == "ArrowUp"){this.movement.up = false; this.keys = false}
        },
        click(e){
            let avatar = this.$refs.avatar 
            avatar.classList.add('clickAnim')
            this.avatar.x = e.offsetX
            this.avatar.y = e.offsetY
            
        }

    },
    created(){
        console.log(this.title)
    },
    mounted(){
        let floor = this.$refs.floor
        floor.addEventListener('click', this.click)
        window.requestAnimationFrame(this.moving)
        window.addEventListener('keydown', this.keyDown)
        window.addEventListener('keyup', this.keyUp)
    }
}

vm.component('floor', Floor)