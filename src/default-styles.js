import * as React from 'react';
import styled from "styled-components";
import {createTheme} from '@mui/material/styles';

export const PageWrapper = styled.section`
  width: 86%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 10px;

  @media (max-width: 1024px) {
    width: 97%;
    padding: 0;
  }
`;

export const theme = createTheme({
    palette: {
        primary: {
            main: "#1f224433",
        },
        secondary: {
            main: "#119383",
        },
    },
});
