//import React from 'react';
import { useTheme }  from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField  from "@mui/material/TextField";
import Typography  from "@mui/material/Typography";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton  from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';


const Header = () => {

    const theme = useTheme();
    const styles = useStyles(theme);

    return(
        <Box sx={styles.header}>
            <Box sx={styles.headerItems}>
                <Typography component="p" sx={styles.headerItem1}>Home</Typography>
                <Typography component="p" sx={styles.headerItem2}>About</Typography>
                <TextField id="filled-basic" label="Search" variant="filled" 
                    sx={styles.headerForm}
                    InputLabelProps={{
                        sx: {
                            top: ['-7px','-8px','-8px' ,'-4px','-3px'],
                            fontSize: ['12px','12px','14px', '17px', '14px'],
                        }
                    }}
                    InputProps={{
                        endAdornment: 
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                                >
                                    <SearchIcon/>
                                </IconButton>
                        </InputAdornment>
                    }}
                />
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
        width: '100%',
        //marginLeft: ['63%','80%','85%','88%','90%'],
        marginTop: '.6%'
    },
    headerForm: {
        borderRadius: '20px', 
        backgroundColor: 'white',
        width: ['35%', '35%', '18%','21%','20%'],
        height: '77%',
        marginTop: '-0.4%',
        marginLeft: '2%'
    },
    headerItem1: {
        marginLeft: ['37%','47%', '69%', '69%', '69%'], 
        marginTop: '.5%'
    },
    headerItem2: {
        marginLeft: ['3%','1%','1%','1%','1%'], 
        marginTop: '.5%'
    }
})

export default Header;