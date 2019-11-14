const URL = '/api';

const token = localStorage.getItem('TOKEN');
// Redirect if not on home page
if (!token && !(location.pathname === '/' || location.pathname === '/index.html')) {
    const searchParams = new URLSearchParams();
    searchParams.set('redirect', location.pathname);
    location = `/?${searchParams.toString()}`;
}

async function fetchWithError(url, options) {
    if (token){
        options = options || {};
        options.headers = options.headers || {};
        options.headers.Authorization = token;
    }

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

export function signUp(user) {
    const url = `${URL}/auth/signup`;
    return fetchWithError(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)        
    });
}

export function signIn(credentials) {
    const url = `${URL}/auth/signin`;
    return fetchWithError(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)        
    });
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

