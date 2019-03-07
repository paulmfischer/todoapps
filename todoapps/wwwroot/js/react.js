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
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    addItem(event) {
        event.preventDefault();
        console.log('start', this.state.tasks, this.state.value);
        this.setState({
            tasks: [...this.tasks, {
                id: this.id++,
                name: this.state.value
            }]
        });
        console.log('end', this.state.tasks);
    }

    render() {
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
                                    <li class="pb-3">
                                        <ToDoItem></ToDoItem>
                                    </li>
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
    }

    render() {
        return 'this is an item';
    }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(ToDoList), domContainer);