export default {
    props : ['heros','delId'],
    template : `
        <button @click="delHeros">删除</button>
    `,
    methods : {
        delHeros:function (){
            let index = this.heros.findIndex( ele => ele.id == this.delId );
            this.heros.splice(index,1);
        }
    }
}