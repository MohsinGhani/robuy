import React from "react";
import Image from "next/image";
import images from "../public/assets/images/index";
import { Button, Typography } from "@mui/material";
const BlogDetail = () => {
  return (
    <div className="blogDetail-container">
      <div className="blogDetail-img">
        {" "}
        <img src={"/assets/images/image.svg"} alt="#" />
      </div>
      <div className="blogdetail-content">
        <div className="border-arrow">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 16V9C1 4.58172 4.58172 1 9 1H16"
              stroke="#F2F4F5"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>

          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 16V9C16 4.58172 12.4183 1 8 1H1"
              stroke="#F2F4F5"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="card-content-parent">
          <div className="card-header-bar">
            <div>
              <Typography variant="h6">Блог Robuy</Typography>
              <Typography className="h6" variant="h6">
                Новости и обновления
              </Typography>
            </div>
            <div>
              {" "}
              <Button className="header-button">Подписаться</Button>
            </div>
          </div>
          <div className="button-tag">
            <Button className="first-button-tag">Последняя новость</Button>
            <Button className="second-button-tag">Обновления</Button>
          </div>
          <div className="content">
            <Typography variant="h6">
              В 2022 году в Roblox ежедневно заходили 56 миллионов игроков
            </Typography>
            <Typography className="content-prg">
              Основатель и генеральный директор Roblox Corporation Дэвид Башуки{" "}
              <br></br>
              опубликовал открытое письмо к геймерам, в котором похвастался
              значительным ростом популярности. По его словам, в 2022 году число
              ежедневных посетителей Roblox выросло на 23% и составило свыше 56
              млн игроков:
            </Typography>
            <div className="color-cotent-card">
              <Typography variant="h6">
                Инвестиции, которые мы делаем для расширения вовлеченности в
                Roblox в разных{" "}
                <b>
                  географических регионах и возрастных группах, приносят свои
                </b>
                <br></br> плоды. В 2022 году наше сообщество выросло на 23% и
                превысило 56 <br></br>миллионов ежедневных пользователей по
                всему миру. Наши пользователи провели более 49.3 миллиардов
                часов вместе, создавая, играя, исследуя, обучаясь и общаясь.
                Сегодня более половины пользователей Roblox — это люди от 13 лет
                и старше, что свидетельствует о привлекательности нашей{" "}
                <br></br>платформы для широкого круга аудитории.
              </Typography>
            </div>
            <Typography className="secondLast-text">
              Заодно Дэвид сообщил, что студия прикладывает все возможные усилия
              для обеспечения безопасной и комфортной игры:
            </Typography>
            <Typography className="Last-text">
              Поскольку сообщество Roblox продолжает расти, мы уделяем большое
              внимание обеспечению безопасной среды для наших пользователей. За
              последний год мы увеличили наши инвестиции в ИИ и машинное
              обучение для автономного обнаружения и предотвращения попыток
              игроков вступить во вредоносные связи или загрузить вредоносный
              контент.
            </Typography>
          </div>
        </div>

        <div className="border-arrow">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1V8C1 12.4183 4.58172 16 9 16H16"
              stroke="#F2F4F5"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>

          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 1V8C16 12.4183 12.4183 16 8 16H1"
              stroke="#F2F4F5"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
