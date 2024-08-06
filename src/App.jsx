import Header from './components/Header';
import PostList from './components/PostList';
import { PostProvider } from './PostContext';
import './App.css'

function App() {
  return (
    <>
      <PostProvider>
        <Header/>
        <PostList/>
      </PostProvider>
    </>
  )
}

export default App
