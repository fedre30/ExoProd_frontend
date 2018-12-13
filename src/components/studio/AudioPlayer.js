import React from "react";
import styled from 'styled-components';
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';

const AudioPlayer = () => (
    <AudioPlayerStyle>
        <div class="audioplayer-container">
            <p>0:00</p>
            <div class="audioplayer-progressbar-container">
                <span class="audioplayer-progressbar_interactive"></span>
            </div>
            <p>0:00</p>
        </div>
    </AudioPlayerStyle>
);

const AudioPlayerStyle = styled.div
    `
    .audioplayer-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width:100%;
        margin: 16px 0;
    }

    .audioplayer-container p {
        opacity: 0.7;
        color: ${Colors.text}
        font-family: ${Fonts.text};
        font-size: 14px;
        margin: 0;
    }
    .audioplayer-progressbar-container {
        width: 200px;
        height: 3px;
        background: rgba(112, 121, 140, 0.5);
        margin: 0 16px;
        border-radius: 50px;
        position: relative;
    }
    .audioplayer-progressbar_interactive {
        position:absolute;
        width: 100%;
        height: 100%;
        background: #FFFCF2;
        left: 0;
        border-radius: 50px;
    }
    .audioplayer-progressbar_interactive::before {
        content: "";
        width: 9px;
        height: 9px;
        right: -4.5px;
        top: -2.5px;
        border-radius: 50%;
        z-index: 1;
        background: #EAD7D1;
        position: absolute;
    }
    `
;

export default AudioPlayer;