import React from "react";
import PropTypes from "prop-types";
import { render } from "@testing-library/react";
//import Potato from "./Potato";

/*const foodILike = [
  {
    id: 1,
    name: "Samgyeopsal",
    image: "http://ai.esmplus.com/oksamda/pig/1000/p_5kup_rp2_1000.jpg",
  },
  {
    id: 2,
    name: "Bibimbap",
    image:
      "https://t1.daumcdn.net/liveboard/SNUH/fed8c48df21b43ada043b4cdda7dfe57.JPG",
    rating: 4.3,
  },
  {
    id: 3,
    name: "Ramen",
    image:
      "https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg",
    rating: 5.5,
  },
  {
    id: 4,
    name: "Bossam",
    image:
      "https://t1.daumcdn.net/liveboard/SNUH/3b80ed1c420a47a0af3c411cfc00326c.JPG",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Tteokbokki",
    image:
      "https://cdn.kihoilbo.co.kr/news/photo/202008/880134_302005_3430.png",
    rating: 6.0,
  },
];
*/
/*
function renderFood(dish) {
  console.log(dish);
  return <Food name={dish.name} picture={dish.image} />;
}

function App() {
  return (
    <div>
      {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)}
    </div>
  );
}
*/
/*
function Food({ name, picture, rating }) {
  //console.log(props);
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

//function component
function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}
*/

//class component
class App extends React.Component {
  /*constructor(props) {
    super(props);
    console.log("hello");
  }*/
  state = {
    //count: 0,
    isLoading: true,
    movies: [],
  };
  /*add = () => {
    //console.log("add");
    //this.setState({ count: this.state.count + 1 });
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };
  minus = () => {
    //console.log("minus");
    this.setState((current) => ({ count: current.count - 1 }));
  };

  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  componentWillUnmount() {
    console.log("Goodsbye, cruel world");
  }*/
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false, book: true });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
    //console.log("I'm rendering");
    //return (
    // <div>
    //    <h1>I'm a class component. The number is: {this.state.count}</h1>
    //    <button onClick={this.add}>Add</button>
    //    <button onClick={this.minus}>Minus</button>
    //  </div>
    //);
  }
}

export default App;
