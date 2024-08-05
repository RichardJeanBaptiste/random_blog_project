import { useEffect } from "react";
import '../App.css';

const PostList = () => {
    
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts";

        async function callUrl() {

            let response = await fetch(url).then((response) => {
                return response.json();
            })

            console.log(response);
        }

        callUrl();        
    },[]);

    return (
        <div className="postList">
            <p>Latest Post</p>
            <div className="postGrid">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
            </div>
        </div>
    )
}

export default PostList;