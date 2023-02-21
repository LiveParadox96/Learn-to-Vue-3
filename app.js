const App = {
    data() {
        return {
            placeholderString: 'Введите название заметки',
            title: 'Список заметок',
            inputValue:'',
            notes: ['Заметка 1','Заметка 2'],
        }
    },
    methods: {
        inputChangeHandler(event){
            this.inputValue= event.target.value
        },
        addNewNote(){
            if(this.inputValue!==''){
                this.notes.push(this.inputValue)
                this.inputValue= ''
            }
        },
        inputKeyPress(event){
            if(event.key === 'Enter'){
                this.addNewNote()
            }
        },
        doubleCount(){
            console.log('doubleCount')
            return this.notes.length * 2
        },
        toUpperCase(item){
            return item.toUpperCase()
        },
        deleteNote(index){
            this.notes.splice(index, 1)
        }
    },
    computed:{
        doubleCountComputed(){
            console.log('doubleCountComputed')
            return this.notes.length * 2
        },
    },
    watch:{
        inputValue(value){
            if(value.length>10){
                this.inputValue = ''
            }
            console.log(value)
        }
    }
}


const app = Vue.createApp(App)

app.mount('#app')