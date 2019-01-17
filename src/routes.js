import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from '~/pages/welcome';
import Repositories from '~/pages/repositories';

const Routes = createAppContainer(
  createSwitchNavigator({
    Welcome,
    Repositories,
  }),
);

export default Routes;
