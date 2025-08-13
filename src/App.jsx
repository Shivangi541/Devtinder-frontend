
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";
import Feed from "./Feed";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
function App() {
  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename="/"> {/* all routing starts from here*/ }
        <Routes>
          <Route path="/" element={<Body />}>
              <Route path = "/" element = {<Feed />}/>
               <Route path = "/login" element = {<Login />}/>
               <Route path ="/profile" element = {<Profile />}/>
          </Route>

        
        </Routes>
        
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
