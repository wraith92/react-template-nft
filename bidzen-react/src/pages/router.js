import Home01 from "./Home01";
import Home02 from "./Home02";
import Explore01 from './Explore01'
import Explore02 from './Explore02'
import Creator from './Creator'
import Item from './Item'
import ItemDetails from './ItemDetails'
import Blog from './Blog'
import BlogDetails from './BlogDetails'
import Authors from './Authors'
import ConnectWallet from './ConnectWallet'
import CreateItem from './CreateItem'
import Login from './Login'
import Register from './Register'
import Contact from './Contact'

const routes = [
    { path: '/', component: <Home01 />},
    { path: '/home-02', component: <Home02 />},
    { path: '/explore-01', component: <Explore01 />},
    { path: '/explore-02', component: <Explore02 />},
    { path: '/creator', component: <Creator />},
    { path: '/item', component: <Item />},
    { path: '/item-details', component: <ItemDetails />},
    { path: '/blog', component: <Blog />},
    { path: '/blog-details', component: <BlogDetails />},
    { path: '/authors', component: <Authors />},
    { path: '/connect-wallet', component: <ConnectWallet />},
    { path: '/create-item', component: <CreateItem />},
    { path: '/login', component: <Login />},
    { path: '/register', component: <Register />},
    { path: '/contact', component: <Contact />}
]

export default routes;