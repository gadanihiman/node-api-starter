import logger from '../../utils/logger';
import User from '../models/user';

// eslint-disable-next-line import/prefer-default-export
export const list = () => {
  logger.info('getting all users from database');
  const users = User.find({}, (err, user) => {
    if (err) Promise.reject(err);
    return user;
  });
  return Promise.resolve(users);
};

export const store = body => {
  logger.info('store user to database');
  const dataToStore = new User(body);
  return dataToStore.save((error, savedData) => {
    if (error) Promise.reject(error);
    return Promise.resolve(savedData);
  });
};
