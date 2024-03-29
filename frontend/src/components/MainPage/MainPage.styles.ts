import styled from "@emotion/styled";
import CircularProgress from "@mui/material/CircularProgress";


export const MainPageWitchesDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const MainPageTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

export const WitchListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;


export const LoadingProgress = styled(CircularProgress)`
  margin: 0.5rem;
`