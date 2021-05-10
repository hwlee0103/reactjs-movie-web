import React from "react";
//import Potato from "./Potato";

function Food({ name, picture }) {
  //console.log(props);
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt="foodPicture" />
    </div>
  );
}

const foodILike = [
  {
    name: "Samgyeopsal",
    image: "http://ai.esmplus.com/oksamda/pig/1000/p_5kup_rp2_1000.jpg",
  },
  {
    name: "Bibimbap",
    image:
      "https://t1.daumcdn.net/liveboard/SNUH/fed8c48df21b43ada043b4cdda7dfe57.JPG",
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
