import "./Soundboard.css"
import SoundboardButton from "../SoundboardButton/SoundboardButton";
import {useRef} from "react";

interface SoundboardButtonData {
    id: number,
    caption: string,
    audioName: string
}

export default function Soundboard() {

    const soundboardButtons: SoundboardButtonData[] = [
        {
            id: 0,
            caption: "SIKULA",
            audioName: "sikula.m4a"
        },
        {
            id: 1,
            caption: "SIKULA BIG",
            audioName: "sikulaBig.m4a"
        },
        {
            id: 2,
            caption: "ZOSTAN",
            audioName: "zostan.m4a"
        },
        {
            id: 3,
            caption: "ZOSTAN SHORT",
            audioName: "zostanShort.m4a"
        },
        {
            id: 4,
            caption: "ANO",
            audioName: "ano.m4a"
        },
        {
            id: 5,
            caption: "NIE",
            audioName: "nie.m4a"
        },
        {
            id: 6,
            caption: "SUTA NIE",
            audioName: "sutaNie.m4a"
        },
        {
            id: 7,
            caption: "SUTA NIE BIG",
            audioName: "sutaNieBig.m4a"
        },
    ]

    const soundboardButtonRefs = useRef<HTMLDivElement[]>([])

    const renderSoundboardButton = (data: SoundboardButtonData) => {
        return (
            <SoundboardButton ref={(element: HTMLDivElement) => soundboardButtonRefs.current.push(element)} {...data} />
        )
    }

    return (
        <div className="soundboard">
            {soundboardButtons.map(renderSoundboardButton)}

            <div className="clickme" onClick={() => {
                soundboardButtonRefs.current[1].click();
            }} />
        </div>
    )
}
