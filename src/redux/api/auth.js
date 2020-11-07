import * as Api from '../../utils/api';

export async function login() {
  try {
    const response = await Api.fetchRequest('GET', 'albums');
    return response;
  } catch (error) {
    throw error;
  }
}
