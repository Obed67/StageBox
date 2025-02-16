
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Companies from "./pages/Companies";
import Jobs from "./pages/Jobs";
import Messages from "./pages/Messages";
import Login from "./pages/Login";

function App() {
     return (
          <Router>
               <div className="min-h-screen bg-gray-50 flex flex-col">
                    <Navbar />
                    <main className="container mx-auto px-4 py-8 flex-grow">
                         <Routes>
                              <Route path="/" element={<Home />} />
                              <Route path="/profile" element={<Profile />} />
                              <Route
                                   path="/companies"
                                   element={<Companies />}
                              />
                              <Route path="/jobs" element={<Jobs />} />
                              <Route path="/messages" element={<Messages />} />
                              <Route path="/login" element={<Login />} />
                         </Routes>
                    </main>
                    <Footer />
               </div>
          </Router>
     );
}

export default App;