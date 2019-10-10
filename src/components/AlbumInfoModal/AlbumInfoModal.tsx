import React, { useEffect } from "react";
import Axios from 'axios';
import { ModalBackground } from "../../ui/ModalBackground";
import { ModalContent } from "../../ui/ModalContent";

interface Props {
    modalClose: void;
    currentAlbumInfo: {
        artist: string;
        album: string;
    };
}

export function AlbumInfoModal({ modalClose, currentAlbumInfo }: Props) {
    async function fetchAlbumData() {
        const { data } = await Axios.get(`https://itunes.apple.com/search?term=${currentAlbumInfo.album}&entity=album`);
        data.results.map((result) => {
            if (result.artistName.toUpperCase() === currentAlbumInfo.artist.toUpperCase()
            && result.collectionName.toUpperCase() === currentAlbumInfo.album.toUpperCase()) {
                console.log(result);
            }
        });
    }
    useEffect(() => {        
        fetchAlbumData();
    });
    return (
        <ModalBackground>
            <ModalContent>
                <span className="close" onClick={modalClose}>&times;</span>
                <div className="modal-content__text">
                    <p>{currentAlbumInfo.artist}</p>
                    <p>{currentAlbumInfo.album}</p>
                </div>
            </ModalContent>

        </ModalBackground>
    );
}
