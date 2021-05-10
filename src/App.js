import React from "react";
//import Potato from "./Potato";

function Food({ name, picture }) {
  //console.log(props);
  return (
    <div>
      <h2>I like {fav}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Samgyeopsal",
    image: "https://t1.daumcdn.net/cfile/tistory/9942B3395A3501C304",
  },
  {
    name: "Bibimbap",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjI3/MDAxNDkzMDIzMjc4MjU2.L-3Vv9r0XjeRGGncaB0p0II6mw9-NoBfu2k4PMCrTdgg.jP8wA64wrWrXrH3ZTP4UBCPR6ZWppqqnhXkS8FPpYMQg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800",
  },
  {
    name: "Ramen",
    image:
      "https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg",
  },
  {
    name: "Bossam",
    image:
      "https://t1.daumcdn.net/liveboard/SNUH/3b80ed1c420a47a0af3c411cfc00326c.JPG",
  },
  {
    name: "Tteokbokki",
    image:
      "https://cdn.kihoilbo.co.kr/news/photo/202008/880134_302005_3430.png",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
