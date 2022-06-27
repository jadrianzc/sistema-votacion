import { AppBar, Grid, IconButton, Toolbar } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./navbaradmin.css";

export const NavBarAdmin = ({ drawerWidth = 0, appBarStyle = "" }) => {
  //const location = useLocation().pathname;

  return (
    <main>
      <AppBar
        position="initial"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
          height: "80px",
          background:
            "linear-gradient(-65deg, #575755 0%, #575755 64%, #FFFFFF 64%, rgba(250,25,0,1) 65%, #FFFFFF 65%, #FFFFFF 100%)",
          // `${
          //   location !== "/login" &&
          //   "linear-gradient(-65deg, #575755 0%, #575755 64%, #FFFFFF 64%, rgba(250,25,0,1) 65%, #FFFFFF 65%, #FFFFFF 100%)"
          //   // "linear-gradient(-65deg, #575755 0%, #575755 60%, #FFFFFF 40%, #FFFFFF 100%)"
          // }`,
        }}
        color="transparent"
        className={`app-bar ${appBarStyle}`}
      >
        <Toolbar sx={{ width: "90%" }}>
          <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuOutlined />
          </IconButton>

          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <h1 sx={{ width: "263px", height: "80px", borderRadius: "0px" }}>
              Dashboard
            </h1>

            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              sx={{ width: "540px", height: "80px" }}
            >
              <NavLink
                className={({ isActive }) =>
                  `nav-link-menu ${isActive ? "active" : ""}`
                }
                to="/login"
              >
                Votar
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-link-menu ${isActive ? "active" : ""}`
                }
                to="/candidatos"
              >
                Candidatos
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-link-menu ${isActive ? "active" : ""}`
                }
                to="/resultados"
              >
                Resultados
              </NavLink>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <section>
        <Outlet></Outlet>
      </section>
    </main>
  );
};
