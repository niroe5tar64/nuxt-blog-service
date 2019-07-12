import Cookies from 'universal-cookie';

export default ({ req, store }) => {
  if (process.browser) {
    return;
  }
  const cookies = new Cookies(req.headers.cookie);
  const user = cookies.get('loginUser');
  if (user && user.id) {
    const { id } = user;
    store.commit('auth/setLoginUser', { loginUser: { id } });
  }
};
