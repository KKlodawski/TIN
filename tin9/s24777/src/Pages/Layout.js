import {Link} from "react-router-dom";


function Layout() {
    return (
      <nav>
          <ul>
              <li>
                  <Link to="/">Home</Link>
              </li>
          </ul>
      </nav>
    );
}

export default Layout;