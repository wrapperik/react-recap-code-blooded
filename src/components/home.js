import React from "react";
import FeatureCard from '../components/ui/FeatureCard';

const home = () => {

  const features = [
    'Reduce Costs',
    'Increase Efficiency',
    'No Rigid Contracts',
    'Fluent Communication',
    'Certified Talent',
    'Office-Based Professionals',
    'Dedicated Workforce',
    'Performance-Driven Approach',
  ];

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 mt-10 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="tracking-tight">
            Powering Global Talent, Driving Business Growth
            </h1>
            <p className="text-lg md:text-xl max-w-2xl">
            🔹 Your Strategic Outsourcing Partner for Remote Excellence 🔹
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="btn-primary flex items-center gap-2">
                Get Started 
              </a>
              <a href="#services" className="btn-outline">
                Explore Services
              </a>
            </div>
            
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="w-full h-full bg-art-darker"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(155,135,245,0.15)_0%,rgba(10,10,10,0)_70%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-art-purple/30 to-transparent"></div>
      </div>
      <div>
      <FeatureCard title="Our Features" features={features} />
    </div>
    </section>
  );
};

export default home;
