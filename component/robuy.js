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
      <div className="robuyContainer">
        <div className="robuyParent">
          <Card className="robuychildcontainer" sx={{ maxWidth: 658 }}>
            <div className="box">
              <div className="box1"></div>
              <div className="box2"></div>
              <div className="box3"></div>
              <div className="box4"></div>
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
                <img src={"/assets/images/image.svg"} alt="Edit Icon" />
                <CardContent>
                  <div className="buttonParent">
                    <Button variant="contained2">Последняя новость</Button>
                    <Button variant="contained1">Обновления</Button>
                  </div>
                  <div className="text">
                    <Typography variant="body2">
                      В 2022 году в Roblox ежедневно заходили 56 миллионов
                      игроков
                    </Typography>
                    <Typography variant="body1">
                      Roblox опубликовала свои финансовые результаты за
                      четвертый квартал 2022. У компании скачок выручки и
                      заказов, но убытки значительно увеличились.
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Card>
        </div>

        <div className="union">
          <Typography></Typography>
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

              <CardContent className="firstCard">
                <div className="box">
                  <div className="box1"></div>
                  <div className="box2"></div>
                  <div className="box3"></div>
                  <div className="box4"></div>
                  <Typography variant="h5">
                    Подростка в Сингапуре задержали за игру на ИГИЛ-сервере
                    Roblox
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Правоохранительные органы Сингапура задержал...
                  </Typography>
                </div>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 320 }}>
              <div className="imgButton">
                <Image src={images.dragon} />
                <Button variant="contained4">Игры</Button>
              </div>

              <CardContent className="secondCard">
                <div className="box">
                  <div className="box1"></div>
                  <div className="box2"></div>
                  <div className="box3"></div>
                  <div className="box4"></div>
                  <Typography variant="h5">
                    Созданный в Roblox сурвайвал Creatures of Sonaria получит
                    сериальную адаптацию
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Компания Wind Sun Sky Entertainment, которую возглавл...
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="virticalCard">
            <Card sx={{ display: "flex" }}>
              <Image src={images.Roblox} />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <div className="box">
                    <div className="box1"></div>
                    <div className="box2"></div>
                    <div className="box3"></div>
                    <div className="box4"></div>
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
                  </div>
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

              <CardContent className="firstChild">
                <div className="box">
                  <div className="box1"></div>
                  <div className="box2"></div>
                  <div className="box3"></div>
                  <div className="box4"></div>
                  <Typography variant="h5">
                    Разработчики Roblox изменили звуковой эффект "Oof" из-за...
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Правоохранительные органы Сингапура задержал...
                  </Typography>
                </div>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 320 }}>
              <div className="imgButton">
                <Image src={images.cambro} />
                <Button variant="contained4">Новости</Button>
              </div>

              <CardContent className="secondChild">
                <div className="box">
                  <div className="box1"></div>
                  <div className="box2"></div>
                  <div className="box3"></div>
                  <div className="box4"></div>
                  <Typography variant="h5">
                    Созданный в Roblox сурвайвал Creatures of Sonaria получит
                    сериальную адаптацию
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Компания Wind Sun Sky Entertainment, которую возглавл...
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Robuy;
