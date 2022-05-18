import React, { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

import './scss/layout.scss'
import LoaderPage from '../../shared/loaderPage/LoaderPage'
import { UsageState } from 'webpack'


const Layout = ({ children }) => {

    const [openMenu, setOpenMenu] = useState(false)

    const [loader, setLoader] = UsageState(true)
    const [viewLoader, setviewLoader] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
            setTimeout(() => {
                setviewLoader(false)
            }, 1200);
        }, 10000);
    }, [])

    return (
        <>
            {
                viewLoader &&
                <div className={`cntLoader ${!loader ? 'close' : ''}`}>
                    <LoaderPage />
                </div>
            }
            <div className='layout'>
                <Header setOpenMenu={setOpenMenu} />
                <div className='constsidebar'>
                    <Sidebar setOpenMenu={setOpenMenu} openMenu={openMenu} />
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout
