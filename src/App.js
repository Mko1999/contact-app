import styles from "./styles/app.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Main, New, ContactPage, Edit } from "./containers/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/add" element={<New />} />
          <Route path="/contact/:id" element={<ContactPage />} />
          <Route path="contact/:id/edit" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
