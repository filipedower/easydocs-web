import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components';

import GlobalStyles from '../../styles/Global.style';
import Wrapper from './components/Wrapper/Wrapper';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    max-height: 100vh;
`;

const App = (): JSX.Element => (
    <Router>
        <Container>
            <GlobalStyles />
            <Wrapper />
        </Container>
    </Router>
)

export default App