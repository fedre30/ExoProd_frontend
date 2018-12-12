import React from "react";
import styled from 'styled-components';
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';

const AudioPlayer = () => (
    <AudioPlayerStyle>
        <div class="audioplayer-container">
            <p>0:00</p>
            <input 
                id="audioPlay" 
                type="range" 
                min="0" 
                max="100"/>
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
        margin-bottom: 16px;
    }

    .audioplayer-container p {
        margin: 0 16px;
        opacity: 0.7;
        color: ${Colors.text}
        font-family: ${Fonts.text};
        font-size: 14px;
    }
    `
;

export default AudioPlayer;