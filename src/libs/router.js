import Navigo from 'navigo';

import * as home from "../pages/home/home"
import * as explore from "../pages/explore/explore"
import * as newReleases from "../pages/new-releases/new-releases"
import * as loginPage from "../pages/login/login"
import * as registerPage from "../pages/register/register"
import * as playlistDetail from "../pages/playlist/playlist"
import * as albumsDetail from "../pages/albums/albums"
import * as moodsPage from "../pages/moods/moods"

export const router = new Navigo('/');

router.on('/', home.init);

router.on('/explore', explore.init);

router.on('/new-releases', newReleases.init);

router.on('/login', loginPage.renderLogin);

router.on('/register', registerPage.renderRegister);

router.on('/playlists/details/:slug', playlistDetail.init);

router.on('/albums/details/:slug', albumsDetail.init);

router.on('/moods/:slug', moodsPage.init);

router.on('*', () => {
    console.log("page not found")
});