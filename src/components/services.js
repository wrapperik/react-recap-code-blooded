import React from 'react';
import Navbar from './navbar';
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';
import './styles/services.css';

function Services() {
  const [showModal, setShowModal] = React.useState(false);
  const [modalContent, setModalContent] = React.useState('');

  const handleShowModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
  
      <div className="services-container">
        <h1>Our Services</h1>
        <Accordion defaultActiveKey="0" style={{ width: '80%', margin: '0 auto' }}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Virtual Staffing Solutions</Accordion.Header>
            <Accordion.Body>
              <p
                onClick={() =>
                  handleShowModal(
                    'We provide skilled remote professionals who seamlessly integrate into your business operations.'
                  )
                }
              >
                We provide skilled remote professionals who seamlessly integrate into your business operations.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Virtual Customer Support & Live Chat</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li
                  onClick={() =>
                    handleShowModal(`
                    - Email-based Ticketing System: Managing customer queries and issues through an email-based system where tickets are created, tracked, and resolved.
                    - Remote Desktop Support: Using remote desktop applications to troubleshoot and resolve technical issues directly on the customer's device.
                    - On-Site Support: Providing physical assistance at the customer's location for hardware and software issues.
                  `)
                  }
                  
                >
                  Helpdesk Support
                </li>
                <li
                  onClick={() =>
                    handleShowModal(`
                    - Software Troubleshooting: Resolving issues related to software applications, operating systems, and other digital tools.
                    - Hardware Maintenance: Addressing problems with physical devices such as computers, servers, and networking equipment.
                    - Network Connectivity: Ensuring stable and secure network connections, including VPN setup and troubleshooting.
                  `)
                  }
                  
                >
                  Technical Support
                </li>
                <li
                  onClick={() =>
                    handleShowModal(`
                    - Customer Data Management: Storing and analyzing customer data to provide personalized support and improve service quality.
                    - Feedback and Surveys: Collecting customer feedback to identify areas for improvement and enhance customer satisfaction.
                  `)
                  }
                  
                >
                  Customer Relationship Management (CRM)
                </li>
                <li
                  onClick={() =>
                    handleShowModal(`
                    - Real-Time Chat Support: Providing instant support to customers through live chat on the Consult Park website.
                    - Live Agent Support: Offering real-time assistance from human agents for more complex issues that require personalized attention.
                  `)
                  }
                  
                >
                  Live Chat Support
                </li>
                <li
                  onClick={() =>
                    handleShowModal(`
                    - Monitoring Social Media Channels: Keeping an eye on mentions and messages on platforms like Twitter, Facebook, and Instagram.
                    - Responding to Queries: Providing timely responses to customer inquiries and resolving issues through social media interactions.
                  `)
                  }
              
                >
                  Social Media Support
                </li>
                <li
                  onClick={() =>
                    handleShowModal(`
                    - Online Forums: Creating and managing online forums where customers can ask questions, share experiences, and get support from other users and company representatives.
                  `)
                  }
                
                >
                  Community Forums
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Admin Support</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li
                  onClick={() =>
                    handleShowModal(`
                    - Email-based Ticketing System: Managing customer queries and issues through an email-based system where tickets are created, tracked, and resolved.
                    - Remote Desktop Support: Using remote desktop applications to troubleshoot and resolve technical issues directly on the customer's device.
                    - On-Site End User Support: Providing physical assistance at the customer's location for hardware and software issues.
                  `)
                  }
                  
                >
                  Helpdesk Administration
                </li>
                <li
                  onClick={() =>
                    handleShowModal(`
                    - Active Directory Management: Managing user accounts, permissions, and security settings using Active Directory.
                    - Microsoft Office 365 Administration: Handling tasks related to Microsoft Office 365, including email administration, software upgrades, and troubleshooting.
                    - Network Connectivity and VPN: Ensuring stable and secure network connections, including VPN setup and troubleshooting.
                  `)
                  }
                  
                >
                  Systems Administration
                </li>
                <li
                  onClick={() =>
                    handleShowModal(`
                    - MySQL Administration: Managing and maintaining MySQL databases to ensure data integrity and availability.
                    - Database Backup and Recovery: Implementing backup and recovery procedures to protect data from loss or corruption.
                  `)
                  }
                 
                >
                  Database Management
                </li>
                <li
                  onClick={() =>
                    handleShowModal(`
                    - Software Project Management: Overseeing software development projects, ensuring they are completed on time and within budget.
                    - Budgeting and Finance: Managing project budgets and financial planning to ensure efficient use of resources.
                  `)
                  }
                 
                >
                  Project Management
                </li>
                <li
                  onClick={() =>
                    handleShowModal(`
                    - Scheduling Meetings: Coordinating and scheduling meetings for project teams and leadership.
                    - Data Entry: Performing data entry tasks to maintain accurate records and databases.
                    - Developing Presentations: Creating presentations for meetings, reports, and other business needs.
                    - Managing Incoming and Outgoing Mail: Handling mail correspondence to ensure timely communication.
                  `)
                  }
                  
                >
                  General Administrative Tasks
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* Modal for detailed content */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Service Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalContent}</Modal.Body>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={handleCloseModal}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Services;