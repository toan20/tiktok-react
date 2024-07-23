import Home from '../pages/Home/';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
import Search from '../pages/Search';
const publicRoutes = [
    { path: '/', Component: Home },
    { path: '/following', Component: Following },
    { path: '/upload', Component: Upload, layout: null },
    { path: '/search', Component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
