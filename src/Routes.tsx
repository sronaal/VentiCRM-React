import { Routes, Route } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import Login from './components/auth/Login'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='auth' element={<AuthLayout />}>
                    <Route index element={<Login />}></Route>
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes