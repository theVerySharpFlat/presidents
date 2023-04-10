import { Button, CardActions, CardContent, FormControl, FormHelperText, Input, InputLabel, InputProps, LinearProgress, MenuItem, OutlinedInput, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useState } from "react";
import { FormDataMistake } from "./FormData";

import presidents from "./assets/presidents/presidents.json";

interface QuizContentProps {
    onMistake: (arg0: FormDataMistake) => void
};


const parties = [
    'No Party',
    'Federalist',
    'Democractic-Republican',
    'Whig',
    'Democratic',
    'Republican'
];

export function QuizContent(props: QuizContentProps) {
    let [presidentNumber, setPresidentNumber] = useState(0);

    let [name, setName] = useState("");
    let [nameError, setNameError] = useState(false);
    let [nameErrorText, setNameErrorText] = useState("");
    let [nameDisabled, setNameDisabled] = useState(false);

    let resetName = () => {
        setName("");
        setNameError(false);
        setNameErrorText("");
        setNameDisabled(false);
    }

    let [inOffice, setInOffice] = useState("");
    let [inOfficeError, setInOfficeError] = useState(false);
    let [inOfficeErrorText, setInOfficeErrorText] = useState("");
    let [inOfficeDisabled, setInOfficeDisabled] = useState(false);

    let resetInOffice = () => {
        setInOffice("");
        setInOfficeError(false);
        setInOfficeErrorText("");
        setInOfficeDisabled(false);
    }

    let [outOffice, setOutOffice] = useState("");
    let [outOfficeError, setOutOfficeError] = useState(false);
    let [outOfficeErrorText, setOutOfficeErrorText] = useState("");
    let [outOfficeDisabled, setOutOfficeDisabled] = useState(false);

    let resetOutOffice = () => {
        setOutOffice("");
        setOutOfficeError(false);
        setOutOfficeErrorText("");
        setOutOfficeDisabled(false);
    }

    let [selectedParty, setSelectedParty] = useState(parties[0]);
    let [selectedPartyError, setSelectedPartyError] = useState(false);
    let [selectedPartyErrorText, setSelectedPartyErrorText] = useState("");
    let [selectedPartyDisabled, setSelectedPartyDisabled] = useState(false);

    let resetSelectedParty = () => {
        setSelectedParty(parties[0]);
        setSelectedPartyError(false);
        setSelectedPartyErrorText("");
        setSelectedPartyDisabled(false);
    }

    let resetForm = () => {
        resetName();
        resetInOffice();
        resetOutOffice();
        resetSelectedParty();
    }

    let validateNameField = (value: string): boolean => {

        if (value.length > 0) {
            return ((value.match(/^([a-zA-Z]+)\s([a-zA-Z]+)$/mg)?.length == 1)) || (value.match(/^([a-zA-Z]+)\s([a-zA-Z]+)\s([a-zA-Z]+)$/mg)?.length == 1);

        } else {
            return false;
        }
    }

    let validateDateField = (value: string): boolean => {
        if (value.length > 0) {
            return value.match(/^\d{4}$/)?.length == 1;
        } else {
            return false;
        }
    }

    let onNameFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value;
        setName(value);
        if (value.length > 0) {
            // Must contain one space and no numbers
            const error = !validateNameField(value);
            setNameError(error);
            setNameErrorText(error ? "Please enter a valid name!" : "");
        } else {
            setNameError(false);
            setNameErrorText("");
        }
    }

    let onInOfficeFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value;
        setInOffice(value);
        if (value.length > 0) {
            // Must contain one space and no numbers
            const error = !validateDateField(value);
            setInOfficeError(error);
            setInOfficeErrorText(error ? "Please enter a valid date!" : "");
        } else {
            setInOfficeError(false);
            setInOfficeErrorText("");
        }
    }

    let onOutOfficeFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value;
        setOutOffice(value);
        if (value.length > 0) {
            // Must contain one space and no numbers
            const error = !validateDateField(value);
            setOutOfficeError(error);
            setOutOfficeErrorText(error ? "Please enter a valid date!" : "");
        } else {
            setOutOfficeError(false);
            setOutOfficeErrorText("");
        }
    }

    let onSubmitButtonPressed = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        let correct = true;
        if (presidents[presidentNumber].president.toLowerCase() != name.toLowerCase()) {
            setNameError(true);
            setNameErrorText("President name is incorrect!");
            correct = false;
        } else {
            setNameDisabled(true);
        }

        if (presidents[presidentNumber].took_office != inOffice) {
            setInOfficeError(true);
            setInOfficeErrorText("In office date is incorrect!");
            correct = false;
        } else {
            setInOfficeDisabled(true);
        }


        if (presidents[presidentNumber].left_office != outOffice) {
            setOutOfficeError(true);
            setOutOfficeErrorText("Out office date is incorrect!");
            correct = false;
        } else {
            setOutOfficeDisabled(true);
        }


        if (presidents[presidentNumber].party != selectedParty) {
            setSelectedPartyError(true);
            setSelectedPartyErrorText("Incorrect party!");
            correct = false;
        } else {
            setSelectedPartyDisabled(true);
        }

        if (correct) {
            setPresidentNumber(presidentNumber + 1);
            resetForm();
        }
    }

    const handlePartyChange = (event: SelectChangeEvent<string>) => {
        const {
            target: { value },
        } = event;
        setSelectedParty(
            value
        );
        setSelectedPartyError(false);
        setSelectedPartyErrorText("");
    };

    return (
        <>
            <CardContent sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <LinearProgress sx={{ marginBottom: "2rem" }} variant="determinate" value={presidentNumber} />
                <Typography variant="h4" sx={{ textAlign: "center" }}> Who was president #{presidentNumber + 1}? </Typography>
                <FormControl sx={{ my: 2 }}>
                    <InputLabel htmlFor="name-input">Name (First Last)</InputLabel>
                    <Input value={name} id="name-input" error={nameError} disabled={nameDisabled} aria-describedby="name-description" onChange={e => onNameFieldChange(e)} />
                    <FormHelperText id="name-description" error={nameError}>{nameErrorText}</FormHelperText>
                </FormControl>
                <FormControl sx={{ my: 2 }}>
                    <InputLabel htmlFor="in-office-year-input">Year in office</InputLabel>
                    <Input value={inOffice} id="in-office-year-input" error={inOfficeError} disabled={inOfficeDisabled} onChange={e => onInOfficeFieldChange(e)} aria-describedby="name-description" />
                    <FormHelperText id="in-office-year-description" error={inOfficeError}>{inOfficeErrorText}</FormHelperText>
                </FormControl>
                <FormControl sx={{ my: 2 }}>
                    <InputLabel htmlFor="out-of-office-year-input">Year out of office</InputLabel>
                    <Input value={outOffice} id="out-of-office-year-input" error={outOfficeError} disabled={outOfficeDisabled} onChange={e => onOutOfficeFieldChange(e)} aria-describedby="name-description" />
                    <FormHelperText id="out-of-office-year-description" error={outOfficeError}>{outOfficeErrorText}</FormHelperText>
                </FormControl>
                <FormControl sx={{ my: 2 }}>
                    <InputLabel id="demo-party-label">Party</InputLabel>
                    <Select
                        labelId="demo-party-label"
                        id="demo-party"
                        value={selectedParty}
                        onChange={handlePartyChange}
                        input={<OutlinedInput label="Party" />}
                        error={selectedPartyError}
                        disabled={selectedPartyDisabled}
                    >
                        {parties.map((party) => (
                            <MenuItem
                                key={party}
                                value={party}
                            >
                                {party}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText id="out-of-office-year-description" error={selectedPartyError}>{selectedPartyErrorText}</FormHelperText>
                </FormControl>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button size="large" color="primary" onClick={e => onSubmitButtonPressed(e)}>
                    Submit
                </Button>
            </CardActions>
        </>
    )
}
