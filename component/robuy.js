import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import images from "../public/assets/images/index";

import { ButtonGroup } from "@mui/material";

import Image from "next/image";
import { Box, useTheme } from "@mui/system";
import Header from "./header";

const Robuy = () => {
  const theme = useTheme();
  return (
    <>
      <Header />

      <div className=" "></div>
      <div className="robuyContainer">
        <Card className="robuychildcontainer" sx={{ maxWidth: 658 }}>
          <Card className="cardChild">
            <div className="header">
              <div className="headerChild">
                <Typography variant="subtitle2">Блог Robuy</Typography>
                <Typography variant="subtitle1">
                  Новости и обновления
                </Typography>
              </div>
              <Button>Подписаться</Button>
            </div>

            <CardMedia />

            <img src={"/assets/images/image.svg"} alt="Edit Icon" />
            <CardContent>
              <div className="buttonParent">
                <Button variant="contained2">Последняя новость</Button>
                <Button variant="contained1">Обновления</Button>
              </div>
              <div className="text">
                <Typography variant="body2">
                  В 2022 году в Roblox ежедневно заходили 56 миллионов игроков
                </Typography>
                <Typography variant="body1">
                  Roblox опубликовала свои финансовые результаты за четвертый
                  квартал 2022. У компании скачок выручки и заказов, но убытки
                  значительно увеличились.
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Card>
        <div className="union">
          <Typography>
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.5 0C1.39543 0 0.5 0.89543 0.5 2V12C0.5 13.1046 1.39543 14 2.5 14H9.5H11.5H12.5C14.1569 14 15.5 12.6569 15.5 11V3C15.5 2.44772 15.0523 2 14.5 2H13.5V11C13.5 11.5523 13.0523 12 12.5 12C11.9477 12 11.5 11.5523 11.5 11V2C11.5 0.895431 10.6046 0 9.5 0H2.5ZM3.5 2C2.94772 2 2.5 2.44772 2.5 3V5C2.5 5.55228 2.94772 6 3.5 6H5.5C6.05228 6 6.5 5.55228 6.5 5V3C6.5 2.44772 6.05228 2 5.5 2H3.5ZM2.5 9C2.5 9.55229 2.94772 10 3.5 10H8.5C9.05229 10 9.5 9.55229 9.5 9C9.5 8.44771 9.05228 8 8.5 8H3.5C2.94772 8 2.5 8.44771 2.5 9Z"
                fill="#1D2123"
              />
            </svg>
          </Typography>
          <Typography>Посты блога</Typography>
        </div>
        <ButtonGroup>
          <Button variant="contained1">Все</Button>
          <Button variant="contained2">Новости</Button>
          <Button variant="contained3">Игры</Button>
          <Button variant="contained4">Обновления</Button>
        </ButtonGroup>
        {/* <img src={icon} alt="Edit Icon" /> */}

        <div className="cardParent">
          <div className="parentChild">
            <Card sx={{ maxWidth: 320 }}>
              {/* <img src={"/assets/images/miltroen.svg"} alt="Edit Icon" /> */}
              {/* <img src={images.milto} alt="Edit Icon" /> */}
              <div className="imgButton">
                <Image src={images.milto} />
                <Button variant="contained3">Новости</Button>
              </div>

              <CardContent>
                <Typography variant="h5">
                  Подростка в Сингапуре задержали за игру на ИГИЛ-сервере Roblox
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Правоохранительные органы Сингапура задержал...
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 320 }}>
              <div className="imgButton">
                <Image src={images.dragon} />
                <Button variant="contained4">Игры</Button>
              </div>

              <CardContent>
                <Typography variant="h5">
                  Созданный в Roblox сурвайвал Creatures of Sonaria получит
                  сериальную адаптацию
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Компания Wind Sun Sky Entertainment, которую возглавл...
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="virticalCard">
            <Card sx={{ display: "flex" }}>
              <Image src={images.Roblox} />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Button variant="contained4">Игры</Button>
                  <Typography variant="subtitle1">
                    Roblox получила обновление графики
                  </Typography>
                  <Typography variant="subtitle2">
                    Разработчики Roblox, одной из самых популярных песочниц в
                    мире, выпустили обновление с различными графическими
                    улучшениями. Патч подтянул текстуры всех материалов игры:
                    Этим релизом мы улучшили визуальное...
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </div>
          <div className="parentChild2">
            <Card sx={{ maxWidth: 320 }}>
              {/* <img src={"/assets/images/miltroen.svg"} alt="Edit Icon" /> */}
              {/* <img src={images.milto} alt="Edit Icon" /> */}
              <div className="imgButton">
                <Image src={images.rolboxpapa} />
                <Button variant="contained3">Новости</Button>
              </div>

              <CardContent>
                <Typography variant="h5">
                  Разработчики Roblox изменили звуковой эффект "Oof" из-за...
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Правоохранительные органы Сингапура задержал...
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 320 }}>
              <div className="imgButton">
                <Image src={images.cambro} />
                <Button variant="contained4">Новости</Button>
              </div>

              <CardContent>
                <Typography variant="h5">
                  Созданный в Roblox сурвайвал Creatures of Sonaria получит
                  сериальную адаптацию
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Компания Wind Sun Sky Entertainment, которую возглавл...
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Robuy;
