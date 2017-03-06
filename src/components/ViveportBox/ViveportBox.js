import React from 'react';
import { Link } from 'react-router';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const ViveportBox = props => (
  <div>
    <Card>
      <CardHeader
        title={props.data.get('c')}
        subtitle={props.accountId}
        avatar={props.data.get('cms')}
      />
	  	  
	  {
        props.data.map((todo, index) => (
          <CardText>
		  {index}: {todo}
          </CardText>
        ))
      }	  
	  
      <CardActions>
        <Link to="/">
          <RaisedButton
            label="Back"
            icon={<ActionHome />}
            secondary
          />
        </Link>
      </CardActions>
    </Card>
  </div>
);

ViveportBox.propTypes = {
  data: React.PropTypes.Object,
  accountId: React.PropTypes.string,
};

export default ViveportBox;
