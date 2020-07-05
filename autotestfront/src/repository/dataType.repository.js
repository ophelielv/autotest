/**
 * DataType repository
 */
import axios from 'axios';
import env from './env'

const getAll = async () => {
  try {
    const response = await axios.get(`${env.urlBack}/datatypes/get-all`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getAll;