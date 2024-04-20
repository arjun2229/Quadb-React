
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ShowListScreen from './screens/ShowListScreen';
import ShowSummaryScreen from './screens/ShowSummaryScreen';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<ShowListScreen/>} />
                <Route path="/show/:id" element={<ShowSummaryScreen/>} />
            </Routes>
        </Router>
    );
};

export default App;

