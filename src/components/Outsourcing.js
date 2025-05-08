import React from 'react';

function Outsourcing() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Outsourcing Solutions</h1>

      {/* 🚀 BPO Solutions */}
      <h2 className="mb-3">🚀 BPO Solutions</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Call Center & Help Desk Support</h5>
              <p className="card-text">
                Provide exceptional customer service with our professional call center and help desk support solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Back-Office & Data Processing</h5>
              <p className="card-text">
                Streamline your operations with our efficient back-office and data processing services.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Technical Support</h5>
              <p className="card-text">
                Ensure seamless technical assistance for your customers with our expert support team.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 🧠 Business Optimization */}
      <h2 className="mt-5 mb-3">🧠 Business Optimization</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">HR & Payroll Management</h5>
              <p className="card-text">
                Simplify your HR and payroll processes with our comprehensive management solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Workflow Automation & Efficiency Audits</h5>
              <p className="card-text">
                Optimize your business processes with our workflow automation and efficiency audit services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Outsourcing;