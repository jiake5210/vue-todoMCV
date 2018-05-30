module.exports = {
    template: `
        <input class="new-todo"
        placeholder="输入添加的数据"
        autofocus autocomplete="off"
        v-model="newContent"
        @blur="addTodo"
        @keyup.enter="addTodo">
    `,
    props : [
        'todos'
    ],
    data() {
        return {
            newContent: '',
        }
    },
    methods: {
        addTodo() {
            // 判断输入有效性
            if (this.newContent.trim() == '') return;
            // 1.获取内容
            var content = this.newContent;
            if (this.todos == true) {
                // 2.生成id
                var maxId = 0;
                // 3.遍历
                this.todos.forEach(ele => {
                    if (maxId < ele.id) {
                        ele.id = maxId;
                    }
                })
                // 找到最大的id加1
                maxId++;
            } else {
                var maxId = 0;
            }
            // 加入元素
            this.todos.push({
                id: maxId,
                content: this.newContent,
                isCompleted: false
            })
            // 清空输入框
            this.newContent = '';
        },
    }
}