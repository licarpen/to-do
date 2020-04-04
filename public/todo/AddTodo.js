import Component from '../Component.js';

class AddTodo extends Component {

    onRender(form) {
        const { onAdd } = this.props;
        
        form.addEventListener('submit', async event => {
            event.preventDefault();
            const formData = new FormData(form);
            const todo = {
                task: formData.get('task')
            };

            try {
                await onAdd(todo);
                // this only runs if no error:
                form.reset();
                document.activeElement.blur();
            }
            catch (err) {
                // nothing to do as App will show error,
                // but will keep form from clearing...
            }
        });
    }

    renderHTML() {
        return /*html*/`
            <form class='add'>
                <input name="task" type="text" placeholder="New to do" required>
                <button id='add'>Add</button>
            </form>
        `;
    }
}

export default AddTodo;