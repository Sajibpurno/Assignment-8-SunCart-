import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section - Visual Impact */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-40">
           {/* Ekhaner image path-ta check kore nio */}
          <Image 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071" 
            alt="SunCart Team" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            We are <span className="text-orange-500">SunCart</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-light text-slate-200">
            Empowering the next generation of digital creators with premium assets and seamless experiences.
          </p>
        </div>
      </section>

      {/* Vision & Mission - The Startup Story */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-orange-500 pl-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              SunCart shuru hoyechilo ekta simple idea theke—digital marketplace-ke shohoj ar premium kora. Amra 3 jon bondhu mile eita shuru korechi jate creators-ra tader shopno shotti korte pare.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Amra bishwash kori quality digital tools shobar kachhe pouchano dorkar. Tai amra build korchi emon ekta platform jekhane trust ar performance-i shob.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <span className="text-4xl font-bold text-orange-500 mb-2">100%</span>
              <span className="text-sm font-medium text-gray-500 uppercase">Premium Quality</span>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl shadow-xl text-white flex flex-col items-center text-center">
              <span className="text-4xl font-bold mb-2">24/7</span>
              <span className="text-sm font-medium text-slate-400 uppercase">Expert Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Modern Grid */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why SunCart?</h2>
            <p className="text-gray-500">Built for speed, designed for precision.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Innovation', 'Security', 'Reliability'].map((value, index) => (
              <div key={index} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-600 font-bold">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold mb-4">{value}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  High-performance web applications designed for professionals to discover and purchase premium digital assets.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Final Touch */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-orange-500 rounded-[2rem] p-12 text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to upgrade your workflow?</h2>
          <p className="mb-8 text-orange-50 font-light text-lg">
            Join the DigiTools community and access the best premium assets in the market.
          </p>
          <button className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all duration-300 transform hover:scale-105">
            Explore Marketplace
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;