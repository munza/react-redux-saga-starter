import { connect } from 'react-redux';

import Counter from './components/Counter';
import { handleIncrement, handleDecrement } from './ducks';

const mapStateToProps = store => ({
  count: store.counter.count
});

const mapDispatchToProps = { handleIncrement, handleDecrement };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
