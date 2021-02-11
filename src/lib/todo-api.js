import { wait } from './wait';

function getParsedLocalTodos() {
  const localData = localStorage.getItem('todos');
  const localParsedData = localData ? JSON.parse(localData) : undefined;

  if(!localParsedData) {
    return undefined;
  }

  return localParsedData.map((el) => ({
    ...el,
    createdAt: new Date(el.createdAt)
  }));
}

function setLocalTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

export const todoApi = {
  async create({ text }) {
    await wait(250);

    const data = {
      id: Date.now(),
      text,
      done: false,
      createdAt: new Date()
    };

    const localData = getParsedLocalTodos() ?? [];

    setLocalTodos([ ...localData, data ]);

    return data;
  },
  async update(id, newData) {
    await wait(250);

    const localData = getParsedLocalTodos();
    const index = localData.findIndex((d) => d.id === id);

    localData[index] = { ...localData[index], ...newData };

    setLocalTodos(localData);

    return localData[index];
  },
  async get() {
    await wait(250);

    return getParsedLocalTodos();
  },
  async remove(id) {
    await wait(250);

    const data = getParsedLocalTodos();

    setLocalTodos(data.filter((t) => t.id !== id));
  },
  async login({ username, password }) {
    await wait(250);
    
    if(username === 'admin' && password === 'admin') {
      return {
        id: 1,
        username: 'admin'
      };
    }

    return null;
  }
};