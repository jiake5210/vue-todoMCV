let App = {
    template : `
        <div>
            <add :heros="heros"></add>
           <list :heros="heros"></list>
        </div>
    `,
    data : function () {
        return {
            heros : [
                { id : 1 , name : '张三' },
                { id : 2 , name : '李四' },
                { id : 3 , name : '王五' },
                { id : 4 , name : '赵六' },
            ]
        }
    }
};
export default App;