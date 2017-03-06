import React from 'react';
import ViveportBox from '../../components/ViveportBox';

const ResultPage = props => (
  <div>
    <ViveportBox data={props.data} accountId={props.location.query.accountId} />
  </div>
);

ResultPage.propTypes = {
  data: React.PropTypes.string,
  location: React.PropTypes.Object,
};

export default ResultPage;
