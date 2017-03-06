import { connect } from 'react-redux';
import ResultPage from '../../components/ResultPage';

export default connect(
  state => ({
    data: state.getIn(['viveport', 'data']),
	//data: state.viveport.get('data'),
  })
)(ResultPage);
