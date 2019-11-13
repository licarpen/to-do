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
                <button class="complete">Complete</button>
                <p class="task">${todo.task}</p>
                <button class="remove">Remove</button>
            </li>
        `;
    }
}

export default TodoItem;