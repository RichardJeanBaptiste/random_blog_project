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
import { useContext } from "react";
import { PostContext } from "../PostContext";



const Header = () => {

    const theme = useTheme();
    const styles = useStyles(theme);

    // eslint-disable-next-line no-unused-vars
    const { posts, SetPosts } = useContext(PostContext);

    // Open Post Modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Open Seach Modal
    const [openSearch, setOpenSearch] = useState(false);
    const handleOpenSearch = () => setOpenSearch(true);
    const handleCloseSearch = () => {
        setOpenSearch(false);
    };

    // Search Response Modal
    const [openSearchResult, SetOpenSearchResult] = useState(false);
    const handleOpenSearchResult = () => SetOpenSearchResult(true);
    const handleCloseSearchResult = () => {
        SetOpenSearchResult(false);
    }
    const [searchTitle, SetSearchTitle] = useState("");
    const [searchBody, SetSearchBody] = useState(""); 

    // Post Form Body
    const [formItems, SetFormItems] = useState({
        userId: '',
        title: '',
        body: ''
    });

    const [search, SetSearch] = useState("");

    const clearForm = () => {
        SetFormItems({
            userId: '',
            title: '',
            body: ''
        });
    }

    const handleAddForm = (e) => {
        e.preventDefault();
    
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: formItems.title,
              body: formItems.body,
              userId: formItems.userId,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => {
                let temp = [...posts];
                temp.unshift(json);
                SetPosts(temp);
            });
    }

    const SearchPost = (e) => {
        if(e.key === 'Enter'){
            handleOpenSearch();
        }
    }

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    const OpenSearchResult = (title, body) => {
        handleCloseSearch();
        SetSearchTitle(title);
        SetSearchBody(body);
        handleOpenSearchResult();
    }

    return(
        <Box sx={styles.header}>
            <Box sx={styles.headerItems}>
                <Typography component="p" sx={styles.headerItem2} onClick={handleOpen}>Add Post</Typography>
                <TextField id="filled-basic" label="Search" variant="standard" 
                    sx={styles.headerForm}
                    onKeyDown={SearchPost}
                    onChange={(e) => {
                        SetSearch(e.target.value);
                    }}
                    InputLabelProps={{
                        sx: {
                            top: ['-7px','-8px','-7px' ,'-4px','-3px'],
                            fontSize: ['12px','12px','14px', '17px', '14px'],
                        }
                    }}
                    InputProps={{
                        endAdornment: 
                            <InputAdornment position="end" sx={{
                                marginTop:["-13%","-9%","-7%","-2%","-2%"],
                                marginLeft: ["-20%","-17%","-10%","-10%","-10%"]
                            }}>
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
            
            {/*** Add Form Modal */}
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

            {/** Search Modal */}
            <Modal
                open={openSearch}
                onClose={handleCloseSearch}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles.modal2}>
                    {filteredPosts.map((x, index) => {
                        return (
                            <Box component="div" key={index} sx={{ paddingBottom: '2%'}}>
                                <Typography sx={{ cursor: 'pointer'}} onClick={() => OpenSearchResult(x.title, x.body)}>Title: <Box component="span" sx={{ textDecoration: 'underline'}}>{x.title}</Box></Typography>
                            </Box>
                        )
                    })}
                </Box>
            </Modal>
            

            {/** Open Search Results Modal */}
            <Modal
                open={openSearchResult}
                onClose={handleCloseSearchResult}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles.modal}>
                    <Typography component="p" sx={{ marginTop: '2%'}} >{searchTitle}</Typography>
                    <Typography component="p" sx={{ marginTop: '2%'}} >{searchBody}</Typography>
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
        borderRadius: '2px', 
        backgroundColor: 'white',
        width: ['55%', '35%', '40%','39%','20%'],
        height: '100%',
        marginTop: '-0.4%',
        marginLeft: '2%'
    },
    headerItem1: {
        marginLeft: ['23%','46%', '68%', '68%', '68%'], 
        marginTop: '.5%'
    },
    headerItem2: {
        marginLeft: ['24%','49%','49%','53%','67%'], 
        marginTop: '.5%',
        cursor: 'pointer'
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
    modal2: {
        position: 'absolute',
        top: '52%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: ['60%','44%',400, 400, 400],
        height: ['75%','75%','75%','80%','80%'],
        overflowY: 'scroll',
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