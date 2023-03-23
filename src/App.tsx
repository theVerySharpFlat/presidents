import { Box } from '@mui/material'
import './App.css'
import { CenterCard } from './CenterCard'

function App() {

    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <CenterCard></CenterCard>
            </Box>
        </>
    )
}

export default App
