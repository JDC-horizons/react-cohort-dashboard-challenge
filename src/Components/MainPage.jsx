import UserControls from "./UserControls";
import Posts from "./Posts";
import PostContext from "./PostContext";
import { useContext } from "react";

function MainPage() {
  const { loading } = useContext(PostContext);
  return (
    <main id="page-main-area">
      <UserControls />
      {loading ? <p>Loading...</p> : <Posts />}
    </main>
  );
}

export default MainPage;
