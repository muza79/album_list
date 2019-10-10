import React from 'react';
import './App.scss';
import { AlbumList } from './components/AlbumList/AlbumList';

export function App() {
    return (
        <div className="app">
            <div className="app__grid">
                <AlbumList />
            </div>
        </div>
   );
}
