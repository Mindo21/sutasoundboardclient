import "./SoundboardButton.css"
import {forwardRef, useEffect, useState} from "react";

enum PLAY_STATUS {
    IDLE = "idle",
    PLAYING = "playing",
}

export interface SoundboardButtonProps {
    id: number,
    caption: string,
    audioName: string
}

const SoundboardButton = forwardRef<HTMLDivElement, SoundboardButtonProps>((props, ref) => {

    const {
        id,
        caption,
        audioName
    } = props;

    let audio: HTMLAudioElement;

    const[bgColor, setBgColor] = useState(PLAY_STATUS.IDLE);

    useEffect(() => {
        audio = new Audio(audioName);
        audio.onended = () => setBgColor(PLAY_STATUS.IDLE);
    })

    const playAudio = () => {
        setBgColor(PLAY_STATUS.PLAYING);
        audio.play();
    }

    return (
        <div ref={ref} className={"soundboardButton " + bgColor} onClick={playAudio}>
            <span className="audioNameSpan">{`${id} ${caption}`}</span>
        </div>
    )
});

export default SoundboardButton;
