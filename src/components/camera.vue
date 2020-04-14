 <template>
    <div class="jazzy">
        <div class="container" style="padding:50px;">
            <h1 style="text-align:center">Chris's Machine Learning Site</h1>
        </div>
        <div class="top-part">
            
            <div class="containe" style="align-items:stretch;">
                <div class="containe" style="width: 50%; justify-content: center">
                    <div class="camera">
                        <div id="display" class="card" style="z-index: 1; padding: 20px 50px; display: flex; flex-direction: column">
                            <video autoplay class="feed" id='vid' style="z-index: -1"></video>
                            <div @click="buttonPressed()" style="cursor: pointer;" class="btn btn-primary">Snap</div>
                        </div>
                        <div class="overlay-container" v-bind:style="{'margin-top': '-' + canvasHeightFull + 'px'}" style="z-index: 30000;  padding: 20px 50px 0px 50px;">
                            <div class="overlay" v-bind:style="{height: canvasHeight + 'px', 'max-width': canvasWidth + 'px'}" style="margin-left:auto; margin-right:auto;">
                                <canvas style="" id="overlai"></canvas>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                <div class="containe" style="width: 100%; position: absolute; flex-direction: column; align-items: center; justify-content: space-between; height: 400px; margin-top: 20px;">
                    
                    <div class="card containe" :class="fistMode ? '' :  'shadow'" @click="swtichFist(false)" style="flex-direction: column; align-items: center; padding: 5px 15px;  cursor: pointer;">
                        <svg xmlns="http://www.w3.org/2000/svg" :style="{fill: fistMode ?  '#d0d0d04d' : '#f7caa5', 'margin-left': '5px', 'margin-right':'-5px'}" height="60px" width="60px" viewBox="-64 0 485 486" ><path d="m130.042969 66.648438v-26.507813c0-17.851563 13.511719-32.332031 30.179687-32.332031h.710938c16.667968 0 30.179687 14.472656 30.179687 32.320312v46.230469c.09375-8.238281 3.234375-16.152344 8.820313-22.210937 5.484375-5.992188 13.222656-9.425782 21.351562-9.46875 16.65625 0 30.167969 14.460937 30.1875 32.308593l.140625 204.832031 24.460938-29.769531c16.449219-20.03125 44.878906-22.171875 63.777343-4.800781l9.132813 7.578125-87.390625 167.890625c-14.609375 28.070312-42.261719 45.472656-72.261719 45.472656h-98.007812c-45.652344 0-82.671875-39.621094-82.722657-88.519531-.078124-87.09375-.167968-191.542969-.027343-249.851563.039062-17.820312 13.539062-32.242187 30.179687-32.242187h.667969c16.671875 0 30.179687 14.472656 30.179687 32.332031v-73.261718c0-17.859376 13.523438-32.339844 30.191407-32.339844h.070312c16.671875 0 30.179688 14.480468 30.179688 32.339844zm0 0"/><path d="m91.324219 486h98.007812c32.96875 0 63.378907-18.976562 79.355469-49.679688l87.390625-167.84375c1.742187-3.332031.914063-7.429687-1.984375-9.824218l-8.980469-7.445313c-10.378906-9.640625-24.28125-14.558593-38.410156-13.585937-14.421875 1.0625-27.757813 8.070312-36.8125 19.347656l-10.292969 12.53125-.125-182.519531c-.023437-22.222657-17.15625-40.300781-38.1875-40.300781-8.015625 0-15.804687 2.632812-22.175781 7.492187v-13.945313c.003906-22.234374-17.125-40.226562-38.175781-40.226562h-.710938c-19.132812 0-35.019531 14.851562-37.757812 34.269531-6.433594-5.097656-14.394532-7.882812-22.601563-7.910156-21.058593 0-38.121093 18.046875-38.121093 40.289063v40.464843c-6-4.734375-14.050782-7.113281-22.320313-7.113281h-.667969c-21 0-38.128906 17.832031-38.179687 40.011719-.144531 60.1875-.042969 169.625.027343 249.675781.058594 53.21875 40.753907 96.3125 90.722657 96.3125zm-74.75-345.953125c.027343-13.375 9.980469-24.046875 22.179687-24.046875h.667969c12.230469 0 22.320313 10.5 22.320313 23.910156v105.210938c0 4.417968 3.582031 8 8 8 4.417968 0 8-3.582032 8-8v-178.472656c0-13.417969 9.734374-24.339844 22.042968-24.339844 12.226563 0 21.957032 10.921875 21.957032 24.339844v178.472656c0 4.417968 3.582031 8 8 8 4.417968 0 8-3.582032 8-8v-204.980469c0-13.414063 10.25-24.140625 22.480468-24.140625h.710938c12.230468 0 22.179687 10.816406 22.179687 24.226562v46.097657c-.011719.289062-.015625.523437-.015625.710937 0 .101563.011719.179688.015625.273438l-.007812 66.882812c-.011719 46.671875-.019531 86.917969-.007813 90.902344.011719 2.109375.859375 4.128906 2.359375 5.613281s3.53125 2.308594 5.640625 2.296875h.027344c2.117188.007813 4.148438-.828125 5.644531-2.324218 1.5-1.496094 2.335938-3.527344 2.328125-5.644532-.011718-3.957031 0-44.21875.007813-90.878906l.007812-67.566406c0-.035156 0-.0625 0-.101563.054688-6.257812 2.429688-12.273437 6.664063-16.878906 3.972656-4.378906 9.597656-6.890625 15.507812-6.933594 12.21875 0 22.175782 10.914063 22.1875 24.316407l.140625 204.832031c.003907 3.378906 2.125 6.390625 5.304688 7.527343 3.179687 1.136719 6.734375.15625 8.878906-2.453124l24.460937-29.773438c6.273438-7.863281 15.535157-12.765625 25.566407-13.535156 9.8125-.648438 19.453125 2.8125 26.617187 9.550781.101563.089844.203125.179687.300782.265625l4.164062 3.457031-84.410156 162.070313c-13.214844 25.386718-38.183594 41.066406-65.164063 41.066406h-98.007812c-41.15625 0-74.675781-35.925781-74.722657-80.328125-.070312-80.039063-.171874-189.460937-.027343-249.625zm0 0" fill="#083863"/></svg>
                        
                        <h3 :class="fistMode ? 'text-secondary' : 'text-black'">{{handCount+openScore}}</h3>
                    </div>

                    <div class="card containe" :class="fistMode ? 'shadow' :  ''" @click="swtichFist(true)" style="flex-direction: column; align-items: center; padding: 5px 15px; cursor: pointer;">
                        <svg xmlns="http://www.w3.org/2000/svg" :style="{fill: fistMode ? '#f7caa5' :  '#d0d0d04d'}" height="60px" viewBox="0 -9 427.3679 427" width="60px"><path d="m228.164062 57.691406c-3.550781-23.007812 10.988282-44.347656 32.46875-47.660156l.089844-.019531c21.488282-3.308594 41.78125 12.660156 45.320313 35.671875l3.261719 21.128906c-3.550782-23.011719 10.988281-44.351562 32.46875-47.660156l.871093-.128906c21.4375-3.3125 41.707031 12.589843 45.296875 35.550781 11.761719 75.117187 12.792969 82.519531 29.992188 194.777343 9.648437 63.019532-30.179688 121.429688-89.011719 130.5l-126.308594 19.472657c-38.660156 5.957031-77.75-10.960938-102.152343-44.230469l-80.5-123.929688c-19.453126-29.953124-14.792969-69.519531 11.09375-94.132812l42.808593-40.699219-5.808593-38.078125c-3.53125-23 11-44.320312 32.46875-47.632812h.007812c21.480469-3.308594 41.773438 12.660156 45.320312 35.671875l1.429688 9.269531c-3.078125-22.691406 11.363281-43.539062 32.582031-46.808594l.910157-.140625c21.488281-3.3125 41.78125 12.660157 45.320312 35.667969zm0 0" /><path d="m414.9375 176.898438c-7.636719-49.964844-10.5-68.65625-19.089844-123.5625-4.261718-27.253907-28.675781-46.199219-54.386718-42.226563l-.90625.136719c-12.472657 1.949218-23.585938 8.96875-30.699219 19.398437-3.335938-7.417969-8.414063-13.917969-14.800781-18.957031-9.988282-8.03125-22.886719-11.507812-35.558594-9.585938-.078125.015626-.179688.03125-.28125.050782-12.585938 2.023437-23.757813 9.203125-30.820313 19.816406-.445312.648438-.871093 1.308594-1.28125 1.976562-3.140625-5.242187-7.210937-9.871093-12.007812-13.65625-9.988281-8.03125-22.886719-11.511718-35.558594-9.585937l-.910156.140625c-12.5 1.953125-23.632813 9-30.753907 19.460938-.824218 1.191406-1.589843 2.414062-2.304687 3.660156-10.136719-15.183594-27.761719-24.0390628-46.109375-21.277344-.058594.007812-.113281.015625-.171875.023438-25.785156 3.976562-43.351563 29.4375-39.160156 56.746093l5.175781 33.957031-39.78125 37.820313c-28.664062 27.273437-33.824219 71.101563-12.277344 104.285156l80.5 123.929688c.082032.128906.167969.253906.257813.375 22.671875 30.910156 57.316406 48.675781 93.238281 48.675781 5.550781 0 11.09375-.425781 16.582031-1.269531l126.308594-19.472657c63.070313-9.722656 106-72.355468 95.699219-139.617187-4.632813-30.226563-8.089844-52.851563-10.902344-71.242187zm-87.234375 195.042968-126.308594 19.472656c-35.613281 5.492188-71.734375-10.171874-94.347656-40.871093l-80.375-123.738281c-17.347656-26.722657-13.191406-62.015626 9.894531-83.972657l31.699219-30.132812 9.152344 60.039062c.59375 3.90625 3.949219 6.792969 7.898437 6.800781.40625 0 .8125-.03125 1.214844-.09375 4.367188-.667968 7.367188-4.746093 6.703125-9.113281l-11.464844-75.191406c-.011719-.066406-.019531-.136719-.03125-.199219l-5.777343-37.898437c-2.847657-18.554688 8.652343-35.789063 25.652343-38.492188l.136719-.019531c17.085938-2.632812 33.324219 10.371094 36.203125 28.984375l1.417969 9.207031c.03125.269532.066406.539063.109375.8125h.015625l10.613281 68.863282c.675781 4.363281 4.761719 7.359374 9.128906 6.6875 4.367188-.675782 7.359375-4.761719 6.6875-9.128907l-10.710937-69.46875c-2.480469-18.273437 9.125-35.242187 25.871094-37.824219l.910156-.140624c8.289062-1.230469 16.714844 1.070312 23.226562 6.34375 7.039063 5.625 11.671875 13.71875 12.960938 22.636718l9.597656 62.265625c.601562 3.902344 3.957031 6.78125 7.902344 6.785157.410156 0 .820312-.03125 1.226562-.09375 4.367188-.675782 7.363282-4.757813 6.691406-9.125l-7.527343-48.8125c0-.019532 0-.035157 0-.050782-1.457031-8.894531.53125-18.011718 5.554687-25.492187 4.617188-6.988281 11.953125-11.714844 20.222656-13.039063.074219-.011718.164063-.027344.257813-.042968 8.238281-1.175782 16.589844 1.132812 23.054687 6.367187 7.046876 5.625 11.683594 13.71875 12.972657 22.636719l7.109375 46.089844c.601562 3.898437 3.957031 6.777343 7.902344 6.78125 2.351562-.003907 4.589843-1.011719 6.148437-2.777344 1.558594-1.761719 2.289063-4.109375 2.003906-6.445313l-3.617187-24.949219v-.007812c-1.832032-8.867188.09375-18.097656 5.316406-25.496094 4.5625-6.96875 11.847656-11.699218 20.070312-13.03125l.851563-.136718c17.042969-2.632813 33.246094 10.324218 36.148437 28.878906 8.589844 54.878906 11.429688 73.566406 19.066407 123.507812 2.8125 18.390625 6.265625 41.015625 10.898437 71.246094 8.960938 58.550781-27.972656 113.003906-82.332031 121.378906zm0 0" fill="#083863"/></svg>
                        <h3 class="" :class="fistMode ? 'text-black' :  'text-secondary'">{{fistCount+fistScore}}</h3>
                    
                    </div>
                    
                
                    
                    
                    <h3>{{fistCount+fistScore + handCount+openScore}}</h3>
                </div>
                
                <div class="containe" style="width: 50%; justify-content: center;">
                    <div class="card containe" style="padding: 20px 50px; justify-content: center; max-width: 600px">
                        <div v-if="mainScreen" style="">
                            <h3 class="text-center" style="margin-bottom: 50px">When you start the game, your images will appear here!</h3>
                            <h5 class="text-center">Get started and you can help us train our data set :)</h5>
                        </div>
                        <div v-show="showImage" style="display:flex; flex-direction: column">
                            <canvas id="canvas"></canvas>
                            <canvas id="overlaiTwo" width="480px" height="360px" style="position: absolute"></canvas>
                            <div @click="deletePressed" style="cursor: pointer;" class="btn btn-danger">Delete</div>
                            
                        </div>
                        <div class="containe" v-if="deleteScreen" style="flex-direction: column; ">
                            <h5 style="margin-bottom: 35px">Are you sure you want to delete this image?</h5>
                            <div class="containe" style="justify-content: center;">
                                <div class="btn btn-primary" @click="completeDelete" style="margin-right: 25px">
                                    Yes
                                </div>
                                <div @click="undoButton" style="cursor: pointer;" class="btn btn-secondary">
                                    Undo
                                </div>
                            </div>
                        </div>
                        <div v-if="deleteCompleteScreen">
                            <h3 class="text-center" style="margin-bottom: 50px">You deleted an image.</h3>
                            <h5 class="text-center">Press play to get back into the action!</h5>
                        </div>

                    </div>
                </div>
                
            </div>
            
        </div>
        <highscore :userName="userName" :current="selected" :usersCollection="usersCollection"/>
    </div>
</template>



<script>
import firestore from './firebaseInit'
import storage from './firestorageInit'
import highscore from './highscore'
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
    name: "camera",
    components: {
        highscore
    },
    props: ['userName', 'selected', 'fistScore', 'openScore', 'usersCollection'],
    data(){
        return {
            id: this.makeid(15),

            blue: "#007bff",
            red: "#dc3545",

            prevHeight: 0,
            prevWidth: 0,
            prevXpos: 0,
            prevYpos: 0,

            fistCount: 0,
            handCount: 0,

            height: 130,
            width: 100,
            xpos: 200,
            ypos: 200, 
            canvasHeight: 0,
            canvasWidth: 0,
            canvasHeightFull: 0,
            scale: 1,
            mainScreen: true,
            showImage: false,
            deleteScreen: false,
            deleteCompleteScreen: false,
            fistMode: false,
        }
    },
    methods: {
        init(){
            if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices){
                navigator.mediaDevices.getUserMedia({video: true}).then(stream =>{
                    const videoPlayer = document.querySelector("video");
                    videoPlayer.srcObject = stream
                    videoPlayer.play()        
                    new Promise(() => {
                        setTimeout(() => {
                            var feed = document.getElementById('vid');
                            this.$data.canvasHeight = feed.clientHeight
                            this.$data.canvasWidth = feed.clientWidth
                            var feed2 = document.getElementById('display');
                            this.$data.canvasHeightFull = feed2.clientHeight
                            var c = document.getElementById("overlai");
                            
                            c.height = feed.clientHeight
                            c.width = feed.clientWidth

                            
                            this.scale = Math.random()*0.4 + 0.8
                            this.height = this.scale*130;
                            this.width = this.scale*100
                            this.xpos = (this.canvasWidth - this.width)*Math.random()
                            this.ypos = (this.canvasHeight - this.height)*Math.random()

                            this.drawTheRect("overlai", this.xpos, this.ypos, this.height, this.width)
                        }, 1000)
                    });
                })
            }
        },
        swtichFist(t){
            this.fistMode = t;
            this.playSwitchSound()
            let promise = new Promise(() => {
            setTimeout(() => {
                this.playSwitchSound()
            }, 200)
            console.log(promise)
            this.drawTheRect("overlai", this.xpos, this.ypos, this.height, this.width)
        });
        },
        playSwitchSound() {
            var audio = new Audio('https://www.freesoundslibrary.com/wp-content/uploads/2018/01/ding-sound-effect.mp3');
            audio.play();
        },
        playPositiveSound() {
            var audio = new Audio('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3');
            audio.play();
        },
        playNegativeSound() {
            var audio = new Audio('http://soundbible.com/mp3/Computer%20Error%20Alert-SoundBible.com-783113881.mp3');
            audio.play();
        },
        resetDisplay() {
            this.mainScreen = false;
            this.showImage = false;
            this.deleteScreen = false;
            this.deleteCompleteScreen = false;
        },
        completeDelete() {
            this.playNegativeSound();
            this.resetDisplay()
            this.deleteCompleteScreen = true;
        },
        undoButton() {
            this.playPositiveSound();
            this.resetDisplay()
            this.showImage = true;
        },
        deletePressed() {
            
            this.playNegativeSound();
            this.resetDisplay()
            this.deleteScreen = true;
        },
        buttonPressed(){
            if (this.showImage){
                this.pushImage()
            }
            this.playPositiveSound();

            if(this.showImage) {
                if(this.fistMode) this.fistCount++
                else this.handCount++
            }

            this.resetDisplay()
            this.showImage = true;

            var canvas = document.getElementById('canvas');
            var feed = document.getElementById('vid');
            

            
            canvas.width = feed.clientWidth
            canvas.height = feed.clientHeight
            // console.log($(".feed").width())
            const ctx = canvas.getContext("2d");
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = "high";
            ctx.drawImage(document.querySelector("video"), 0, 0, canvas.width,canvas.height);
            // context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);

            this.drawTheRect("overlaiTwo", this.xpos, this.ypos, this.height, this.width)

            this.scale = Math.random()*0.4 + 0.8
            this.height = this.scale*130;
            this.width = this.scale*100
            this.xpos = (this.canvasWidth - this.width)*Math.random()
            this.ypos = (this.canvasHeight - this.height)*Math.random()
            
            this.drawTheRect("overlai", this.xpos, this.ypos, this.height, this.width)

        },
        pushImage(){
            var stor = storage.ref().child("images")

            var push = {
                id: this.id,
                height: this.prevHeight,
                width: this.prevWidth,
                xpos: this.prevXpos,
                ypos: this.prevYpos
            }       

            var canvas = document.getElementById("overlaiTwo");
            canvas.toBlob((blob) => {
                stor.put(blob).then(snapshot =>{
                    console.log(snapshot);
                    firestore.collection("Images").doc().set(push)
                })
            })
            // storage.ref().child("images").put()
            // firebase.collection("Images").
        },
        drawTheRect(nam, x, y, h, w) {
            var c = document.getElementById(nam);
            var ct = c.getContext("2d");
            ct.clearRect(0, 0, c.width, c.height);
            ct.beginPath();
            ct.strokeStyle = this.fistMode ? this.blue : this.red;
            ct.lineWidth = 3;
            ct.rect(x,y,h,w);
            ct.stroke();
        },
        makeid(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        },
    },
    beforeMount() {
        this.init();
        
    }, 
    updated(){

    },
    mounted() {
        

        //this.fistCount = this.fistScore
        //this.handCount = this.openScore


    }
}
</script>

<style lang="scss" scoped>
.shadow {
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}
.jazzy {
    height:100%;
    display:flex; 
    flex-direction: column;
    justify-content: start;
}
.display-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
}
.header{
    display:flex;
    justify-content: center;
}
.top-part {
    width:100%;
    height: 100%;
}
.overlay-container{
    position: relative;
}
.side-main{
    display: flex;
    justify-content: end;
}
.btn {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
}
.containe {
    display: flex;

    .camera {
        max-width: 100vw;
        // max-width: 480px;
        // padding: 25px;
        box-sizing: border-box;
        .feed {        
            display: block;
            width: 100%;
            // max-width: 1280px;
            max-width: 480px;
            margin: 0 auto;
        }
        .snap{
            display: block;
            margin: 0 auto;
            width: 75px;
            height: 75px;
            border-radius: 50%;

        }
        .canvas{
            display: block;
            margin: 0 auto;
            padding: 25px;
        }
    }
}
</style>
