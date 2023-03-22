import React from "react";

const commonCard = () => {
  return (
    <div className="parentChild">
      <Card sx={{ maxWidth: 320 }}>
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
              Подростка в Сингапуре задержали за игру на ИГИЛ-сервере Roblox
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Правоохранительные органы Сингапура задержал...
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default commonCard;
