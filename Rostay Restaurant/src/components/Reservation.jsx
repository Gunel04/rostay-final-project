import React, { useRef, useState } from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import StaticLanguage from '../utils/StaticLanguage';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

const Reservation = () => {
  const personRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const formRef = useRef();
  const currentDate = new Date();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);


  const reservationSubmitEn = () => {
    if (user) {
      if (!personRef.current.value || !dateRef.current.value || !timeRef.current.value) {
        Swal.fire({
          icon: "warning",
          title: "Please, enter all information!"
        })
      }
      else if (new Date(dateRef.current.value) < currentDate) {
        Swal.fire({
          icon: "error",
          title: "Invalid date!"
        })
      }
      else {
        emailjs
          .sendForm('service_fyjctti', 'template_vgcknvf', formRef.current, {
            publicKey: 'A8Bcb8fUiHIXp_CJo',
          })
          .then(
            () => {
              Swal.fire({
                icon: "success",
                title: "Reservation process is completed successfully!"
              })
            },
            (error) => {
              Swal.fire({
                icon: "error",
                title: "Reservation process is failed!"
              })
            },
          );
      }
    }
    else {
      Swal.fire({
        icon: "warning",
        title: "Please sign in to your account!"
      })
    }

  }

  const reservationSubmitAz = () => {
    if (user) {
      if (!personRef.current.value || !dateRef.current.value || !timeRef.current.value) {
        Swal.fire({
          icon: "warning",
          title: "Zəhmət olmasa, bütün məlumatları daxil edin!"
        })
      }
      else if (new Date(dateRef.current.value) < currentDate) {
        Swal.fire({
          icon: "error",
          title: "Yanlış tarix!"
        })
      }
      else {
        emailjs
          .sendForm('service_fyjctti', 'template_vgcknvf', formRef.current, {
            publicKey: 'A8Bcb8fUiHIXp_CJo',
          })
          .then(
            () => {
              Swal.fire({
                icon: "success",
                title: "Rezervasiya prosesi uğurla tamamlandı!"
              })
            },
            (error) => {
              Swal.fire({
                icon: "error",
                title: "Rezervasiya prosesi uğursuz oldu!"
              })
            },
          );
      }
    }
    else {
      Swal.fire({
        icon: "warning",
        title: "Zəhmət olmasa, hesabınıza daxil olun!"
      })
    }

  }

  return (
    <>
      <main>
        <div className="reservation-top-part">
          <h1 data-aos="zoom-in" data-aos-duration="2000">
            <StaticLanguage en="Reservation" az="Rezervasİya" />
          </h1>
          <h6 data-aos="zoom-in" data-aos-duration="2000">
            <Link to='/'><StaticLanguage en="Home" az="Ana səhİfə" /></Link> &gt; <span><StaticLanguage en="Reservation" az="Rezervasİya" /></span>
          </h6>
        </div>
        <section className='reservation-section container-fluid d-flex justify-content-center align-items-center text-center'>
          <Col lg={8} md={7} sm={7}>
            <h5>
              <StaticLanguage en="Online Reservation" az="Onlayn Rezervasİya" />
            </h5>
            <h1>
              <StaticLanguage en="Book a table" az="Masa Sİfarİşİ" />

            </h1>
            <p><StaticLanguage en="Booking request" az="Rezervasiya üçün zəng edin: " /><span>+84 (800) 1433 555</span><StaticLanguage en=" or fill out the order form" az=" və ya sifariş formasını doldurun" /> </p>
            <form ref={formRef}>
              <select name="person" id="" ref={personRef}>
                <option value="1 Person">
                  <StaticLanguage en="1 Person" az="1 Nəfər" />
                </option>
                <option value="2 Person">
                  <StaticLanguage en="2 Person" az="2 Nəfər" />
                </option>
                <option value="3 Person">
                  <StaticLanguage en="3 Person" az="3 Nəfər" />
                </option>
                <option value="4 Person">
                  <StaticLanguage en="4 Person" az="4 Nəfər" />
                </option>
                <option value="5 Person">
                  <StaticLanguage en="5 Person" az="5 Nəfər" />
                </option>
                <option value="6 Person">
                  <StaticLanguage en="6 Person" az="6 Nəfər" />
                </option>
                <option value="7 Person">
                  <StaticLanguage en="7 Person" az="7 Nəfər" />
                </option>
                <option value="8 Person">
                  <StaticLanguage en="8 Person" az="8 Nəfər" />
                </option>
                <option value="9 Person">
                  <StaticLanguage en="9 Person" az="9 Nəfər" />
                </option>
                <option value="10 Person">
                  <StaticLanguage en="10 Person" az="10 Nəfər" />
                </option>
              </select>
              <input className='date-input' type="date" name="date" id="" format="dd-mm-yyyy" ref={dateRef} />
              <select name="time" id="" ref={timeRef}>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
              </select>
            </form>
            <StaticLanguage
              en={
                <button className='book-table-btn' type='button' onClick={() => { reservationSubmitEn() }}>Book a Table <HiOutlineArrowLongRight size={20} /></button>
              }

              az={
                <button className='book-table-btn' type='button' onClick={() => { reservationSubmitAz() }}>Masa Sİfarİş Et <HiOutlineArrowLongRight size={20} /></button>
              }

            />
          </Col>
        </section>
      </main>

    </>
  )
}

export default Reservation