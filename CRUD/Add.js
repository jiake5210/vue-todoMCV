export default {
    props : ['heros'],
    template : `
        <div background="yellowgreen">
            ID : <input type="text" v-model="addID">
            名称 : <input type="text" v-model="addName">
            <button @click="addHero">添加</button>
        </div>
    `,
    data : function() {
        return {
            addID : '',
            addName : ''
        }
    },
    methods : {
        addHero () {
            this.heros.push({
                id : this.addId,
                name : this.addName
            })
        } 
    }
}