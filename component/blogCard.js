// import React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { useRouter } from "next/router";

// const BlogCard = ({ blog }) => {
//   const router = useRouter();

//   const handler = (id) => {
//     router.push({
//       pathname: "/blog",
//       query: { id },
//     });
//   };

//   const description = blog?.fields?.description;
//   const id = blog?.sys?.id;

//   return (
//     <Card sx={{ maxWidth: 320 }} onClick={() => handler(id)}>
//       <div className="imgButton">
//         <img src={blog?.fields?.image?.fields?.file?.url} />
//         {blog?.fields?.tags?.map((t) => (
//           <Button variant="contained3">{t.name}</Button>
//         ))}
//       </div>
//       <CardContent className="firstCard">
//         <div className="card-border-container">
{
  /* <svg
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
</svg> */
}
//         </div>

//         <div className="card-content">
//           <Typography variant="h2" className="post-title">
//             {blog?.fields?.title}
//           </Typography>
//           <Typography variant="body2" className="post-des">
//             {documentToReactComponents(description)}
//           </Typography>
//         </div>

//         <div className="card-border-containerlast">
//           <svg
//             width="17"
//             height="17"
//             viewBox="0 0 17 17"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M1 1V8C1 12.4183 4.58172 16 9 16H16"
//               stroke="#F2F4F5"
//               stroke-width="2"
//               stroke-linecap="round"
//             />
//           </svg>

//           <svg
//             width="17"
//             height="17"
//             viewBox="0 0 17 17"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M16 1V8C16 12.4183 12.4183 16 8 16H1"
//               stroke="#F2F4F5"
//               stroke-width="2"
//               stroke-linecap="round"
//             />
//           </svg>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default BlogCard;
import React from "react";
import Image from "next/image";
import images from "../public/assets/images/index";
import { Button, Typography } from "@mui/material";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useRouter } from "next/router";
const BlogCard = ({ blog }) => {
  const router = useRouter();

  const handler = (id) => {
    router.push({
      pathname: "/blog",
      query: { id },
    });
  };

  const description = blog?.fields?.description;
  const id = blog?.sys?.id;
  return (
    <div className="blog-card-container" onClick={() => handler(id)}>
      <div className="blog-card-img">
        <img src={blog?.fields?.image?.fields?.file?.url} />
        {blog?.fields?.tags?.map((t) => (
          <Button className="img-btn">{t.name}</Button>
        ))}
        {/* // <Image src={images.rolboxpapa} /> */}
      </div>
      <div className="blog-card-content-parent">
        <div className="arrow-img">
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
        <div className="card-content">
          <Typography className="blog-card-heading">
            {blog?.fields?.title}
          </Typography>
          <Typography className="blog-card-prg">
            {documentToReactComponents(description)}
          </Typography>
        </div>
        <div className="arrow-img">
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

export default BlogCard;
