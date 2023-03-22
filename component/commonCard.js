import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import products from "../pages/shared/json/productCards";
import images from "../public/assets/images/index";
import Image from "next/image";
const CommonCard = () => {
  return (
    <div className="productCard_container">
      {products.products?.map((product) => {
        return (
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
                <Typography variant="h5">{product.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.decription}
                </Typography>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default CommonCard;
