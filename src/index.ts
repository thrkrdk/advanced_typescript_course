import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { UserProps, User } from './models/User';
import { UserEdit } from './views/UserEdit';


const user = User.buildUser({ name: 'NAME', age: 20 });
const users = new Collection(
  '/api/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('root');

  if (root) {

    const userEdit = new UserEdit(root, user);

    userEdit.render();
  
    
  }
  
  const list = document.getElementById('list');
  if (list) {
  new UserList(list, users).render();
  }

});

users.fetch();
