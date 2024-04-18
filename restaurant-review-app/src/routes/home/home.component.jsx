import './home.styles.scss';
import { Outlet } from 'react-router-dom';
import SearchBar from '../../components/searchbar/searchbar.component';
import Filter from '../../components/filter/filter.component';
import TopRestaurants from '../../components/top-restaurants/top-restaurants.component';

const Home = ()=> {
    return(
        <div>
            <Outlet/>
            <SearchBar/>
            <Filter/>
            <TopRestaurants/>
            <h2>My reviews shown only when the user is logged in</h2>
    </div>
    )

}

export default Home;