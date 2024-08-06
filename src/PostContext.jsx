import { createContext , useEffect, useState } from "react";

const PostContext = createContext();

// eslint-disable-next-line react/prop-types
const PostProvider = ({ children }) => {

    const [posts, SetPosts] = useState([]);

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts";

        async function callUrl() {

            let response = await fetch(url).then((response) => {
                return response.json();
            })

           SetPosts(response.reverse());
        }

        try {
            callUrl();  
        } catch (error) {
            SetPosts([]);
        }

    },[]);


    return (
        <PostContext.Provider value={{ posts , SetPosts}}> 
            {children}
        </PostContext.Provider>
    )
}

export { PostContext, PostProvider};