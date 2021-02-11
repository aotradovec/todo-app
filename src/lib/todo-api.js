import { wait } from './wait';

function getParsedLocalTodos() {
  const localData = localStorage.getItem('todos');
  const localParsedData = localData ? JSON.parse(localData) : undefined;

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
    await wait(1000);

    const data = {
      id: Date.now(),
      text,
      createdAt: new Date()
    };

    const localData = getParsedLocalTodos() ?? [];

    setLocalTodos([ ...localData, data ]);

    return data;
  },
  async update(id, newData) {
    await wait(1000);

    const localData = getParsedLocalTodos();
    const index = localData.findIndex((d) => d.id === id);

    localData[index] = newData;

    setLocalTodos(localData);

    return localData[index];
  },
  async get() {
    await wait(1000);

    return getParsedLocalTodos();
  },
  async remove(id) {
    await wait(1000);

    const data = getParsedLocalTodos();

    setLocalTodos(data.filter((t) => t.id !== id));
  },
  async getUser() {
    await wait(1000);

    return {
      username: 'admin'
    };
  },
  async login({ username, password }) {
    await wait(1000);
    
    return username === 'admin' && password === 'admin';
  }
};