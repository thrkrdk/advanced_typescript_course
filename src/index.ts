import { User } from './models/User';

const user = new User({id:1, name: 'new record', age: 0 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('User was changed, we probably need to update some HTML');
});

user.set({ name: 'New name' });
