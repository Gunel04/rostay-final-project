import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
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
import "./sass/dashboard.scss";
import "./sass/cart.scss";
import "./sass/wishlist.scss";
import "./sass/faq.scss";
import "./sass/gallery.scss";
import "./sass/recommendations.scss";
import "./sass/blog.scss";
import "./sass/blogdetails.scss";
import "./sass/checkout.scss";
import "./sass/singleproduct.scss";
import "./sass/successfulcheckout.scss";
import "./sass/footer.scss";
import "./sass/mode.scss";
// slick-slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// slick-slider
import configureStore from './tools/store/configureStore';
import { addCategory, getBlog, getCategory, getProduct } from './tools/actions/action';
import { Provider } from 'react-redux';
import supabase from './utils/supabase.js';
import { CartProvider } from 'react-use-cart';
import { WishlistProvider } from 'react-use-wishlist';
import { LanguageProvider } from './context/LanguageContext.jsx';
import { CartTotalProvider } from './context/CartTotalContext.jsx';

const myStore = configureStore();


const { data } = await supabase.from('rostay-category').select();
const { data: products } = await supabase.from('rostay-products').select();
const { data: blogs } = await supabase.from('rostay-blog').select();
myStore.dispatch(getCategory(data))
myStore.dispatch(getProduct(products));
myStore.dispatch(getBlog(blogs));
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
  <LanguageProvider>
    <WishlistProvider>
      <CartProvider>
        <CartTotalProvider>
          <Provider store={myStore}>
            <App />
          </Provider>
        </CartTotalProvider>
      </CartProvider>
    </WishlistProvider>
  </LanguageProvider>
)
