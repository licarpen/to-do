const URL = '/api';

async function fetchWithError(url, options) {
    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok) {
        return data;
    }
    else {
        //console.log(error);
        throw data.error;
    }
}

export function getTodos() {  
    const url = `${URL}/todos`;
    return fetchWithError(url);
}

export function addTodo(todo) {  
    const url = `${URL}/todos`;
    return fetchWithError(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(todo)
    });
}

export function updateTodo(todo) { 
    const url = `${URL}/todos/${todo.id}`;
    return fetchWithError(url, {
        method: 'PUT'
    });
}

export function removeTodo(id) {  
    console.log('in the removeTodo function');
 
    const url = `${URL}/todos/${id}`;
    console.log(url);  
    const result = fetchWithError(url, {
        method: 'DELETE'
    });
    console.log(result);
    return result;
}

