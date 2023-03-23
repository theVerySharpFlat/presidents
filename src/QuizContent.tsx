import { Button, CardActions, CardContent, FormControl, FormHelperText, Input, InputLabel, InputProps, MenuItem, OutlinedInput, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useState } from "react";
import { FormDataMistake } from "./FormData";

interface QuizContentProps {
    onMistake: (arg0: FormDataMistake) => void
};

export function QuizContent(props: QuizContentProps) {
    let [presidentNumber, setPresidentNumber] = useState(0);

    let [nameError, setNameError] = useState(false);
    let [nameErrorText, setNameErrorText] = useState("");

    let [inOfficeError, setInOfficeError] = useState(false);
    let [inOfficeErrorText, setInOfficeErrorText] = useState("");

    let [outOfficeError, setOutOfficeError] = useState(false);
    let [outOfficeErrorText, setOutOfficeErrorText] = useState("");

    let validateNameField = (value: string): boolean => {

        if (value.length > 0) {
            return ((value.match(/^([a-zA-Z]+)\s([a-zA-Z]+)$/mg)?.length == 1));

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
        if (value.length > 0) {
            // Must contain one space and no numbers
            const error = !validateNameField(value);
            setNameError(error);
            setNameErrorText(error ? "Please enter a valid name!" : "");
            console.log(value);
        } else {
            setNameError(false);
            setNameErrorText("");
        }
    }

    let onInOfficeFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value;
        if (value.length > 0) {
            // Must contain one space and no numbers
            const error = !validateDateField(value);
            setInOfficeError(error);
            setInOfficeErrorText(error ? "Please enter a valid date!" : "");
            console.log(value);
        } else {
            setInOfficeError(false);
            setInOfficeErrorText("");
        }
    }

    let onOutOfficeFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value;
        if (value.length > 0) {
            // Must contain one space and no numbers
            const error = !validateDateField(value);
            setOutOfficeError(error);
            setOutOfficeErrorText(error ? "Please enter a valid date!" : "");
            console.log(value);
        } else {
            setOutOfficeError(false);
            setOutOfficeErrorText("");
        }
    }

    const parties = [
        'No Party',
        'Democractic-Republican',
        'Whig',
        'Democratic',
        'Republican'
    ];

    let [selectedParty, setSelectedParty] = useState(parties[0]);
    const handlePartyChange = (event: SelectChangeEvent<string>) => {
        const {
            target: { value },
        } = event;
        setSelectedParty(
            value
        );
    };

    return (
        <>
            <CardContent sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <Typography variant="h4" sx={{ textAlign: "center" }}> Who was president #{presidentNumber + 1}? </Typography>
                <FormControl sx={{ my: 2 }}>
                    <InputLabel htmlFor="name-input">Name (First Last)</InputLabel>
                    <Input id="name-input" error={nameError} aria-describedby="name-description" onChange={e => onNameFieldChange(e)} />
                    <FormHelperText id="name-description" error={nameError}>{nameErrorText}</FormHelperText>
                </FormControl>
                <FormControl sx={{ my: 2 }}>
                    <InputLabel htmlFor="in-office-year-input">Year in office</InputLabel>
                    <Input id="in-office-year-input" error={inOfficeError} onChange={e => onInOfficeFieldChange(e)} aria-describedby="name-description" />
                    <FormHelperText id="in-office-year-description" error={inOfficeError}>{inOfficeErrorText}</FormHelperText>
                </FormControl>
                <FormControl sx={{ my: 2 }}>
                    <InputLabel htmlFor="out-of-office-year-input">Year out of office</InputLabel>
                    <Input id="out-of-office-year-input" error={outOfficeError} onChange={e => onOutOfficeFieldChange(e)} aria-describedby="name-description" />
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
                </FormControl>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button size="large" color="primary">
                    Submit
                </Button>
            </CardActions>
        </>
    )
}
