//function의 형태로 만들기 (요즘 대세)

import React from "react";


const Home = () => {
    return <h1>Home 화면 입니다.</h1>;
}

export default Home;

/* : class 형태로 만들기
import React, {Component} from "react";

class Home extends Component{
    render(){
        return <h1>Home 화면 입니다.</h1>
    }
}
export default Home;
*/