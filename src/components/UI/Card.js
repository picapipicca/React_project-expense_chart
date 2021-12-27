import React from 'react';
import "./Card.css"

//wrapper components
const Card = (props) => {
    //children component가 원래 가지고있던 className 적용하기위해 여기 적용된 card class 에다가 props 로 받아서 이어줌!
    //이런식이 되는거임 <Card className="card expense-item"/>

    const classes = "card " + props.className; 
    return (
        //이안에있는 모든 props.chilren에게 모두 적용시키겠다
        <div className={classes}> {props.children} </div>
    );
};

export default Card;