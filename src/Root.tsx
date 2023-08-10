import './App.scss'
import { Outlet } from 'react-router-dom'
import NavBar from './Shared/NavBar'

export default function Root() {
    return (
        <div className='bg-slate-300'>
            <NavBar></NavBar>
            <div className='container mx-auto pt-24 pb-4 h-screen'>
                <Outlet />
            </div>
        </div>
    )
}
