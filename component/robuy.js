import React from "react";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Header from "./header";
import Card from "@mui/material/Card";
import BlogList from "./blogList";

const Robuy = () => {
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
                <img src={"/assets/images/image.svg"} alt="#" />
                <CardContent className="newsCard">
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
        <BlogList />
      </div>
    </>
  );
};

export default Robuy;
