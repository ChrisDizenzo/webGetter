<template>
  <div id="app" >
    <div class="" v-if="modal" style="height: 100vh; width: 100vw; z-index: 50000; position:absolute; display:flex; flex-direction: column; align-items: center; justify-content: center;">
      <div class="card modalboi shadow" :class="slide ? (loginMode==0) ? 'slidee' : ['slidee', 'sizee'] : ''" style="width: 50%; max-width: 600px;position: absolute">
        <div v-show="loginMode==0" style="display: flex; flex-direction: column; padding: 20px 80px 35px 80px;">
          <h2 class="text-center display-1">Mach-e</h2>

          <p class="text-center">Please enter a username below</p>
          
          <div class="input-group input-group-lg" style="margin-top: 20px" >
            <input type="text" v-model="inputName" @keyup.enter="submitName" class="form-control" aria-label="Large" placeholder="Username" aria-describedby="inputGroup-sizing-sm">
          </div>

          
          <div v-show="errorType==0" style="margin-top: 15px; margin-bottom: 0px" class="alert alert-danger" role="alert">
            String is too loooong fam!
          </div>

          <div v-show="errorType==1" style="margin-top: 15px; margin-bottom: 0px" class="alert alert-danger" role="alert">
            String is too short fam!
          </div>

          <div v-show="errorType==2" style="margin-top: 15px; margin-bottom: 0px" class="alert alert-danger" role="alert">
            String can't have any weird ©#@R@©t3r$!!
          </div>


          <div class="btn text-white" @click="submitName" :class="submitCheck" style="margin-top: 15px">
            Submit
          </div>
         
        </div>

        <div v-show="loginMode==2" style="display: flex; flex-direction: column; padding: 20px 80px 35px 80px;">
          <h2 class="text-center display-1">Mach-e</h2>

          <p class="text-center">Please enter a username below</p>
          
          <p class="text-center" style="margin-top: 20px">Loading your username</p>

          
         
        </div>


        <div v-show="loginMode==1" style="display: flex; flex-direction: column; padding: 20px 80px 35px 80px;">
          <h2 class="text-center display-1">Welcome</h2>

          <p class="text-center">Please enter your preferred color!</p>
          

          <h1 class="text-center" :class="'text-'+colorBootstrap[selected]" style="margin-top:15px">{{userName}}</h1>

          <div class="containe" style="justify-content: center; margin-top: 25px; margin-left:auto; margin-right: auto">
            <div class="btn-group" role="group" aria-label="Basic example">
              <div v-for="(color,ind) in colorBootstrap" @click="changeInd(ind)" type="button" class="btn" :class="'btn-' + colorBootstrap[ind]" :key="ind">
                <div class="circle-holder" style="width: 30px; height:30px" >

                  <svg height="25px"  :style="{fill: (selected==ind) ? 'white' : 'transparent'}" viewBox="0 -46 417.81333 417" width="25px" xmlns="http://www.w3.org/2000/svg"><path d="m159.988281 318.582031c-3.988281 4.011719-9.429687 6.25-15.082031 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.246093l15.082031-15.085938c12.503907-12.5 32.75-12.5 45.25 0l75.199219 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.085938c12.5 12.5 12.5 32.765624 0 45.246093zm0 0"/></svg>
                </div>
                  
              </div>
              
            </div>
          </div>

          <div class="btn text-white" @click="submitNameAndColor" :class="submitCheckCol" style="margin-top: 45px">
            Submit
          </div>
         
        </div>
        
      </div>

        <div class="container-fluid text-center text-md-left bg-secondary" style="margin-top: auto;">
          <div class="row">
            <div class="col-sm text-center py-3 text-secondary" style="display: flex; justify-content: space-around; max-width:100%">
              <a class="text-light" style="text-transform: uppercase;" href="">Learn More</a>
              <a class="text-light" style="text-transform: uppercase;" href="">About Us</a>
              <a class="text-light" style="text-transform: uppercase;" href="">GitHub</a>
            </div>
            <div class="col-sm text-center py-3 text-light">© 2020 Copyright:
              <a class="text-light" href=""> CreebinCompany</a>
            </div>
            
          </div>
          
        </div>

    </div>
    
    <camera v-if="!modal" :userID="userID" :userName="userName" :selected="selected" v-on:updateyboi="updateUsersCollect" :fistScore="fistScore"  :openScore="openScore" :usersCollection="usersCollection"/>
    
  </div>
</template>

<script>
import camera from './components/camera'
import firestore from './components/firebaseInit'
// import storage from './components/firestorageInit'
export default {
  name: 'App',
  components: {
    camera,

  },
  data() {
    return {
      modal: true,
      names: ['Cree', 'Dip'],
      inputName: '',
      userName: '',

      colorBootstrap: ['primary', 'success', 'danger', 'warning', 'info', 'dark'],
      selected: -1,
      slide: false,
      fistScore: 0,
      openScore: 0,
      loginMode: 0,
      usersCollection: {},

      userID: null,
      errorType: -1,
    }
  },
  methods: {
    changeInd: function(v) {
        this.selected = v;
    },
    changeSlide() {
      this.slide = !this.slide
    },
    strIsValid() {
      if(this.inputName.length>16) {
        this.errorType = 0
        
      } else if(this.inputName.length < 3) {
        this.errorType = 1
      } else {
        this.inputName.split('').forEach(val => {
          if (['_', '/', '%', '@', '#', '$', '^', '&', '*', ']', '[', ';', ':', ' '].includes(val)) {
            this.errorType = 2
            return
          } 
          this.errorType = -1
          
        })
      }
    },
    submitName() {
      this.strIsValid()

      if(this.errorType!=-1){
        return
      }
      this.userName = this.inputName
      this.inputName = ''
      this.loginMode = 2
       Object.keys(this.usersCollection).forEach(key => {
          if(this.usersCollection[key].name == this.userName.toLowerCase()) {
            this.modal = false
            this.playTune()
            this.fistScore = this.usersCollection[key].fistScore
            this.openScore = this.usersCollection[key].openScore
            this.selected = this.usersCollection[key].color
            this.userID = key
          }
        })

      if(this.modal) {
        new Promise(() => {
            setTimeout(() => {
                this.loginMode = 1
            }, 1000)
        });
      }
    },
    playTune() {
      var audio = new Audio('http://soundbible.com/mp3/Music_Box-Big_Daddy-1389738694.mp3');
      audio.play();
    },
    updateUsersCollect(val){
      
      this.$set(this.usersCollection, this.userID, {fistScore: val.fistCount, openScore: val.handCount, color: this.usersCollection[this.userID].color, name: this.usersCollection[this.userID].name});
      this.usersCollection = Object.assign({}, this.usersCollection)
    },
    submitNameAndColor() {
      


      if(this.selected != -1) {
        this.modal = false
        this.playTune()
      }
      firestore.collection("Users").add({
        name: this.userName.toLowerCase(),
        fistScore: 0,
        openScore: 0,
        color: this.selected
      }).then((snapshot) => {
        this.userID = snapshot.id
        this.usersCollection[this.userID] = {name: this.userName.toLowerCase(), fistScore: 0, openScore: 0, color: this.selected}
      })
    },
    
  },
  computed: {
        submitCheck: function() {
          var out = 'bg-'
            out += ((this.inputName != '')) ? 'primary' : 'secondary'
            return out 
        },
        submitCheckCol: function() {
          var out = 'bg-'
            out += ( this.selected!=-1) ? 'primary' : 'secondary'
            return out 
        }
    },
    created(){
      this.modal = true
      new Promise(() => {
            setTimeout(() => {
                this.slide = true
            }, 400)
        });
      firestore.collection("Users").get().then(snapshot => {

              snapshot.forEach(doc => {
                this.usersCollection[doc.id] = doc.data()
              });

            });
    },
}
</script>

<style>
#app {
  background: #fafafa;
}

.shadow {
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}

.modalboi {
  transition: all 800ms ease-out;
  margin: 200px 0px 0px 0px;
  opacity: 0;
  min-height: 350px;
}

.modalboi.slidee {
  margin: -50px 0px 0px 0px;
  opacity: 1;

}
.modalboi.slidee.sizee {
  min-height: 400px;
}
</style>
