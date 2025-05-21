import axios from 'axios';


export async function getTodo() {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.error(error);
  }
}