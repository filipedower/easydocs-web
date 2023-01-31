import { Route, Routes } from 'react-router-dom'
import { Home } from '../Home'
import { Login } from '../Login'
import { Users } from '../Users'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/users' element={<Users />} />
        </Routes>
    )
}

export default Router