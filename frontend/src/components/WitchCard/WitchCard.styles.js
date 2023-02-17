import styled from "@emotion/styled";

export const WitchCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: 3rem;
  margin-top: 1rem;
  width: 20rem;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 15px;
  height: 23rem;
  overflow: hidden;

  .image-div-card {
    display: block;
    width: 100%;

    object-fit: contain;
  }

  .witch-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 19rem;
  }

  .witch-img {
    width: 100%;
    height: 90%;
    border-start-end-radius: 15px;
    border-start-start-radius: 15px;
    transition: transform 0.7s;
  }

  &:hover {
    cursor: pointer;
    .witch-img {
      transform: scale(1.2);
    }
  }

  @media only screen and (max-width: 900px) {
    margin-inline: 10px;
    &:hover {
      transform: scale(1);
    }
  }
`;
