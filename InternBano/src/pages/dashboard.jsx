import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
    return (
        <div>
            dashboard
            <Outlet/>
        </div>
    )
}

export default Dashboard
