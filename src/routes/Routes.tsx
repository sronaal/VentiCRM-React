import { Routes, Route } from 'react-router-dom'
import AuthLayout from '../layout/AuthLayout'
import Login from '../components/auth/Login'
import CrmLayout from '../layout/CrmLayout'
import ProtectedRoute from './ProtectedRoute'
import Clientes from '../pages/crm/Clientes'
import Oportunidades from '../pages/crm/Oportunidades'
import Dashboard from '../pages/crm/Dashboard'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='auth' element={<AuthLayout />}>
                    <Route index element={<Login />}></Route>
                </Route>

                <Route path='/' element={<ProtectedRoute />}>
                    <Route path='/' element={<CrmLayout />}>
                        <Route path='/' element={<Dashboard/>}></Route>
                        <Route path='clientes' element={<Clientes />}></Route>
                        <Route path='oportunidades' element={<Oportunidades/>}></Route>
                    </Route>

                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes