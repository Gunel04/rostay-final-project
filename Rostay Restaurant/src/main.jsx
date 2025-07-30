import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
// bootstrap

import "./sass/header.scss";
import "./sass/firstslider.scss";
import "./sass/welcometorostay.scss";
import "./sass/timeofluxury.scss";
import "./sass/specialmenu.scss";
import "./sass/whychooseus.scss";
import "./sass/ourcrew.scss";
import "./sass/experience.scss";
import "./sass/testimonials.scss";
import "./sass/heropart.scss";
import "./sass/welcomesection.scss";
import "./sass/aboutevent.scss";
import "./sass/ourteam.scss";
import "./sass/login.scss";
import "./sass/contactus.scss";
import "./sass/reservation.scss";
import "./sass/shop.scss";
import "./sass/moredetails.scss";
import "./sass/footer.scss";
// slick-slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// slick-slider
import configureStore from './tools/store/configureStore';
import { addCategory, getCategory, getProduct } from './tools/actions/action';
import { Provider } from 'react-redux';
import supabase from './utils/supabase.js';

const myStore = configureStore();


const { data } = await supabase.from('rostay-category').select();
const {data:products} = await supabase.from('rostay-products').select();
myStore.dispatch(getCategory(data))
myStore.dispatch(getProduct(products));
// const getCategory = async () => {
//   data.map(item => (
//     myStore.dispatch(addCategory({ categoryName: item.categoryName }))
//   ))

// }

// getCategory();

// myStore.subscribe(() => {
//   console.log(myStore.getState());

// })

// myStore.dispatch(addCategory({ categoryName: "Main Dishes" }));
// // console.log(myStore.getState());


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </StrictMode>
)
