// import * as React from "react";

// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";

// import Typography from "@mui/material/Typography";

// import images from "../public/assets/images/index";
// import Image from "next/image";
// import { Button, ButtonGroup } from "@mui/material";

// export default function Header() {
//   return (
//     <Box className="container">
//       <AppBar position="static">
//         <Toolbar className="btn-container">
//           <Box className="logo-container">
//             <div>
//               <Image src={images.logo} />
//             </div>
//             <Typography
//               className="logoName"
//               variant="h6"
//               noWrap
//               component="div"
//             >
//               Robuy
//             </Typography>
//           </Box>

//           <Box className="btn">
//             <ButtonGroup className="btn2">
//               <Button>
//                 {" "}
//                 <Image className="nav-icon" src={images.coin2} />
//                 Купить робуксы
//               </Button>
//               <Button className="btn-group2">
//                 {" "}
//                 <Image className="nav-icon" src={images.union} />
//                 Бесплатно
//               </Button>
//               <Button className="btn-group3">
//                 {" "}
//                 <Image className="nav-icon" src={images.subtract} /> Мои Покупки
//               </Button>
//               <Button className="btn-group4">
//                 {" "}
//                 <Image className="nav-icon" src={images.vector3} /> Промокод
//               </Button>
//               <Button className="btn-groupLast">
//                 {" "}
//                 <Image className="nav-icon" src={images.union2} /> Блог
//               </Button>
//             </ButtonGroup>
//           </Box>

//           <Box sx={{ flexGrow: 1 }} />
//           <Box className="icon-container">
//             <div>
//               <Image src={images.Vector} />
//             </div>

//             <div className="twiter-box">
//               <Image src={images.twiter} />
//             </div>

//             <Button className="btn-last">Войти</Button>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box className="btn-none">
//         <ButtonGroup>
//           <Button className="btn-group2">
//             {" "}
//             <Image className="nav-icon2" src={images.coin} />
//             Купить робуксы
//           </Button>
//           <Button className="btn-group">
//             {" "}
//             <Image className="nav-icon" src={images.union} />
//             Бесплатно
//           </Button>
//           <Button className="btn-group">
//             {" "}
//             <Image className="nav-icon" src={images.subtract} /> Мои Покупки
//           </Button>
//           <Button className="btn-group">
//             {" "}
//             <Image className="nav-icon" src={images.vector3} /> Промокод
//           </Button>
//           <Button className="btn-groupLast">
//             {" "}
//             <Image className="nav-icon" src={images.union2} /> Блог
//           </Button>
//         </ButtonGroup>
//       </Box>
//     </Box>
//   );
// }

import * as React from "react";
import images from "../public/assets/images/index";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Image from "next/image";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, ButtonGroup } from "@mui/material";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const [mobileOpen] = React.useState(false);

  return (
    <div className="headerParent">
      <AppBar component="nav" className="navbar">
        <Typography variant="h6" component="div">
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
