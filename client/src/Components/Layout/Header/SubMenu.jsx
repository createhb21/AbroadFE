import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { IoArrowBackCircleSharp } from "react-icons/io5";

function CommunitySub({ isDown }) {
    const [activeMenu, setActiveMenu] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null);

    useEffect(() => {
        setActiveMenu("main");
        setMenuHeight(null);
    },[isDown])

    const calcHeight = (el) => {
        const height = el.offsetHeight;
        return setMenuHeight(height);
    }
    const goToMain = () => {
        setMenuHeight(null)
        setActiveMenu("main")
    }

    return (
        <SubMenu style={{ height: menuHeight }}>
            <CSSTransition
            in={activeMenu==="continent" || activeMenu==="travel"}
            timeout={250}
            classNames="move"
            >
                <FirstSub>
                    <li>자유 게시판</li>
                    <li onClick={() => setActiveMenu("continent")}>대륙</li>
                    <li onClick={() => setActiveMenu("travel")}>여행</li>
                </FirstSub>
            </CSSTransition>
            <CSSTransition
                in={activeMenu === "continent"}
                timeout={500}
                classNames="slide"
                unmountOnExit
                onEnter={calcHeight}
            >
                <SecondSub>
                    <div><IoArrowBackCircleSharp className="returnIcon" onClick={goToMain} /></div>
                    <li>남미</li>
                    <li>북미</li>
                    <li>아시아</li>
                    <li>아프리카</li>
                    <li>오세아니아</li>
                    <li>유럽</li>
                    <li>중동</li>
                </SecondSub>
            </CSSTransition>
            <CSSTransition
                in={activeMenu === 'travel'}
                timeout={500}
                classNames="slide"
                unmountOnExit
                onEnter={calcHeight}
            >
                <SecondSub>
                    <div><IoArrowBackCircleSharp className="returnIcon" onClick={goToMain} /></div>
                    <li>정보/일정 공유</li>
                    <li>동행 찾기</li>
                </SecondSub>
            </CSSTransition>
        </SubMenu>
    )
}

export default CommunitySub;

const SubMenu = styled.ul`
    display : flex;
    position: absolute;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    max-height: 0;
    height : 13rem;
    width: 10rem;
    color : #444444;
    font-weight : 700;
    overflow : hidden;
    top: 85%;
    border: none;
    border-radius : 25px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    transition: max-height .4s;
    background-color : #ffffff;
    z-index : 15;
`
const FirstSub = styled.ul`
    width : 100%;
    height : fit-content;
    &.move-enter{
        transform:translateX(0);
    }
    &.move-enter-active{
        transform:translateX(-100%);
        transition : all .4s ease;
    }
    &.move-exit{
        transform:translateX(-100%);
    }
    &.move-exit-active{
        transform:translateX(0);
        transition : all .4s ease;
    }
    & > li {
        display : flex;
        position : relative;
        /* opacity : 0; */
        align-items : center;
        justify-content : flex-start;
        transition : all .2s;
        padding-left : 1.5em;
        width : 100%;
        height : 3.25rem;
        cursor: pointer;
        &:hover::before{
            content : "";
            position : absolute;
            left : 0;
            width : 5px;
            height : 70%;
            background-color : #66A6FF;
        }
        &:hover::after{
            content : "▶";
            margin : 0 1.5rem 0 auto;
            font-size : 0.7rem;
            color : #66A6FF;
        }
    }
`

const SecondSub = styled.ul`
    display : flex;
    flex-direction : column;
    align-items : flex-start;
    justify-content : space-evenly;
    position : absolute;
    top:0;
    width : 10rem;
    min-height : 13rem;
    padding : 1em 1.5em;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    background-color : #ffffff;
    border-radius : 25px;
            &.slide-enter{
                transform : translateX(100%);
                position : absolute;
            }
            &.slide-enter-active{
                transform : translateX(0);
                transition : all .4s ease;
            }
            &.slide-exit{
            }
            &.slide-exit-active{
                transform : translateX(100%);
                transition : all .4s ease;
            }
            & > li {
                display : flex;
                align-items : center;
                justify-content : flex-start;
                cursor: pointer;
                width : 100%;
                height : 3.25rem;
            }
            &> div{
                display : flex;
                height : fit-content;
                align-items : center;
                & > .returnIcon {
                    margin-right : 0.5rem;
                    font-size : 1.5rem;
                    cursor: pointer;
                    color : #66A6FF;
                }
    }
`