import BaseUrl from '../utils/baseUrl.js';
import Story from '../components/Story.js';
import view from '../utils/view.js';
import store from '../store.js';
import checkFavorite from '../utils/checkFavorite.js';

export default async function Stories(path) {
    const { favorites } = store.getState();
    const stories = await getStories(path);
    const hasStories = stories.length > 0;
                      
    view.innerHTML = `<div>
      ${hasStories ? stories.map((story, i) => Story({ ...story, index: i + 1, isFavorite: 
      checkFavorite(favorites, story) })).join('') : 'No stories'}
    </div>`;  

    document.querySelectorAll(".favorite").forEach(favoriteButton => {
      favoriteButton.addEventListener('click', async function() {
        const story = JSON.parse(this.dataset.story);  
        const isFavorited = checkFavorite(favorites, story);
          store.dispatch({ type: isFavorited ? "REMOVE_FAVORITE" : "ADD_FAVORITE", payload: { favorite: story } })
        await Stories(path);
      });
    });
  }
  
  async function getStories(path) {
    const isHomeRoute = path === '/';
    const isNewRoute = path === '/New';
    const isAskRoute = path === `/Ask`;
    const isShowRoute = path === `/Show`;
    

    if (isHomeRoute) {
      path = '/news';  
    } else if (isNewRoute) {
      path = '/newest';  
    } else if (isAskRoute) {
      path = '/ask';  
    } else if (isShowRoute) {
      path = '/show'
    }

    const response = await fetch(`${BaseUrl}${path}`);
    const stories = await response.json();
    return stories;
  }
