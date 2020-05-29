import React, { Component } from "react";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "홍길동",
    birthday: "960122",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "호길롱",
    birthday: "961122",
    gender: "여자",
    job: "대학원생",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "길로동",
    birthday: "950422",
    gender: "여자",
    job: "고등학생",
  },
];

class App extends Component {
  render() {
    return customers.map((c) => (
      <Customer
        key={c.id}
        id={c.id}
        image={c.image}
        name={c.name}
        birthday={c.birthday}
        gender={c.gender}
        job={c.job}
      />
    ));
  }
}

export default App;
