(() => {
    Vue.component('todo-item', {
        props: ['todo'],
        template: '<div class="row"><div class="col-6"><span>{{todo.name}}</span></div>' +
                '<div class="col-2"><button id="remove-{{todo.id}}" class="btn btn-danger btn-sm" type="button">Remove</button></div></div>'
    });

    var app = new Vue({
        el: '#app',
        data: {
            newTask: '',
            tasks: []
        }
    });
})();