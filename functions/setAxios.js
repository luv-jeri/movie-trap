import axios from 'axios';

export default async function setAxios({
  method,
  url,
  body,
  effect,
}) {
  let loading = true;
  let data = null;
  let error = null;
  try {
    const response = await axios({
      method,
      url,
      data: body,
    });
    typeof effect === 'function' &&
      effect(response, 'success');
    loading = false;
    data = response.data;
  } catch (e) {
    console.log(e);
    error = e.message;
    typeof effect === 'function' &&
      effect(e, 'fail');
  } finally {
    loading = false;
  }
  return { loading, data, error };
}
