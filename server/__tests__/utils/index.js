import faker from 'faker';
import keystone from '../..';

const port = process.env.TEST_PORT || 5150;
keystone.set('port', port);
faker.seed(5711);

export { faker };
export default keystone;
