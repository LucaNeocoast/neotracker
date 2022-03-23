export default function getUserData() {
  const client = localStorage.getItem('client');
  const Uid = localStorage.getItem('uid');
  const accessToken = localStorage.getItem('accessToken');
  const expiry = localStorage.getItem('expiry');
  return {
    client,
    Uid,
    accessToken,
    expiry,
  };
}
