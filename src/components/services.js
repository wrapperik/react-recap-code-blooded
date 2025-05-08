import React from 'react';
import Navbar from './navbar';

function Services() {
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Our Services</h1>
        <div className="accordion" id="servicesAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Virtual Staffing Solutions
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#servicesAccordion"
            >
              <div className="accordion-body">
                We provide highly skilled virtual staff to help you manage your business operations efficiently, saving you time and resources.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Admin Support
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#servicesAccordion"
            >
              <div className="accordion-body">
                Our admin support services include data entry, email management, scheduling, and other administrative tasks to keep your business running smoothly.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Sales & Lead Generation
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#servicesAccordion"
            >
              <div className="accordion-body">
                Boost your sales with our expert lead generation and sales support services, tailored to help you grow your customer base.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Accounting & Bookkeeping
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#servicesAccordion"
            >
              <div className="accordion-body">
                Our accounting and bookkeeping services ensure your financial records are accurate and up-to-date, helping you make informed decisions.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Social Media & Digital Marketing
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#servicesAccordion"
            >
              <div className="accordion-body">
                Enhance your online presence with our social media and digital marketing services, including content creation, ad campaigns, and analytics.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;