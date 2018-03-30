import {combineReducers} from 'redux';
import CategoryListReducer from './CategoryListReducer';
import CatSelectReducer from './CatSelectReducer';
import InboxListReducer from './InboxListReducer';
import SentItemListReducer from './SentItemListReducer';
import DraftListReducer from './DraftListReducer';

export default combineReducers({
  categoryList: CategoryListReducer,
  selectedCategoryId: CatSelectReducer,
  inbox: InboxListReducer,
  sentItem: SentItemListReducer,
  draft: DraftListReducer
});
