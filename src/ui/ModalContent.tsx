import styled from 'styled-components';

export const ModalContent = styled.section`
    background-color: rgb(1,21,33);
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 40%;

    .modal-content__text {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .close {
        color: #fff;
        float: right;
        font-size: 28px;
        font-weight: bold;
        margin: .5rem;
      }
      
      .close:hover,
      .close:focus {
        color: orange;
        text-decoration: none;
        cursor: pointer;
      }
    `;