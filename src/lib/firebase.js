import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	collection,
	doc,
	getDocs,
	addDoc,
	updateDoc,
	deleteDoc,
	onSnapshot,
	query
} from 'firebase/firestore';
import { writable } from 'svelte/store';

const firebaseConfig = {
	apiKey: 'AIzaSyAraE3ZCOSv0r4mQI0EqLFi_umrT0eif7g',
	authDomain: 'svelte-todo-6045c.firebaseapp.com',
	projectId: 'svelte-todo-6045c',
	storageBucket: 'svelte-todo-6045c.appspot.com',
	messagingSenderId: '575824453718',
	appId: '1:575824453718:web:7999f93e76ad48cf501bf7',
	measurementId: 'G-YBT1FWS1E0'
};
initializeApp(firebaseConfig);
export const db = getFirestore();

export const todoStore = writable([]);

export const unsubscribeTodos = onSnapshot(collection(db, 'todos'), (querySnapshot) => {
	let todos = [];
	querySnapshot.forEach((doc) => todos.push({ id: doc.id, ...doc.data() }));
	todoStore.set(todos);
});

export const getTodos = async () => {
	let todos = [];
	let querySnapshot = await getDocs(query(collection(db, 'todos')));
	querySnapshot.forEach((doc) => todos.push({ id: doc.id, ...doc.data() }));
	return todos;
};

export const addTodo = async (todo) => {
	await addDoc(collection(db, 'todos'), todo);
};

export const updateTodo = async (id, todo) => {
	await updateDoc(doc(db, 'todos', id), todo);
};

export const deleteTodo = async (id) => {
	await deleteDoc(doc(db, 'todos', id));
};
