/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useTheme }  from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Modal from '@mui/material/Modal';

const Post = (props) => {

    const theme = useTheme();
    const styles = useStyles(theme);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Card variant='outlined'
                sx={{
                    height: '95%'
                }}
                onClick={handleOpen}
            >
                <CardContent>
                    <Typography>{`Title: ${props.title}`}</Typography>
                    <Typography>{`Body: ${props.body}`}</Typography>
                </CardContent>
            </Card>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles.modal}>
                    <Typography sx={{color: 'black'}}>{`Title: ${props.title}`}</Typography>
                    <Typography sx={{color: 'black'}}>{`Body: ${props.body}`}</Typography>
                </Box>
            </Modal>
        </Box>
    )
}

// eslint-disable-next-line no-unused-vars
const useStyles = (theme) => ({
    modal: {
        position: 'absolute',
        top: '52%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: '85%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }
});



export default Post;