export const genId = () => Math.floor(Math.random() * 999999999999999);

export const setTodos = (v) => localStorage.setItem('todos', JSON.stringify(v));

export const getTodos = () => JSON.parse(localStorage.getItem('todos') ?? '[]');
