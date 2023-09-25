import { Outlet, Link, useParams } from "react-router-dom";
import "./style.css"

const Layout = () => {
    const ne = useParams("")
    console.log(ne);
    return (
        <>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                        <ul>
                            <li>
                                <Link to="/blogs/newInfo" > new info</Link>
                            </li>
                            <li>
                                <Link to="/blogs/info" >info</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
