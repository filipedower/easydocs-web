import Router from '../../Routes'
import { Main } from './Wrapper.style'

const Container = (): JSX.Element => {
    return (
        <Main>
            <Router />
        </Main>
    )
}

export default Container