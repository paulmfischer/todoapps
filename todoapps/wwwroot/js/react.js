'use strict';

class ToDoList extends React.Component {
    id = 0;

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            tasks: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    addItem(event) {
        event.preventDefault();
        this.setState({
            tasks: [...this.state.tasks, {
                id: this.id++,
                name: this.state.value
            }],
            value: ''
        });
    }

    removeItem(id) {
        this.setState({
            tasks: this.state.tasks.filter(task => task.id !== id)
        });
    }

    render() {
        const listItems = this.state.tasks.map((task) =>
            <li key={task.id} class="pb-3">
                <ToDoItem task={task} onRemoveItem={this.removeItem}></ToDoItem>
            </li>
        );

        return (
            <div>
                <div class="row pb-3">
                    <div class="col">
                        <form onSubmit={this.addItem}>
                            <div class="row">
                                <div class="col-6">
                                    <label for="item">To do:</label>&nbsp;
                                    <input id="item" type="text" placeholder="To do" value={this.state.value} onChange={this.handleChange} />
                                </div>
                                <div class="col-2">
                                    <button id="submit" type="submit" class="btn btn-primary btn-sm">Add</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div >
                <div class="row">
                    <div class="col">
                        {this.state.tasks.length === 0 ?
                            (<span>No Tasks currently, add one from the form above.</span>) :
                            (<div>
                                <ul class="no-bullets">
                                    {listItems}
                                </ul>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.removeTask = this.removeTask.bind(this);
    }

    removeTask(event) {
        event.preventDefault();
        this.props.onRemoveItem(this.props.task.id);
    }

    render() {
        return (
            <div class="row">
                <div class="col-6"><span>{this.props.task.name}</span></div>
                <div class="col-2"><button class="btn btn-danger btn-sm" type="button" onClick={this.removeTask}>Remove</button></div>
            </div>
        );
    }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(ToDoList), domContainer);