import { User } from './models/User';

//**************************************/
// Sample Code 7.

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
