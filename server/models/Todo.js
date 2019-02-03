import keystone from 'keystone';

const { Field: { Types } } = keystone;

const Todo = new keystone.List('Todo');

Todo.add({
  title: {
    type: String, required: true, default: Date.now,
  },
  description: { type: Types.Html, wysiwyg: true },
  createdAt: { type: Date, default: Date.now },
});

Todo.relationship({ path: 'users', ref: 'User', refPath: 'todos' });

Todo.register();

export default Todo;
