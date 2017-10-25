import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import productsReducer from './products';
import itemsReducer from './items';
import usersReducer from './users';
import abilitiesReducer from './abilities';
import defensesReducer from './defenses';
import skillsReducer from './skills';
import buffsReducer from './buffs';
import hitReducer from './hit';
import damageReducer from './damage';
import featsReducer from './feats';
import classFeaturesReducer from './classFeatures';
import historyReducer from './history';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  products: productsReducer,
  items: itemsReducer,
  users: usersReducer,
  form: formReducer,
  defenses: defensesReducer,
  abilities: abilitiesReducer,
  skills: skillsReducer,
  buffs: buffsReducer,
  hit: hitReducer,
  damage: damageReducer,
  feats: featsReducer,
  classFeatures: classFeaturesReducer,
  history: historyReducer,
});

export default rootReducer;
