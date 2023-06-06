// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { createClient } from "contentful";
// import { Button, Typography } from "@mui/material";
// import Head from "next/head";
// const BlogDetail = () => {
//   const [blog, setBlog] = useState(null);
//   const router = useRouter();
//   const { id } = router?.query;
//   console.log("🚀 ~ blog:", blog);

//   useEffect(() => {
//     const client = createClient({
//       space: "c288e1xhsyct",
//       accessToken: "9F8haQVl_uqqdxbrDbTh6noeplOE4qbhBHNn9CekcLo",
//     });

//     const fetchData = async () => {
//       try {
//         const response = await client.getTags();
//         const tags = response.items?.map((t) => ({
//           id: t.sys?.id,
//           name: t.name,
//         }));
//         console.log("🚀 ~ tags:", tags);

//         const entryResponse = await client.getEntry("irfan");
//         const filteredTags = tags.filter((t) => {
//           const tt = entryResponse.metadata?.tags?.map((iTag) => {
//             if (iTag.sys?.id === t.id) {
//               return t;
//             }
//           });
//           return tt[0] ? tt[0] : null;
//         });

//         const result = {
//           ...entryResponse,
//           fields: { ...entryResponse.fields, tags: filteredTags },
//         };

//         setBlog(result);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, [id]);

//   const description = blog?.fields?.description;
//   const description2 = blog?.fields?.description2;
//   const description3 = blog?.fields?.description3;

//   return (
//     <div className="blogDetail-container  fade-in">
//       <Head>
//         <title>Robuy | Блог про робуксы и их выгодную покупку""</title>
//         <link rel="canonical" href="https://robuy.gg/blog"></link>
//       </Head>
//       <div className="blogDetail-img">
//         {" "}
//         <img src={blog?.fields?.image?.fields?.file?.url} />
//       </div>
//       <div className="blogdetail-content">
//         <div className="border-arrow">
//           <svg
//             width="17"
//             height="17"
//             viewBox="0 0 17 17"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M1 16V9C1 4.58172 4.58172 1 9 1H16"
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
//               d="M16 16V9C16 4.58172 12.4183 1 8 1H1"
//               stroke="#F2F4F5"
//               stroke-width="2"
//               stroke-linecap="round"
//             />
//           </svg>
//         </div>
//         <div className="card-content-parent">
//           <div className="card-header-bar">
//             <div>
//               <Typography variant="h6">Блог Robuy</Typography>
//               <Typography className="h6" variant="h6">
//                 Новости и обновления
//               </Typography>
//             </div>
//             <div>
//               {" "}
//               <Button
//                 className="header-button"
//                 onClick={() => router.push("https://robuy.gg/")}
//               >
//                 Купить робуксы
//               </Button>
//             </div>
//           </div>
//           <div className="button-tag">
//             {blog?.fields?.tags?.map((t) => (
//               <Button className="first-button-tag"> {t.name} </Button>
//             ))}
//           </div>
//           <div className="content">
//             <Typography variant="h6">{blog?.fields?.title}</Typography>
//             <Typography className="content-prg">
//               {documentToReactComponents(description)}
//             </Typography>
//             <div className="color-cotent-card">
//               <Typography variant="h6">
//                 {documentToReactComponents(description2)}
//               </Typography>
//             </div>
//             <Typography className="secondLast-text">
//               {documentToReactComponents(description3)}
//             </Typography>
//             <Typography className="Last-text"></Typography>
//           </div>
//         </div>

//         <div className="border-arrow">
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
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;
