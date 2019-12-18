import dva from 'dva';
import { createModel } from './store';
import { createBrowserHistory } from 'history';
import RouterView from 'src/router';

const app = dva({
  history: createBrowserHistory()
});
createModel(app);
//  挂载路由
app.router(RouterView);
//  挂载模板节点
app.start('#root');
