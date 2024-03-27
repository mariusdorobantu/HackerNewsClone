import Item from './pages/item.js';
import Stories from '../HackerNewsClone/pages/stories.js';
import Favorites from './pages/favorites.js';

const router = new Navigo(null, true, '#');
console.log(router);

export default class RouterHandler {
    constructor() {
        this.createRoutes()
    }

    createRoutes() {
        const routes = [ 
            { path: '/New', page: Stories  },
            { path: '/Past', page: Stories  },
            { path: '/Comments', page: Stories  },
            { path: '/Ask', page: Stories  },
            { path: '/Show', page: Stories  },
            { path: '/Jobs', page: Stories  },
            { path: '/Submit', page: Stories  },
            { path: '/Login', page: Stories  },
            { path: '/item', page: Item },
            { path: '/Favorites', page: Favorites}
        ];

        routes.forEach(({path, page}) => {
            router.on(path, () => {
                page(path);
            }).resolve();
        })
    }
}