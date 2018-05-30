module.exports = {
    template: `
        <div>
        <section class="todoapp">
        <header class="header">
          <h1>todos</h1>
          <!-- 添加任务组件 -->
          <add :todos='todos'></add>
        </header>
        <section class="main" >
            <input class="toggle-all" type="checkbox" v-model="allDown">
          <ul class="todo-list">
          <!-- LI:class为completed能附加完成的样式,editing能有编辑的样式-->
            <li class="todo"
                v-for=" (item , index) in typeToggleEvent"
                :class="{ 'completed':item.isCompleted, 'editing':item.id == editingId}"
            >
              <div class="view">
                <input class="toggle" type="checkbox" v-model="item.isCompleted" @click="changeisCompleted(index,item.isCompleted)">
                <label @dblclick="saveEditingId(item.id)">{{ item.content }}</label>
                <button class="destroy" @click="del(item.id)"></button>
              </div>
              <input
                      class="edit"
                      type="text"
                      @blur="clearEditing"
                      @keyup.enter="clearEditing"
                      v-my-focus="item.id == editingId"
                      v-model="item.content"
              >
            </li>
          </ul>
        </section>
        <footer class="footer" >
          <span class="todo-count">
            <strong >{{ remaining.length }}</strong>
            {{ 'item' + (remaining.length > 1?'s':'') }} left
          </span>
          <ul class="filters">
            <li><a href="#/all" @click="changeType('All')">All</a></li>
            <li><a href="#/active" @click="changeType('Active')" >Active</a></li>
            <li><a href="#/completed"  @click="changeType('Completed')">Completed</a></li>
          </ul>
          <button class="clear-completed" v-show="remaining.length != todos.length" @click="clear">
            Clear completed
          </button>
        </footer>
      </section>
      <footer class="info">
        <p>Double-click to edit a todo</p>
        <p>Written by <a href="http://evanyou.me">Evan You</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
        </div> 
    `,
    data: function () {
        return {
            todos: JSON.parse(window.localStorage.getItem('todos')) || [],
            editingId: -1, // 默认id不会和其他id相同
            type: 'All',
        }
    },
    watch: {
        // 深度监视
        todos: {
            deep: true,
            handler: function (newV, oldV) {
                window.localStorage.setItem('todos', JSON.stringify(newV))
            }
        }
    },
    methods: {
        // 2 删除功能
        del(id) {
            // 1.通过id查找元素索引
            var index = this.todos.findIndex(ele => ele.id == id);
            // 2.通过索引删除数组元素
            this.todos.splice(index, 1)
        },
        // 添加功能
        // 保存当前点击editingId
        saveEditingId(id) {
            this.editingId = id;
        },
        // 去除编辑 状态
        clearEditing() {
            this.editingId = -1;
        },
        changeType(type) {
            this.type = type;
        },
        // 点击清除为未完成数据,
        changeisCompleted(index, isCompleted) {
            this.todos[index].isCompleted = isCompleted;
            console.log(this.todos)
        },
        clear() {
            this.todos.forEach((ele, index) => {
                // 判断是否已完成
                if (ele.isCompleted) this.todos.splice(index, 1);
            })
        }
    },
    // 计算未完成的任务数量
    computed: {
        remaining: function () {
            // 返回未完成数量的数组
            return this.todos.filter(ele => !ele.isCompleted)
        },
        // 计算是否全部完成
        allDown: {
            // 从js内存到页面的显示
            get: function () {
                // 全完成，没有未完成
                return this.remaining == 0;
            },
            // 从页面用户输入到js内存发生数组所有元素的改变
            set: function (val) {
                this.todos.forEach(ele => ele.isCompleted = val)
            }
        },
        // 过滤显示数据
        typeToggleEvent: function () {
            switch (this.type) {
                case 'All':
                    return this.todos;
                    break;
                case 'Active':
                    return this.todos.filter(ele => !ele.isCompleted)
                    break;
                case 'Completed':
                    return this.todos.filter(ele => ele.isCompleted)
                    break;
            }
        }
    },
    // 自动获取焦点指令
    directives: {
        'my-focus': function (el, binding) {
            if (binding.value) {
                el.focus();
            }
        }
    }
}