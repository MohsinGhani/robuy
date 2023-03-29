import * as React from "react";
import images from "../public/assets/images/index";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { Button, ButtonGroup } from "@mui/material";
import { useRouter } from "next/router";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const [mobileOpen] = React.useState(false);
  const router = useRouter();

  return (
    <div className="headerParent">
      <AppBar component="nav" className="navbar">
        <Typography
          variant="h6"
          component="div"
          className="cp"
          onClick={() => router.push("/")}
        >
          <Image src={images.logo} />
          Robuy
        </Typography>
        <div className="tabContainer">
          <Box className="btn">
            {" "}
            <ButtonGroup className="btn2">
              {" "}
              <Button className="btn-group1">
                <Image className="nav-icon" src={images.coin2} />
                Купить робуксы
              </Button>
              <Button className="btn-group2">
                <Image className="nav-icon" src={images.union} />
                Бесплатно
              </Button>
              <Button className="btn-group3">
                <Image className="nav-icon" src={images.subtract} /> Мои Покупки
              </Button>
              <Button className="btn-group4">
                <Image className="nav-icon" src={images.vector3} />
                Промокод
              </Button>
              <Button className="btn-groupLast">
                <Image className="nav-icon" src={images.union2} /> Блог
              </Button>
            </ButtonGroup>
          </Box>
        </div>
        <Box className="button-icon">
          <div className="twiter-box">
            <Image src={images.Vector} />
          </div>
          <div className="vector">
            <Image src={images.twiter} />
          </div>

          <Button className="">Войти</Button>
        </Box>
      </AppBar>
    </div>
  );
}

export default DrawerAppBar;
