import initKvJson from '../data/init-ky.json';
const setKv = async () => {
  try {
    for (const key in initKvJson) {
      await hubKV().set(key, initKvJson[key]);
    }
    return true;
  } catch (e) {
    return e.message;
  }
};
export default setKv;
