import TodoItem from '../todo/TodoItem.js';
const test = QUnit.test;

QUnit.module('Render Todo Item');

test('renders html from data', assert => {
    // arrange
    const todo = {
        id: 3,
        task: 'Tested Design',
        complete: true
    };

    const expected = /*html*/`
    <li class="todo-item">
    <button class="complete">${todo.complete ? '' : 'complete'}</button>

<p class=${todo.complete ? 'task-complete' : 'task'}>${todo.task}</p>
    <button class="remove">☒</button>
    </li>
    `;

    // act
    const todoItem = new TodoItem({ todo: todo });
    const html = todoItem.renderHTML();
    
    // assert
    assert.htmlEqual(html, expected);
});