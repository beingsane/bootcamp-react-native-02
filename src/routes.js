import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from '~/pages/welcome';
import Repositories from '~/pages/repositories';

const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator({
    Welcome,
    Repositories,
  }, {
    initialRouteName: userLogged ? 'Repositories' : 'Welcome',
  }),
);

export default Routes;
