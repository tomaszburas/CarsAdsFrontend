import { ThemeProvider } from "styled-components";
import {ReactNode} from 'react';

const theme = {
    colors: {
        purple: '#48466D',
        blue: '#3D84A8',
        turquoise: '#46CDCF',
        green: '#ABEDD8',
        white: '#fff'
    },
};

type Props = {
    children: ReactNode;
};

export const Theme = ({ children }: Props) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
