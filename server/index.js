
import dotEnv from 'dotenv';
import keystone from 'keystone';
import routes from './routes';

dotEnv.config();

keystone.init({
  name: 'Keystonejs CMS',
  brand: 'Keystonejs CMS',
  sass: './public',
  static: './public',
  'auto update': true,
  updates: './updates',
  session: true,
  auth: true,
  mongo: process.env.MONGODB_URL,
  'user model': 'User',
  'cookie secret': process.env.COOKIE_SECRET,
});

keystone.import('./models');

keystone.set('locals', {
  env: keystone.get('env'),
});

keystone.set('routes', routes);

keystone.start();

export default keystone;
