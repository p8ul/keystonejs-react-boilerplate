
import dotEnv from 'dotenv';
import keystone from 'keystone';
import routes from './routes';


dotEnv.config();
const MONGODB_URL = process.env.NODE_ENV === 'development'
  ? process.env.MONGODB_URL
  : process.env.MONGODB_URL_TEST;

keystone.init({
  name: 'Keystonejs CMS',
  brand: 'Keystonejs CMS',
  sass: './public',
  static: './public',
  'auto update': true,
  updates: './updates',
  session: true,
  auth: true,
  mongo: MONGODB_URL,
  'user model': 'User',
  'cookie secret': process.env.COOKIE_SECRET,
  'cloudinary secure': true,
  'cloudinary config': process.env.CLOUDINARY_URL,
});

keystone.import('./models');

keystone.set('locals', {
  env: keystone.get('env'),
});

keystone.set('routes', routes);

keystone.start();

export default keystone;
