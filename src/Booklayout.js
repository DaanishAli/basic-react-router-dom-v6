import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Booklayout = () => {
    return (
        <div>
            <Link to="1"> book1</Link>
            <br />
            <Link to="2"> book2</Link>
            <br />
            <Link to="new"> new book</Link>
            <Outlet />
        </div>
    )
}

export default Booklayout