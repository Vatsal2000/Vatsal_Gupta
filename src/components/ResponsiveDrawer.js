import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Avatar, CardActionArea } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import { Fab } from "@mui/material";
import AboutMeHeader from "./AboutMeHeader";

import self from "../assets/Self_image.jpg";
import { height } from "@mui/system";

const drawerWidth = 240;

const SocialLinks = {
  LinkedIn: "https://www.linkedin.com/in/vatsal-gupta-aba9a8139/",
  GitHub: "https://github.com/Vatsal2000",
  Mail: "",
};

const actions = [
  {
    icon: <LinkedInIcon onClick={() => handleClick("LinkedIn")} />,
    name: "LinkedIn",
  },
  {
    icon: <GitHubIcon onClick={() => handleClick("GitHub")} />,
    name: "GitHub",
  },
  {
    icon: <MailIcon onClick={() => handleClick("Mail")} />,
    name: "Mail",
  },
];
const handleClick = (network) => {
  // handleClose();
  window.open(SocialLinks[network], "_blank");
};

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ backgroundColor: "#EEEEEE", height: "100vh" }}>
      <Card
        sx={{
          backgroundColor: "#EEEEEE",
          boxShadow: "none",
        }}
      >
        <CardContent align="center">
          <Typography variant="h5" component="div" color="#393E46">
            Vatsal Gupta
          </Typography>
          <CardMedia
            component="img"
            image={self}
            alt="vatsal gupta"
            style={{ borderRadius: "50%", padding: "10%" }}
          />
          <Typography variant="body2" color="#393E46">
            Hi, my name is Vatsal Gupta and I'm a final year student at Vellore
            Institute of Technology.
          </Typography>

          {actions.map((action) => (
            <Fab
              size="small"
              sx={{
                margin: "10px",
                color: "#EEEEEE",
                backgroundColor: "#00ADB5",
              }}
            >
              {action.icon}
            </Fab>
          ))}
        </CardContent>
      </Card>

      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="About Me" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ArticleIcon />
          </ListItemIcon>
          <ListItemText primary="Resume" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", backgroundColor: "#222831", height: "100vh" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#00ADB5",
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#EEEEEE" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Vatsal Gupta
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <AboutMeHeader />
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
