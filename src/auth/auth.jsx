const auth = {
  isAuthenticated: false,
  authenticate(cb, name, vorname) {
    auth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    auth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

export default auth;
