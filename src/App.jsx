import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Users, Calendar, Mail, BookOpen, Heart } from 'lucide-react';
import People from './People';
import Partners from './Partners';
import Questions from './Questions';
import ContactForm from './Form';
import Participate from './Participate';
import Venue from './Venue';
import ProgramSchedule from './ProgramSchedule';
import AiImpactLogo from '../photos/ai-impact-logo.png';
import IITDLogo from '../photos/IIT Delhi - Abu Dhabi_Horizontal_page-0001.jpg';
import MBZUAI_AI4GS_Banner from '../photos/AI4GS_banner_2.png';
import MicrosoftLogo from '../photos/microsoft-logo.png';
import Places from './Places';


export default function AI4GSWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('home');
  const [bannerVisible, setBannerVisible] = useState(true);

  const navigation = [
    { name: 'Home', id: 'home', page: 'home' },
    { name: 'About', id: 'about', page: 'home' },
    // { name: 'Events', id: 'events', page: 'home' },s
    { name: 'People', id: 'people', page: 'people' },
    { name: 'Program Schedule', id: 'program', page: 'program' },
    { name: 'Participate', id: 'participate', page: 'participate' },
    {
      name: 'Venue',
      id: 'venue',
      page: null,
      children: [
        { name: 'Important Information', id: 'important-info', page: 'venue' },
        // { name: 'Places to Visit', id: 'places', external: "https://coling2025.org/venue/places/" }
        { name: 'Places to Visit', id: 'places', page: 'places' }
      ]
    },    
    // { name: 'Partners', id: 'partners', page: 'partners' },
    // { name: 'Submit Questions', id: 'questions', page: 'questions' },
  ];

  // Scroll spy effect
  useEffect(() => {
    if (currentPage !== 'home') return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'events'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigation = (item) => {
    if (item.page !== 'home') {
      setCurrentPage(item.page);
      setActiveSection(item.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage('home');
      setTimeout(() => scrollToSection(item.id), 100);
    }
    setMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    setCurrentPage('home');
    setTimeout(() => scrollToSection('contact'), 100);
  };

  const eventsData = [
    {
      day: 'Day 0',
      date: 'December 9th, 2025',
      events: [
        { time: '09:00 AM', title: 'Event 1', description: 'Opening keynote and welcome session' },
        { time: '11:00 AM', title: 'Event 2', description: 'Panel discussion' },
        { time: '02:00 PM', title: 'Event 3', description: 'Thematic discussions' },
        { time: '04:00 PM', title: 'Event 4', description: 'Breakout sessions' },
        { time: '06:00 PM', title: 'Event 5', description: 'Evening networking' },
      ]
    },
    {
      day: 'Day 2',
      date: 'December 10th, 2025',
      events: [
        { time: '09:00 AM', title: 'Event 1', description: 'Research presentations' },
        { time: '11:00 AM', title: 'Event 2', description: 'Collaborative workshops' },
        { time: '02:00 PM', title: 'Event 3', description: 'Policy roundtables' },
        { time: '04:00 PM', title: 'Event 4', description: 'Sectoral discussions' },
        { time: '06:00 PM', title: 'Event 5', description: 'Social event' },
      ]
    },
    {
      day: 'Day 3',
      date: 'December 11th, 2025',
      events: [
        { time: '09:00 AM', title: 'Event 1', description: 'Roadmap development sessions' },
        { time: '11:00 AM', title: 'Event 2', description: 'Future directions panel' },
        { time: '02:00 PM', title: 'Event 3', description: 'Synthesis and outcomes' },
        { time: '04:00 PM', title: 'Event 4', description: 'Closing remarks' },
        { time: '05:00 PM', title: 'Event 5', description: 'Farewell reception' },
      ]
    }
  ];

  const renderHomePage = () => (
    <>
      {/* Hero Section (Banner Image) */}
      <section id="home" className="pt-20 pb-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <img
            src={MBZUAI_AI4GS_Banner}
            alt="AI4GS Banner"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>



      {/* About Section */}
<section id="about" className="py-16 px-4 bg-white">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-900 mb-8">About AI4GS</h2>

    {/* Date and Location */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 text-lg md:text-xl text-gray-700">
      <span className="font-semibold">December 9–11, 2025</span>
      <span className="hidden sm:block text-gray-400">|</span>
      <span className="font-semibold">MBZUAI, Abu Dhabi</span>
    </div>

    {/* Description */}
    <div className="max-w-4xl mx-auto text-left">
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        <span className="font-semibold text-indigo-600">AI for the Global South (AI4GS)</span> is a convening of researchers who work for 
        and with Global South communities to co-define a 10-year holistic and transdisciplinary research agenda for 
        increasing AI’s positive impact on the Global South.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        While artificial intelligence has made extraordinary progress, its benefits remain unevenly distributed. 
        The research and development of AI are largely influenced by efforts concentrated in the Global North, 
        leaving vast opportunities for the Global South to take a more central role in shaping AI’s future.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        As an official pre-summit event of the{' '}
        <a
          href="https://impact.indiaai.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-800 underline"
        >
          India AI Impact Summit
        </a>{' '}
        to be held in February 2026, AI4GS will bring together leading voices from across the world — 
        including AI researchers, social scientists, policymakers, ethicists, NGOs, and practitioners — 
        to collaboratively design a decade-long roadmap that ensures AI development is inclusive, equitable, 
        and responsive to real developmental needs.
      </p>

      {/* Callout */}
      <div className="bg-indigo-50 p-6 rounded-lg mb-6">
        <ul className="text-lg text-gray-800 italic space-y-3 list-none">
          <li className="flex items-start">
            <span className="text-indigo-600 mr-3 text-xl">→</span>
            <span>How can AI reflect the diversity of the world’s languages, cultures, and economies?</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 mr-3 text-xl">→</span>
            <span>How can we design systems that are inclusive, equitable, and responsive to local needs?</span>
          </li>
        </ul>
      </div>

      <p className="text-lg text-gray-700 leading-relaxed">
        The three-day seminar will serve as a collaborative forum for open dialogue and knowledge sharing. 
        Together, we will chart the path forward for AI that truly serves the world — with the Global South at its center.
      </p>
    </div>
  </div>
</section>



      {/* Pre-Summit Event Banner */}
      <section className="py-12 px-4 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg border-2 border-indigo-400 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3">
              <p className="text-white text-center font-semibold text-sm uppercase tracking-wide">
                Official Pre-Summit Event
              </p>
            </div>
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <img 
                      src={AiImpactLogo}
                      alt="India AI Impact Summit 2026" 
                      className="h-32 w-auto object-contain"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    India AI Impact Summit 2026
                  </h3>
                  <p className="text-lg text-gray-700 mb-4">
                    February 2026 | India
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    This seminar is the official pre-summit event of the India AI Impact Summit, 
                    bringing together global perspectives to shape the future of AI for the Global South.
                  </p>
                  <a 
                    href="https://impact.indiaai.gov.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
                  >
                    <span>Learn More About India AI Impact Summit</span>
                    <Globe className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contact Us</h2>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-lg border-2 border-indigo-100">
            <div className="mb-8 p-6 bg-white rounded-lg border-l-4 border-indigo-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">About This Seminar</h3>
              <p className="text-gray-700 leading-relaxed">
                This is an <span className="font-semibold text-indigo-600"> invitation-only gathering</span> that 
                will convene leading voices from AI, HCI, development studies, ethicists, policy makers, NGOs, and other 
                stakeholders to define a 10-year holistic and transdisciplinary research agenda for maximizing AI's 
                positive impact on the Global South.
              </p>
            </div>

            <div className="flex items-start mb-6">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Contact</h3>
                <ContactForm />
              </div>

            </div>
            <div className="flex items-start mb-6">
              {/* <Globe className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" /> */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Venue</h3>
                <p className="text-gray-700">Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)</p>
                <p className="text-gray-600 text-sm">Abu Dhabi, UAE</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <button 
              onClick={() => {
                setCurrentPage('home');
                setTimeout(() => scrollToSection('home'), 100);
              }}
              className="flex items-center"
            >
              <span className="ml-2 text-2xl font-bold text-gray-900">AI4GS</span>
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => {
                      if (!item.children) handleNavigation(item);
                    }}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-indigo-600 border-b-2 border-indigo-600'
                        : 'text-gray-700 hover:text-indigo-600'
                    }`}
                  >
                    {item.name}
                    {item.children && <span className="ml-1">▾</span>}
                  </button>

                  {/* Dropdown menu */}
                  {item.children && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => {
                            if (child.external) {
                              window.open(child.external, "_blank");
                            } else {
                              handleNavigation(child);
                            }
                          }}

                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                        >
                          {child.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>


            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-indigo-600"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
      
      {/* Page Content */}
      <div className="pt-16">
        {currentPage === 'home' && renderHomePage()}
        {currentPage === 'people' && <People />}
        {currentPage === 'program' && <ProgramSchedule />}
        {currentPage === 'partners' && <Partners onContactClick={handleContactClick} />}
        {currentPage === 'questions' && <Questions />}
        {currentPage === 'participate' && <Participate />}
        {currentPage === 'venue' && <Venue />}
        {currentPage === 'places' && <Places />}
      </div>

      {/* Partners Section */}
      {/* <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-10">
            <span className="inline-block rounded-lg border border-indigo-100 bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-2 text-2xl md:text-3xl font-bold text-gray-900">
              Co-Organizer
            </span>
          </h2>

          <a
            href="https://iitdabudhabi.ac.ae/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit IIT Delhi Abu Dhabi website"
            className="inline-block focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded"
          >
            <img
              src={IITDLogo}
              alt="IIT Delhi Abu Dhabi"
              className="h-48 sm:h-56 md:h-64 w-auto mx-auto object-contain"
            />
          </a>
        </div>
      </section> */}
      {/* Co-Organizers and Sponsors Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-10">
            {/* Co-Organizer Column */}
            <div className="flex-1 text-center">
              <h2 className="mb-10">
                <span className="inline-block rounded-lg border border-indigo-100 bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-2 text-2xl md:text-3xl font-bold text-gray-900">
                  Co-Organizer
                </span>
              </h2>
              <a
                href="https://iitdabudhabi.ac.ae/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit IIT Delhi Abu Dhabi website"
                className="inline-block focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded"
              >
                <img
                  src={IITDLogo}
                  alt="IIT Delhi Abu Dhabi"
                  className="h-48 sm:h-56 md:h-64 w-auto mx-auto object-contain mb-4"
                />
              </a>
              {/* <p className="text-lg text-gray-700">
                Indian Institute of Technology Delhi <br />
                Abu Dhabi Campus
              </p> */}
            </div>

            {/* Sponsors Column */}
            <div className="flex-1 text-center">
              <h2 className="mb-10">
                <span className="inline-block rounded-lg border border-purple-100 bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-2 text-2xl md:text-3xl font-bold text-gray-900">
                  Sponsor
                </span>
              </h2>
              <a
                href="https://www.microsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Microsoft website"
                className="inline-block focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded"
              >
                <img
                  src={MicrosoftLogo}
                  alt="Microsoft"
                  className="h-48 sm:h-56 md:h-64 w-auto mx-auto object-contain mb-4"
                />
              </a>
              {/* <p className="text-lg text-gray-700">
                Microsoft is the lead sponsor for AI4GS, supporting<br />research and innovation for AI in the Global South.
              </p> */}
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-xl font-bold">AI4GS</span>
          </div>
          <p className="text-gray-400 mb-2">AI for Global South Initiative</p>
          <p className="text-gray-500 text-sm mb-2">
            © 2025 AI4GS. Empowering communities through accessible AI.
          </p>
          <p className="text-gray-400 text-sm">
            Hosted by Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)
          </p>
        </div>
      </footer>
    </div>
  );
}