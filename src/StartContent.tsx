import { Button, CardActions, CardContent, Typography } from "@mui/material";

interface StartContentProps {
    onStart: () => void;
};

export function StartContent(props: StartContentProps) {
    return (
        <>
            <CardContent sx={{ width: "100%", display: "flex", alignContent: 'center', flexDirection: "column", justifyContent: 'center', flexGrow: 1 }}>
                <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 2 }} color="text.primary">
                    Presidents Memorization Tool
                </Typography>

                <Typography sx={{ textAlign: "center" }} variant="subtitle1" color="text.secondary">
                    Learn the names, times in office, and political parties of all of the US presidents for APUSH
                </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button size="large" color="primary" onClick={props.onStart}>
                    Start
                </Button>
            </CardActions>
        </>
    )
}
