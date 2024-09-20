import { Routes, Route } from "react-router-dom";

import Room from "./pages/room/Room";
import Main from "./pages/main/Main";
import NotFound from "./pages/not-found/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/room/:id" element={<Room />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
