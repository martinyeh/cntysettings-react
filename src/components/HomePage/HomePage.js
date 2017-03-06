import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const HomePage = ({
  accountId,
  onSubmitAccountId,
  onChangeAccountId,
}) => (
  <div>
    <TextField
      hintText="Please Key in your Github User Id."
      onChange={onChangeAccountId}
    />
    <Link
      to={{
        pathname: '/result',
        query: { accountId },
      }}
    >
      <RaisedButton label="Submit" onClick={onSubmitAccountId(accountId)} primary />
    </Link>
  </div>
);

HomePage.propTypes = {
  onSubmitAccountId: React.PropTypes.func,
  onChangeAccountId: React.PropTypes.func,
  accountId: React.PropTypes.string,
};

export default HomePage;
