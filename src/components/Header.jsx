import { useState } from 'react';
import { useTheme }  from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField  from "@mui/material/TextField";
import Typography  from "@mui/material/Typography";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton  from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';



const Header = () => {

    const theme = useTheme();
    const styles = useStyles(theme);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [formItems, SetFormItems] = useState({
        userId: '',
        title: '',
        body: ''
    });

    const clearForm = () => {
        SetFormItems({
            userId: '',
            title: '',
            body: ''
        });
    }

    const handleAddForm = (e) => {
        e.preventDefault();
        console.log(`User Id: ${formItems.userId} - Title: ${formItems.title} - Body: ${formItems.body}`);
    }

    return(
        <Box sx={styles.header}>
            <Box sx={styles.headerItems}>
                <Typography component="p" sx={styles.headerItem1}>Home</Typography>
                <Typography component="p" sx={styles.headerItem2} onClick={handleOpen}>Add Post</Typography>
                <TextField id="filled-basic" label="Search" variant="filled" 
                    sx={styles.headerForm}
                    InputLabelProps={{
                        sx: {
                            top: ['-7px','-8px','-7px' ,'-4px','-3px'],
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

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles.modal}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" textAlign='center'>
                        Add Post
                    </Typography>
                    <Box 
                        component="form" 
                        method="POST" 
                        action="#" 
                        onSubmit={handleAddForm}
                        sx={styles.modalForm}
                    >
                        <TextField id="userID" label="User ID" variant='outlined' sx={styles.modalItem} value={formItems.userId}
                            onChange={(e) => {
                                SetFormItems({
                                    ...formItems,
                                    userId: e.target.value,
                                })
                            }}
                        />
                        <TextField id="title" label="Title" variant="outlined" sx={styles.modalItem} value={formItems.title}
                            onChange={(e) => {
                                SetFormItems({
                                    ...formItems,
                                    title: e.target.value
                                })
                            }}
                        />
                        <TextField id="body" label="Body" variant="outlined" multiline rows={5} sx={styles.modalItem} value={formItems.body}
                            onChange={(e) => {
                                SetFormItems({
                                    ...formItems,
                                    body: e.target.value
                                })
                            }}
                        />
                        <Box sx={[styles.modalItem, styles.modalItem2]}>
                            <Button variant="outlined" type="button" onClick={clearForm}>Clear</Button>
                            <Button variant="outlined" type="submit" sx={{marginLeft: '2%'}}>Submit</Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
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
        marginLeft: ['23%','46%', '68%', '68%', '68%'], 
        marginTop: '.5%'
    },
    headerItem2: {
        marginLeft: ['3%','1%','1%','1%','1%'], 
        marginTop: '.5%'
    },
    modal: {
        position: 'absolute',
        top: '52%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: ['60%','44%',400, 400, 400],
        height: ['80%','82%','80%','85%','85%'],
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        color: 'black'
    },
    modalForm: {
        display: 'flex',
        flexDirection: 'column'
    },
    modalItem: {
        marginTop: '2%'
    },
    modalItem2: {
        display: 'flex',
        flexDirection: 'row',
    }
})

export default Header;