import React from "react";
import { Link as RouterLink } from "gatsby";
import {
  Divider,
  ListItem,
  ListSubheader,
  List,
  Typography,
} from "@material-ui/core";

function ListItemLink({ primary, to, toggle }) {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );
  return (
    <ListItem button component={renderLink} onClick={toggle}>
      <Typography variant="body1">{primary}</Typography>
    </ListItem>
  );
}
const ListItems = ({ toggle }) => {
  return (
    <List data-testid="drawerPractices">
      <ListSubheader>
        <Typography variant="overline" color="primary">
          プラクティス
        </Typography>
      </ListSubheader>
      <ListItemLink to="/" primary="ライブラリ" toggle={toggle} />
      <ListItemLink
        to="/learn"
        primary="Open Practice Libraryについて"
        toggle={toggle}
        data-testid="SeeEverything"
      />
      {/* <!-- プラクティス追加を非表示にします
      <ListItemLink
        to={`${window.location.origin}/admin/#/collections/practice/new`}
        primary="Add a Practice"
        toggle={toggle}
      />
      --> */}
      <Divider />
      <ListSubheader>
        <Typography variant="overline" color="primary">
          コミュニティ
        </Typography>
      </ListSubheader>
      <ListItemLink to="/about" primary="Open Innovation Labs" data-testid="LearnAboutUs" />
      <ListItemLink to="/blog" primary="ブログ" />
      {/* <!-- Contributionを非表示にします
      <ListItemLink to="/page/contribution-guide" primary="Contributing" />
      --> */}
    </List>
  );
};

export default ListItems;
