import { createStore, applyMiddleware } from 'redux';

//启动异步任务
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

//打天下的得力助手
// import countReducer from './reducers/count_reducer';
//团队壮大，得一起好好管理了
import reducers from './reducers';

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
