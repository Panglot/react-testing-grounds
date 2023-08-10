import { Link } from 'react-router-dom'
import logo from './../logo.svg'

export default function NavBar() {
    return (
        <nav className='fixed w-full bg-slate-900 h-20'>
            <div className='flex w-full container mx-auto py-4  h-20'>
                <img
                    src={logo}
                    className='App-logo max-h-20 -ml-4'
                    alt='logo'
                />
                <Link to='/' className='text-white p-2 border-r-2 leading-8'>
                    Home
                </Link>
                <Link to='mosh' className='text-white p-2 border-r-2 leading-8'>
                    Mosh
                </Link>
                <Link to='personal-experiments' className='text-white p-2 leading-8'>
                    Experiments
                </Link>
            </div>
        </nav>
    )
}
