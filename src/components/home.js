import React from "react";
import FeatureCard from '../components/ui/FeatureCard';
import '../components/styles/Home.css'; 

const home = () => {

  const features = [
    {
      icon: '💰',
      title: 'Reduce Costs',
      description: 'Optimize your operational expenses with our cost-effective outsourcing solutions.',
    },
    {
      icon: '🚀',
      title: 'Increase Efficiency',
      description: 'Boost productivity and streamline processes with our skilled professionals.',
    },
    {
      icon: '📄',
      title: 'No Rigid Contracts',
      description: 'Flexible engagement models tailored to your specific business needs.',
    },
    {
      icon: '💬',
      title: 'Fluent Communication',
      description: 'Work with professionals who are fluent in English and effective communicators.',
    },
    {
      icon: '🏆',
      title: 'Certified Talent',
      description: 'Access to a pool of qualified and certified professionals across various domains.',
    },
    {
      icon: '🏢',
      title: 'Office-Based Professionals',
      description: 'Our team works from well-equipped offices with proper infrastructure and supervision.',
    },
  ];

  return (
    <section className="hero">
      <div>
        <div>
          <div className="intro">
            <h1>
            Powering Global Talent, Driving <br></br>Business Growth
            </h1>
            <h3>
             Your Strategic Outsourcing Partner for Remote Excellence 
            </h3>
            <p>
            At Consult Park, we connect businesses with world-class remote talent, helping them scale,
optimise, and thrive. Whether you need skilled virtual staff, process outsourcing, or expert
consulting, we provide tailored solutions that drive results.
            </p>
            <div>
              <button className="btn1">CONTACT US</button>

            </div>
            
          </div>
        </div>
      </div>
      
      <div>
      <FeatureCard features={features} />
    </div>
    </section>
  );
};

export default home;
