import React from 'react';

export const Help = () => {
  return (
    <div className="container mt-5 pt-5 text-center">
        <div className="container mt-5 pt-5 text-center" >
      <div className="row g-4">
        {/* Contact for Support */}
        <div className="col-md-6 border-end">
          <div className="contact-div">
            <h4>Contact for Support</h4>

            <div className="ind-icon d-flex align-items-center justify-content-center my-2">
              <div className="icon-hw me-2">
                <img
                  alt="India flag"
                  width="30"
                  src="https://www.w3villa.com/production/assets/landing_page/india_icon-3-05772250ce156d671040d82e08c0ff256f8a08f6ef2b23bae1c4d97af2d386e9.png"
                />
              </div>
              <a href="tel:+919311800653">+91-931-415-9046</a>
            </div>

            <div className="usa-icon d-flex align-items-center justify-content-center">
              <div className="icon-hw me-2">
                <img
                  alt="USA flag"
                  width="30"
                  src="https://www.w3villa.com/production/assets/landing_page/america_icon-2-99f390dd23355d3e83ad8f24afbbafe0aa878b813a4507160f9b693f698956be.webp"
                />
              </div>
              <a href="tel:+13022612668">+1 (302) 261-2668</a>
            </div>
          </div>
        </div>

        {/* Email Us */}
        <div className="col-md-6 border-end">
          <div className="head-office">
            <h4>Email Us</h4>
            <a href="mailto:contact@w3villa.com">contact@Agriculture.com</a>
            <br />
            <a href="mailto:digital@w3villa.com">digital@Agriculture.com</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
