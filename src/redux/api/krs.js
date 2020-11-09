import * as Api from '../../utils/api';

export async function GetKrs() {
  try {
    const response = await Api.fetchRequest('GET', `users`);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function DeleteKrs(id) {
  try {
    const response = await Api.fetchRequest('DELETE', `posts/`, id);
    return response;
  } catch (error) {
    throw error;
  }
}
