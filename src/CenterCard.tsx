import { Card } from "@mui/material";
import { useState } from "react";
import { StartContent } from "./StartContent";

import { FormDataMistake } from './FormData'

import { QuizContent } from "./QuizContent"


function Content(userHasBegan: boolean, setHasBegan: (arg0: boolean) => void, mistake: FormDataMistake | null, setMistake: (arg0: FormDataMistake) => void) {
    if (userHasBegan) {
        if(mistake == null) {
            return <QuizContent onMistake={setMistake}></QuizContent>
        }
    } else {
        return <StartContent onStart={() => setHasBegan(true)}></StartContent>;
    }
}

export function CenterCard() {
    let [hasBegan, setHasBegan] = useState(false);
    let [mistake, setMistake] = useState<FormDataMistake | null>(null);

    return (
        <>
            <Card sx={{ maxWidth: {xs: "90vw", md: "66vw"}, minWidth: "66vw", minHeight: "50vh", px: {xs: "2rem", md: "6rem"}, py: "1rem", display: "flex", flexDirection: 'column' }}>
                {
                    Content(hasBegan, setHasBegan, mistake, setMistake)
                }
            </Card>
        </>
    );
}
