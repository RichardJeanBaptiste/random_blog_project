import { useContext, useState } from "react";
import { PostContext } from "../PostContext";
import Box  from "@mui/material/Box";
import Button  from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme }  from '@mui/material/styles';
import Post from "./Post";
import '../App.css';

const PostList = () => {

    const theme = useTheme();
    const styles = useStyles(theme);

    const POSTS_PER_PAGE = 9;
    const { posts } = useContext(PostContext);
    

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

    const handleClick = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleInputChange = (event) => {
        const newPage = parseInt(event.target.value, 10);
        if (newPage >= 1 && newPage <= totalPages) {
          setCurrentPage(newPage);
        }
    };

    const handlePageInput = (e) => {
        if(e.key === 'Enter'){
            const newPage = parseInt(e.target.value, 10);
            if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            }

            e.target.value = "";
        }
        
    }
    

    return (
        <Box sx={styles.postList}>
            <Typography component="p">Latest Post</Typography>
            <Box sx={styles.pagination}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={styles.button}
                        onClick={() => handleClick(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </Button>
                    <Box 
                        component="input" 
                        type="number" 
                        min={1}
                        max={totalPages}
                        placeholder={currentPage}
                        onKeyDown={handlePageInput}
                        onChange={handleInputChange}
                        sx={{ width : '4%' }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        sx={styles.button}
                        onClick={() => handleClick(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </Button>
            </Box>
            <Box sx={styles.postGrid}>
                {currentPosts.map((post, index) => (
                    <Post key={index} title={post.title} body={post.body}/>
                ))}
            </Box>
        </Box>
    )
}

// eslint-disable-next-line no-unused-vars
const useStyles = (theme) => ({
    postList: {
        position: 'absolute',
        top: '10%',
        left: '0.5%',
        width: '97.5%',
        height: '85%'
    },
    postGrid: {
        display: 'grid',
        gridTemplateColumns: ['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)'],
        gridTemplateRows: ['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)'],
        gap: '10px',
        width: '96%',
        height: '100%',
        marginLeft: '3%',
        marginTop: '2%'
    },
    pageContainer: {
        position: 'relative',
        marginTop: ['1%','69%','1%','1%' ,'1%'], 
        height: '5%', 
        width: '100%', 
    },
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
        width: '100%',
    },
    button: {
        margin: '0 5px',
    },
});

export default PostList;