import axios from 'axios';
import env from './env'

const getAll = async () => {
  try {
    const response = await axios.get(`${env.urlBack}/datatypes/get-all`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default getAll;