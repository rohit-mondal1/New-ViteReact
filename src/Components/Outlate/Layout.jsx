import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
          <div></div>
          <div>
            <Outlet/>
          </div>
            <div>
                
            </div>
        </div>
    );
};

export default Layout;