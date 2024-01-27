const MainArea = {
    template : `
    <div class="main-area">
        <video v-if="video" :src="video" controls></video>
        
        <img v-else :src="image" alt="">
    </div>
    `,
    props : {
        video : String,
        image : String,
    },
    created(){
        console.log(this.video)
    }
}

vm.component('main-area', MainArea)