import { Routes, Route } from 'react-router-dom'
import AuthLayout from '../layout/AuthLayout'
import Login from '../components/auth/Login'
import CrmLayout from '../layout/CrmLayout'
import ProtectedRoute from './ProtectedRoute'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='auth' element={<AuthLayout />}>
                    <Route index element={<Login />}></Route>
                </Route>

                <Route path='/' element={<ProtectedRoute />
                }>
                    <Route path='/' element={<CrmLayout />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes