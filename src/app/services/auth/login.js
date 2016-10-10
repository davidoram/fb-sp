import Vue from 'vue';
import accountService from './../account';
import store from './../../store';

// When the request succeeds
const success = (token) => {
  store.dispatch('login', token);
  accountService.find();
  Vue.router.push({
    name: 'home.index',
  });
};

// When the request fails
const failed = () => {
};

export default (user) => {
  /*
   * Normally you would perform an AJAX-request.
   * But to get the example working, the data is hardcoded.
   *
   * With Vue Resource, you can do something like this:
   * Vue.http.post('auth/login', user)
   *   .then((res) => {
   *     success(res);
   *   }, (res) => {
   *     failed(res);
   *   });
   */
  if (!user.email || !user.password) {
    failed();
  } else {
    success('RandomGeneratedToken');
  }
};
