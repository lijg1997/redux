//引入react-redux中的connect方法
import { connect } from 'react-redux';
//引入count的UI组件
import Count from '../../components/count/count';
//默认方式暴露加工或的count的容器组件
export default connect(
  () => ({ 'i-love-you': 'i-love-you-too' }),
  () => ({})
)(Count);
