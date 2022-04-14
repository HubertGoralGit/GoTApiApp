import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Characters from './Characters';
import House from "./House";

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Characters />} />
                    <Route path="/house/:id" element={<House />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;