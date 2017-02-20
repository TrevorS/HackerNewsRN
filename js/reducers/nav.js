import AppNavigator from '../navigation';

const initialNavState = {
  index: 0,
  routes: [
    { key: 'InitA', routeName: 'Stories' },
    { key: 'InitB', routeName: 'Comments' },
  ],
};

const nav = (state = initialNavState, action) =>
  AppNavigator.router.getStateForAction(action, state);

export default nav;
