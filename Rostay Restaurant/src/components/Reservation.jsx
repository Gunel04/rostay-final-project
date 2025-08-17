import React, { useRef, useState } from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const Reservation = () => {
  const personRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const formRef = useRef();
  const currentDate = new Date();

  const reservationSubmit = () => {
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

  return (
    <>
      <main>
        <div className="reservation-top-part">
          <h1 data-aos="zoom-in" data-aos-duration="2000">Reservation</h1>
          <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'>Home</Link> &gt; <span>Reservation</span> </h6>
        </div>
        <section className='reservation-section container-fluid d-flex justify-content-center align-items-center text-center'>
          <Col lg={8} md={7} sm={7}>
            <h5>Online Reservation</h5>
            <h1>Book a table</h1>
            <p>Booking request <span>+84 (800) 1433 555</span> or fill out the order form</p>
            <form ref={formRef}>
              <select name="person" id="" ref={personRef}>
                <option value="1 Person">1 Person</option>
                <option value="2 Person">2 Person</option>
                <option value="3 Person">3 Person</option>
                <option value="4 Person">4 Person</option>
                <option value="5 Person">5 Person</option>
                <option value="6 Person">6 Person</option>
                <option value="7 Person">7 Person</option>
                <option value="8 Person">8 Person</option>
                <option value="9 Person">9 Person</option>
                <option value="10 Person">10 Person</option>
              </select>
              <input type="date" name="date" id="" format="dd-mm-yyyy" ref={dateRef} />
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
            <button type='button' onClick={() => { reservationSubmit() }}>Book a Table</button>
          </Col>
        </section>
      </main>

    </>
  )
}

export default Reservation