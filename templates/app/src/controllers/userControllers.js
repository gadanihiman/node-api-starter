// import _ from 'lodash';
import * as usersService from '../services/user.services';

// eslint-disable-next-line import/prefer-default-export
export const list = async (req, res, next) => {
  try {
    const users = await usersService.list();
    return res.status(200).json({ status: 'SUCCESS', data: users });
  } catch (error) {
    console.log('error', error);
    return next(error);
  }
};

export const store = async (req, res, next) => {
  try {
    const user = await usersService.store(req.body);
    return res.status(201).send({ status: 'SUCCESS', data: user });
  } catch (error) {
    console.log('error', error);
    return next(error);
  }
};
