import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import "./Drawer.css";

import { FiSettings } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";

const useStyles = makeStyles({
  listItem: {
    marginLeft: "20px",
    fontSize: "14px",
    fontWeight: "500",
    color: "grey",
  },
});

function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div style={{ width: "250px" }} role="presentation">
      <Divider />
      <List>
        <ListItem>
          <ListItemText style={{ fontSize: "48px", marginLeft: "5px" }}>
            <span
              style={{
                color: "black",
                fontWeight: "700",
                fontSize: "22px",
                fontFamily: "Product Sans', Arial, sans-serif",
              }}
            >
              D
            </span>
            <span
              style={{
                color: "black",
                fontWeight: "700",
                fontSize: "22px",
                fontFamily: "Product Sans', Arial, sans-serif",
              }}
            >
              E
            </span>
            <span
              style={{
                color: "black",
                fontWeight: "700",
                fontSize: "22px",
                fontFamily: "Product Sans', Arial, sans-serif",
              }}
            >
              L
            </span>
            <span
              style={{
                color: "black",
                fontWeight: "700",
                fontSize: "22px",
                fontFamily: "Product Sans', Arial, sans-serif",
              }}
            >
              T
            </span>
            <span
              style={{
                color: "black",
                fontWeight: "700",
                fontSize: "22px",
                fontFamily: "Product Sans', Arial, sans-serif",
              }}
            >
              A
            </span>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />

      <List
        style={{ marginLeft: "08px", marginRight: "8px", marginTop: "15px" }}
      >
        <ListItem className="list_item">
          <div className={classes.listItem}> Nazifullah Hanan </div>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem className="list_item">
          <FiSettings />
          <div> Settings </div>
        </ListItem>
        <ListItem className="list_item">
          <BsQuestionCircle />
          <div> Testing </div>
        </ListItem>
      </List>
    </div>
  );
  return (
    <div>
      <React.Fragment>
        <IconButton onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          anchor={"left"}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default TemporaryDrawer;
