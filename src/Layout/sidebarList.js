import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PublicIcon from '@material-ui/icons/Public';
import ClassIcon from '@material-ui/icons/Class';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

//Material UI's ListItemLink
function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export const mainList = (
  <div>
    <List aria-label="main mailbox folders">
      <ListItemLink to="recipes" primary="Recipes" icon={<ReceiptIcon />} />
      <ListItemLink to="bycountry" primary="By Country" icon={<PublicIcon />} />
      <ListItemLink to="bycategory" primary="By Category" icon={<ClassIcon />} />
    </List>
  </div>
);