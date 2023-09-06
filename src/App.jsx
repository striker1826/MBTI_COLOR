import AddColorPage from "pages/AddNewColorPage";
import HomePage from "pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="addColor" element={<AddColorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
