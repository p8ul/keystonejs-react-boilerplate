import keystone from 'keystone';

const { Types } = keystone.Field;

export const User = new keystone.List('User');

User.add(
  {
    first_name: {
      type: Types.Text,
      required: true,
      default: 'first name',
      index: true,
    },
    last_name: {
      type: Types.Text,
      required: true,
      default: 'last name',
      index: true,
    },
    username: {
      type: Types.Text,
      min: 5,
      required: true,
      index: true,
      unique: true,
      default: 'new@User',
    },
    phone: {
      type: Types.Number,
      index: true,
    },
    email: {
      type: Types.Email,
      required: true,
      index: true,
      initial: true,
      unique: true,
    },
    password: {
      type: Types.Password,
      required: true,
      initial: true,
    },
    confirmed: { type: Boolean, index: false },
    todos: { type: Types.Relationship, ref: 'Todo', many: true},
  },
  'Permissions',
  {
    isAdmin: { type: Boolean, label: 'Can access Keystone', index: false },
  },
);

User.defaultColumns = 'username, email';

User.register();
