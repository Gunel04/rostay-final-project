import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "./sass/header.scss";
import "./sass/firstslider.scss";
import "./sass/welcometorostay.scss";
import "./sass/timeofluxury.scss";
import "./sass/specialmenu.scss";
import "./sass/whychooseus.scss";
import "./sass/ourcrew.scss";
import "./sass/experience.scss";
import "./sass/testimonials.scss";
import "./sass/footer.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
