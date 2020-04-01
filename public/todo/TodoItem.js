import Component from '../Component.js';

class TodoItem extends Component {

    onRender(dom) {
        const { todo, onUpdate, onRemove } = this.props; 
        const completeButton = dom.querySelector('.complete');
        completeButton.addEventListener('click', () => {
            onUpdate(todo);
        });
        const removeButton = dom.querySelector('.remove');
        removeButton.addEventListener('click', () => {
            onRemove(todo);
        });
    }

    renderHTML() {
        const { todo } = this.props;

        return /*html*/`
            <li class="todo-item">
                <button class="complete">${todo.complete ? '' : 'complete'}</button>
                <p class=${todo.complete ? 'task-complete' : 'task'}>${todo.task}</p>
                <button class="remove">☒</button>
            </li>
        `;
    }
}

export default TodoItem;