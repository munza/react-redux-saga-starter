import { connect } from 'react-redux';

import Counter from './components/Counter';
import actions from './actions';

const mapStateToProps = store => ({
  count: store.counter.count
});

const mapDispatchToProps = {
  handleIncrement: actions.handleIncrement,
  handleDecrement: actions.handleDecrement
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
