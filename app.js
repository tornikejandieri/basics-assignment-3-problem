

const app = Vue.createApp({
  data(){
    return {
      result: 0,
      notThereYet: '',
      tooMuch: ''
    }
 
  },
  methods:{
    handleClick(num){
      this.result = this.result + num
      if(this.result < 37){
        this.notThereYet = 'Not there yet'
      } else {
        this.tooMuch = 'Too Much!'
        this.notThereYet = ''
      }
    }
  },
  watch: {
    result(value){
    const that = this
      if(value > 0){
        setInterval(() => {
          that.result = 0
          that.tooMuch = ''
        }, 5000)
      }
    }
  }
})
app.mount('#assignment')