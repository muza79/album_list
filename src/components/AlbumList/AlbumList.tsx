import React, { useState } from 'react';
import './AlbumList.scss';
import { AlbumEdge } from '../AlbumEdge/AlbumEdge';
import { albumList } from '../../../album-list';
import { AlbumInfoModal } from '../AlbumInfoModal/AlbumInfoModal';

export function AlbumList() {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentAlbumInfo, setCurrentAlbumInfo] = useState(undefined);
    
    function handleModalDisplay(album: string, artist: string) {
        setModalOpen(!modalOpen);
        setCurrentAlbumInfo({
            album,
            artist,
        });
    }
    return (
        <section className="album-list">
            {modalOpen
            ? (
                <AlbumInfoModal
                    modalClose={handleModalDisplay}
                    currentAlbumInfo={currentAlbumInfo}
                />
            ) : null
        }
            {albumList.map((album, index) => (
                <AlbumEdge key={index} id={album.album} onClick={() => handleModalDisplay(album.album, album.artist)}>
                    <p>{album.artist}</p>
                    <p>{album.album}</p>
                </AlbumEdge>
            ))}
        </section>
    );
}
