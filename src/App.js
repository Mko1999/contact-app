import { Provider } from "react-redux";
import styles from "./styles/app.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { NewContact, Content, EditProfile,DeleteConfirm } from "./containers";
import ContactPage from "./containers/ContactPage";

import { store, persistor } from "./store";
const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes>
              <Route exact path="/" element={<Content />} />
              <Route path="/add" element={<NewContact />} />
              <Route path="/contact/:id" element={<ContactPage />} />
              <Route path="contact/:id/edit" element={<EditProfile />} />
              <Route path = "delete" element = {<DeleteConfirm/>}/>
            </Routes>
          </PersistGate>
        </Provider>
      </div>
    </BrowserRouter>
  );
};

export default App;
