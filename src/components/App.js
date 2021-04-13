import React, {useEffect, useState} from "react";
import styled, {css} from 'styled-components';
import '../components/CSS/style.css'

const App = () => {

    const SecondHand = styled.div`
    &:before{
    content: "";
    position: absolute;
    width: 2px;
    height: 150px;
    background: #fff;
    z-index: 12; /*place it above the "clock" and hour+min gage but under the centerDot*/
    border-radius: 6px 6px 0 0; /*smoothing out end of hour gage*/
    bottom: 113px;
    transform: rotate(${props => props.rotation})
    translate3d(-50%, 0, 0);
    transform-origin: 0px bottom;
    }
    display: flex;
    justify-content: center; !*make it be on spot -> move it from left to center*!
    position: absolute;
    width: 230px;
    height: 230px;
`;

    const MinuteHand = styled.div`
    &:before{
    content: "";
    position: absolute;
    width: 4px;
    height: 90px;
    top: 5px;
    background: #fff;
    z-index: 11; /*place it above the "clock" and hour gage but under the centerDot*/
    border-radius: 6px 6px 0 0; /*smoothing out end of hour gage*/
    left: 50%;
    transform: rotate(${props => props.rotation})
    translate3d(-50%, 0, 0);
    transform-origin: 0px bottom;
    }
`;

    const HourHand = styled.div`
    &:before{
    content: "";
    position: absolute;
    width: 8px;
    height: 80px;
    background: #cc293d;
    left: 50%;
    z-index: 10; /*place it above the "clock" but under the centerDot*/
    border-radius: 6px 6px 0 0; /*smoothing out end of hour gage*/
    transform: rotate(${props => props.rotation})
    translate3d(-50%, 0, 0);
    transform-origin: 0px bottom;
    }
`;

    const [day, setDay] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setDay(new Date())

        }, 1000);
        return () => clearInterval(interval);
    }, [])

    return (<div className="clock">
            <div className="hour">
                <HourHand
                    rotation={((day.getHours() % 12) + day.getMinutes() / 60 + day.getSeconds() / 3600) * 30 + "deg"}></HourHand>
            </div>
            <div className="min">
                <MinuteHand rotation={day.getMinutes() * 6 + "deg"}></MinuteHand>
            </div>
            <div className="sec">
                <SecondHand rotation={day.getSeconds() * 6 + "deg"}></SecondHand>
            </div>
        </div>
    )
}

export default App;