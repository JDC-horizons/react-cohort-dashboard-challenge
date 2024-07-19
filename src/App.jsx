import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import MainPage from "./Components/MainPage";
import PostContext from "./Components/PostContext";
import FullSinglePost from "./Components/FullSInglePost";
import Profile from "./Components/Profile";

function App() {
  let [postData, setPostData] = useState([]);
  let [peopleData, setPeopleData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [focusPost, setFocusPost] = useState(null);
  let [loggedInUser, setLoggedInUser] = useState({
    firstName: "Joe",
    lastName: "Bloggs",
  });
  let [newPosts, setNewPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const responsePosts = await fetch(
          "https://boolean-uk-api-server.fly.dev/JDC-horizons/post"
        );
        let postsApi = await responsePosts.json();
        setPostData(postsApi.reverse());
        const responsePeople = await fetch(
          "https://boolean-uk-api-server.fly.dev/JDC-horizons/contact"
        );
        const peopleApi = await responsePeople.json();
        setPeopleData(peopleApi);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [newPosts]);

  return (
    <div id="full-page">
      <PostContext.Provider
        value={{
          loggedInUser,
          setLoggedInUser,
          postData,
          setPostData,
          peopleData,
          setPeopleData,
          loading,
          focusPost,
          setFocusPost,
          newPosts,
          setNewPosts,
        }}
      >
        <BrowserRouter>
          <Header />
          <Sidebar />
          {/* <MainPage /> */}
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path={"/post"} element={<FullSinglePost />} />
            <Route path={"/profile"} element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </PostContext.Provider>
    </div>
  );
}

export default App;
