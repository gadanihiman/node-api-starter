import logger from '../../utils/logger';

// eslint-disable-next-line import/prefer-default-export
export const getAllUsers = () => {
  logger.info('getting all users from database');
  const res = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
  ];
  return res;
};
