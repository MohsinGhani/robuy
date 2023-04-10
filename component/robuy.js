import React from "react";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Header from "./header";
import Card from "@mui/material/Card";
import BlogList from "./blogList";
import { useRouter } from "next/router";

const Robuy = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <div className="robuyContainer  fade-in">
        <div className="robuyParent">
          <Card className="robuychildcontainer fade-in" sx={{ maxWidth: 658 }}>
            <div className="robuy-box">
              <div className="robuy-box1"></div>
              <div className="robuy-box2"></div>
              <div className="robuy-box3"></div>
              <div className="robuy-box4"></div>
              <Card className="cardChild">
                <div className="header">
                  <div className="headerChild">
                    <Typography variant="h6" className="first-heading">
                      Блог Robuy
                    </Typography>
                    <Typography variant="h6" className="sec-heading">
                      Новости и обновления
                    </Typography>
                  </div>
                  <Button onClick={() => router.push("https://robuy.gg/")}>
                    Купить робуксы
                  </Button>
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
