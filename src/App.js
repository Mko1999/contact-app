import { Provider } from "react-redux";
import styles from "./styles/app.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./store";

import { NewContact, Content, EditProfile } from "./containers";
import ContactPage from "./containers/ContactPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Provider store={store}>
          <Routes>
            <Route exact path="/" element={<Content />} />
            <Route path="/add" element={<NewContact />} />
            <Route path="/contact/:id" element={<ContactPage />} />
            <Route path="/edit" element={<EditProfile />} />
          </Routes>
        </Provider>
      </div>
    </BrowserRouter>
  );
};

export default App;
