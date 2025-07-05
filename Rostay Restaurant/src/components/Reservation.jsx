import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Reservation = () => {
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
            <form action="">
              <select name="" id="">
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
              <input type="date" name="" id="" format="dd-mm-yyyy" />
              <select name="" id="">
                <option value="07:00 PM">07:00 PM</option>
                <option value="08:00 PM">08:00 PM</option>
                <option value="09:00 PM">09:00 PM</option>
                <option value="10:00 PM">10:00 PM</option>
                <option value="11:00 PM">11:00 PM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="13:00 PM">13:00 PM</option>
                <option value="14:00 PM">14:00 PM</option>
              </select>
            </form>
            <button>Book a Table</button>
          </Col>
        </section>
      </main>

    </>
  )
}

export default Reservation