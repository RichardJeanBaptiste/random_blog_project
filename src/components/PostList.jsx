import { useEffect, useState } from "react";
import Box  from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme }  from '@mui/material/styles';
import Post from "./Post";
import '../App.css';

const PostList = () => {

    const theme = useTheme();
    const styles = useStyles(theme);

    const [posts, SetPosts] = useState([]);

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts";

        async function callUrl() {

            let response = await fetch(url).then((response) => {
                return response.json();
            })

           SetPosts(response);
        }
        callUrl();        
    },[]);

    return (
        <Box sx={styles.postList}>
            <Typography component="p">Latest Post</Typography>
            <Box sx={styles.postGrid}>
                {posts[0]?.title && <Post title={posts[0].title} body={posts[0].body}/>}
                {posts[1]?.title && <Post title={posts[1].title} body={posts[1].body}/>}
                {posts[2]?.title && <Post title={posts[2].title} body={posts[2].body}/>}
                {posts[3]?.title && <Post title={posts[3].title} body={posts[3].body}/>}
                {posts[4]?.title && <Post title={posts[4].title} body={posts[4].body}/>}
                {posts[5]?.title && <Post title={posts[5].title} body={posts[5].body}/>}
                {posts[6]?.title && <Post title={posts[6].title} body={posts[6].body}/>}
                {posts[7]?.title && <Post title={posts[7].title} body={posts[7].body}/>}
                {posts[8]?.title && <Post title={posts[8].title} body={posts[8].body}/>}
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
        height: '93%',
        marginLeft: '3%',
        marginTop: '2%'
    }
});

export default PostList;