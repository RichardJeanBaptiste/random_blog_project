//import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useTheme }  from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography  from "@mui/material/Typography";



const Header = () => {

    const theme = useTheme();
    const styles = useStyles(theme);

    return(
        <Box sx={styles.header}>
            <Box style={styles.headerItems}>
                <Typography component="p" sx={{ marginLeft: '5%'}}>Home</Typography>
                <Typography component="p" sx={{ marginLeft: '7%'}}>About</Typography>
                <Box sx={{ marginTop: '1.5%', marginLeft: '10%'}}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Box> 
            </Box>
        </Box>
    )
}

// eslint-disable-next-line no-unused-vars
const useStyles = (theme) => ({
    header: {
        width: "99%",
        height: "7%",
        borderBottom: "1px solid lightgray",
        position:"absolute",
        top:0,
    },
    headerItems: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        width: '15%',
        marginLeft: '85%',
        marginTop: '.6%'
    }
})

export default Header;