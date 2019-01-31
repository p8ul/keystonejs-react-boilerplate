import keystone from 'keystone';

const Types = keystone.Field.Types;

let Todo = new keystone.List('Todo');

Todo.add({
  name: {type: String, required: true, unique: true},
  permissions: {type: Types.TextArray, default: []},
  createdAt: { type: Date, default: Date.now },
});

Todo.relationship({path: 'users', ref: 'User', refPath: 'todos'});

Todo.register();

export default Todo;
