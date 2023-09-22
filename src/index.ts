import { User } from './models/User';

const user = new User({ name: 'new record', age: 0 });

user.save();  // network kısına bak
// /mock altındaki user.jsonun içine bak
