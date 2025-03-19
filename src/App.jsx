import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";
function App() {
  const [modalIsVisible, setModalVisible] = useState(true);
  const hideModalHandler = () => {
    setModalVisible(true);
  };
  const changeModalVisible = () => {
    setModalVisible(false);
  };
  return (
    <>
      <MainHeader onCreatePost={hideModalHandler} />
      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={changeModalVisible}
        />
      </main>
    </>
  );
}

export default App;
