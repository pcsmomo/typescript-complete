import './index.css';

//**************************************/
// Sample Code 14. Views - UserForm()
// 191. Rendering HTML
import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({ name: 'NAME', age: 20 });

const userForm = new UserForm(document.getElementById('root'), user);

userForm.render();

//**************************************/
// Sample Code 13. Collection()
// 187. A Class Method for Collections
// import { User } from './models/User';

// const collection = User.buildUserCollection();

// collection.on('change', () => {
//   console.log(collection);
// });

// collection.fetch();

//**************************************/
// Sample Code 12. Collection()
// 186. Generic User Collection
// import { User, UserProps } from './models/User';
// import { Collection } from './models/Collection';
// const collection = new Collection<User, UserProps>(
//   'http://localhost:3000/users',
//   (json: UserProps) => User.buildUser(json)
// );
// collection.on('change', () => {
//   console.log(collection);
// });
// collection.fetch();

//**************************************/
// Sample Code 11. Collection()
// 185. Parsing User JSON
// import { Collection } from './models/Collection';
// const collection = new Collection('http://localhost:3000/users');
// collection.on('change', () => {
//   console.log(collection);
// });
// collection.fetch();

//**************************************/
// Sample Code 10. initial Collection
// 185. Parsing User JSON
// import axios, { AxiosResponse } from 'axios';

// axios.get('http://localhost:3000/users').then((response: AxiosResponse) => {
//   console.log(response.data);
// });

//**************************************/
// Sample Code 9. save()
// import { User } from './models/User';
// const user = new User({ id: 1, name: 'newer name', age: 0 });
// const user = User.buildUser({ id: 1, name: 'yay  name', age: 0 });

// user.on('save', () => {
//   console.log(user);
// });

// user.save();

// console.log(user.isAdminUser());

//**************************************/
// Sample Code 8. fetching()
// const user = new User({ id: 1 });

// user.on('change', () => {
//   console.log(user);
//   console.log(user.get('name'));
// });

// user.fetch();
// console.log(user.get('name'));

//**************************************/
// Sample Code 7. using accessor
// const user = new User({ name: 'new record', age: 0 });
// console.log(user.get('name'));

// user.on('change', () => {
//   console.log('user was changed');
// });

// user.set({ name: 'New name' });
// console.log(user.get('name'));

//**************************************/
// Sample Code 6. save with composition pattern : pain in ass
// const user = new User({ name: 'new record', age: 0 });

// user.attributes.get('id');
// user.attributes.get('name');
// user.attributes.get('age');

// user.sync.save();

//**************************************/
// Sample Code 5. for event listening and triger with composition pattern
// const user = new User({ name: 'new record', age: 0 });

// user.events.on('change', () => {
//   console.log('change');
// });

// user.events.trigger('change');

//**************************************/
// Sample Code 4. Save user
// const user = new User({ id: 1 });
// user.set({ name: 'NEW NAME', age: 9999 });
// user.save();

// const user2 = new User({ name: 'new record', age: 0 });
// user2.save();

//**************************************/
// Sample Code 3. Fetch user
// user.fetch();
// console.log(JSON.stringify(user, null, 2));
// setTimeout(() => {
//   console.log(JSON.stringify(user, null, 2));
// }, 1000);

//**************************************/
// Sample Code 2. axios <---> json-server
// import axios from 'axios';

// axios.post('http://localhost:3000/users', {
//   name: 'myname',
//   age: 20,
// });

// axios.get('http://localhost:3000/users/1');

//**************************************/
// Sample Code 1. for event listening and triger
// import { User } from './models/User';

// const user = new User({ name: 'myname', age: 20 });

// user.on('change', () => {
//   console.log('Change #1');
// });
// user.on('change', () => {
//   console.log('Change #2');
// });
// user.on('save', () => {
//   console.log('Save was triggered');
// });

// user.trigger('save');
