(() => {
    let count = 0;
    Vue.component('todo-item', {
        props: ['todo'],
        template: '<div class="row"><div class="col-6"><span>{{todo.name}}</span></div>' +
            '<div class="col-2"><button :id="getId" v-on:click="$emit(\'remove-todo\', todo.id)" class="btn btn-danger btn-sm" type="button">Remove</button></div></div>',
        computed: {
            getId: function () {
                return `remove-${this.todo.id}`;
            }
        }
    });

    var app = new Vue({
        el: '#app',
        data: {
            newTask: '',
            tasks: []
        },
        computed: {
            isTasksEmpty: function () {
                return this.tasks.length === 0;
            }
        },
        methods: {
            addItem: function(event) {
                event.preventDefault();
                this.tasks.push({ id: count++, name: this.newTask });
                this.newTask = '';
            },
            removeItem: function (idToRemove) {
                this.tasks = this.tasks.filter(todo => todo.id !== idToRemove);
            }
        }
    });
})();