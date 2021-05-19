import axios from 'axios';
import { getToken } from '../../helpers';

export const defaultParams = () => ({
  headers: { Authorization: `Bearer ${getToken()}` },
});

export const dataParams = () => ({
  headers: { 'content-type': 'application/json' },
});

export default axios;
