import * as React from 'react';
import { Link } from 'react-router-dom';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

type Props = {
  // icon: React.ReactNode,
  text: string,
  to: string
}

const defalutProps = {
  text: "",
  to: "/"
}

export default function ListItemLink(props: Props) {
  const { text, to } = props;

  const CustomLink = (props: any) => <Link to={to} {...props} />;

  return (
    <ListItem button component={CustomLink}>
      <ListItemText primary={text} />
    </ListItem>
  );
}

ListItemLink.defalutProps = defalutProps;