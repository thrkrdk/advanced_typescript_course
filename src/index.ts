import { User, UserProps } from './models/User';
import { Collection } from './models/Collection';

const collection = new Collection<User, UserProps>(
  '/api/users',
  (json: UserProps) => User.buildUser(json)
);

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
