(() => {
	let count = 0;
	let tasks = [];
	let listId = 'taskList';

	let api = {
		addItem: (event) => {
			event.preventDefault();
			let taskInput = document.getElementById('item');

			let task = {
				id: count++,
				name: taskInput.value
			};
			api.addItemToDOM(task);

            tasks.push(task);
            taskInput.value = '';
            taskInput.focus();
		},
		removeItem: (task) => {
			let itemToRemove = document.getElementById(task.id);
			itemToRemove.parentNode.removeChild(itemToRemove);
			tasks = tasks.filter(item => item.id !== task.id);

			if (tasks.length === 0) {
				let noTasksElement = document.createElement('div');
				noTasksElement.setAttribute('id', 'tasks');
				noTasksElement.innerText = 'No Tasks currently, add one from the form below.';
				document.getElementById(listId).replaceWith(noTasksElement);
			}
		},
		addItemToDOM: (task) => {
			if (tasks.length === 0) {
				let listSection = document.getElementById('tasks');
				let listHtml = document.createElement('ul');
                listHtml.setAttribute('id', listId);
                listHtml.setAttribute('class', 'no-bullets');
				listSection.replaceWith(listHtml);
			}

			let taskList = document.getElementById(listId);
			let newItem = document.createElement('li');
            newItem.setAttribute('id', task.id);
            newItem.setAttribute('class', 'pb-3');
            let itemHtml = `<div class="row"><div class="col-6"><span>${task.name}</span></div>`;
            itemHtml += `<div class="col-2"><button id="remove-${task.id}" class="btn btn-danger btn-sm" type="button">Remove</button></div></div>`;
            newItem.innerHTML = itemHtml;

			taskList.appendChild(newItem);

			let removeItem = document.getElementById(`remove-${task.id}`);
			let removeFn = () => {
				api.removeItem(task);
				removeItem.removeEventListener('click', removeFn);
			};
			removeItem.addEventListener('click', removeFn);
		}
	}

	let formSubmit = document.getElementById('submit');
    formSubmit.addEventListener('click', api.addItem);

    document.getElementById('item').focus();
})();
