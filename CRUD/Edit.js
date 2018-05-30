export default {
    props : ['heros'],
    template : `
        <div style="display:inline-block">
            <button @click="updateHero">更新</button>
            <input type="text" style="width:200px;" v-model="updateName">    
        </div>
    `,
    data : function () {
        return {
            updateName : ''
        }
    },
    methods : {
        updateHero () {
            this.heros.name = this.updateName;
        }
    }
}
