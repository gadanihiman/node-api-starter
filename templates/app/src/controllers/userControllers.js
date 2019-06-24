// import _ from 'lodash';
import * as usersService from '../services/user.services';

// eslint-disable-next-line import/prefer-default-export
export const getAllUsers = (req, res) => {
  const users = usersService.getAllUsers();
  res.json({ status: 'SUCCESS', data: users });
};
