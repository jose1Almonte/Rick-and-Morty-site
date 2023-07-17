import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './index.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage.jsx';
import Layout from './Layout/Layout.jsx';
import { HOME_URL } from './constants/urls.js';
import { CharacterDetailPage } from './pages/CharacterDetailPage/CharacterDetailPage';

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <BrowserRouter>
    <Routes>

        <Route element={<Layout />}>
            <Route path={HOME_URL} element={<HomePage/>}/>
            <Route path={"/characters/:characterId"} element={<CharacterDetailPage/>}/>
        </Route>
            <Route path={"/*"} element={<h1>NOT FOUND</h1>}/>

        {/* <App /> */}
    </Routes>
    </BrowserRouter>

</React.StrictMode>
)
