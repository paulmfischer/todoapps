$(() => {
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
                <li key={task.id} className="pb-3">
                    <ToDoItem task={task} onRemoveItem={this.removeItem}></ToDoItem>
                </li>
            );

            return (
                <div>
                    <div className="row pb-3">
                        <div className="col">
                            <form onSubmit={this.addItem}>
                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="item">To do:</label>&nbsp;
                                        <input id="item" type="text" placeholder="To do" value={this.state.value} onChange={this.handleChange} />
                                    </div>
                                    <div className="col-2">
                                        <button id="submit" type="submit" className="btn btn-primary btn-sm">Add</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div >
                    <div className="row">
                        <div className="col">
                            {this.state.tasks.length === 0 ?
                                (<span>No Tasks currently, add one from the form above.</span>) :
                                (<div>
                                    <ul className="no-bullets">
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
                <div className="row">
                    <div className="col-6"><span>{this.props.task.name}</span></div>
                    <div className="col-2"><button className="btn btn-danger btn-sm" type="button" onClick={this.removeTask}>Remove</button></div>
                </div>
            );
        }
    }

    const domContainer = document.querySelector('#app');
    ReactDOM.render(React.createElement(ToDoList), domContainer);
});