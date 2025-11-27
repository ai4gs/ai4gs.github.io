// src/Venue.jsx
import React from 'react';
import {
  MapPin,
  Globe,
  SunMedium,
  Shirt,
  Wifi,
  Plug,
  Languages,
  ShieldCheck,
  DollarSign,
  Clock3,
  Droplets,
  AlertTriangle,
  ListTree,
} from 'lucide-react';
export default function Venue() {
  return (
    <div className="min-h-screen bg-white pt-20 pb-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left column: main content */}
        <main className="flex-1 min-w-0">
          {/* Page title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Venue &amp; Visitor Information
          </h1>

          {/* Intro / venue info */}
          <div className="mb-8">
            <p className="text-gray-700 text-lg leading-relaxed">
                AI4GS 2025 will take place in Abu Dhabi, United Arab Emirates, hosted at the 
                <span className="font-semibold text-indigo-600 inline-flex items-center gap-1">
                {' '}
                Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)
                <a
                    href="https://www.google.com/maps?um=1&ie=UTF-8&fb=1&gl=ae&sa=X&geocode=KQUY4nWvSF4-MYa8ifPWQZRk&daddr=Residential+Building+(Biofuel+Block)+-+Masdar+City+-+SE45+05+-+Abu+Dhabi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800"
                    aria-label="Open MBZUAI location in Google Maps"
                >
                    <MapPin className="h-4 w-4 inline-block" />
                </a>
                </span>
                . This page provides practical information to help you prepare for your visit.
            </p>
            </div>

          {/* Sections */}

          {/* Climate */}
          <section id="climate" className="mb-10">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-3">
              <SunMedium className="h-6 w-6 mr-2 text-amber-500" />
              Climate
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Abu Dhabi has a northern-hemisphere subtropical, arid climate. November to March is
              the most appealing time of year, and it is also when infrequent winter rains occur.
              The temperature range in the winter months is between <strong>56ºF (13ºC)</strong> and{' '}
              <strong>75ºF (24ºC)</strong> with typically bright sunny days which correspond to the
              best kind of spring weather in many temperate regions.
            </p>
          </section>

          {/* Clothing */}
          <section id="clothing" className="mb-10">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-3">
              <Shirt className="h-6 w-6 mr-2 text-indigo-600" />
              Clothing
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              Summer clothing may be worn for most of the year, but during the winter evening
              temperatures may occasionally call for a jacket or light coat. While dress codes are
              fairly liberal, consideration should be given not to offend the sensibilities of
              others.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              Swimwear should be worn only on beaches or at swimming pools. When visiting shopping
              malls and other attractions, tourists should wear clothing that is not too tight or
              revealing.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Certain attractions such as mosques or religious sites usually have stricter dress
              codes, requiring both men and women to cover bare shoulders, arms and legs, and women
              to wear headscarves.
            </p>
          </section>

          {/* Communications */}
          <section id="communications" className="mb-10">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-3">
              <Wifi className="h-6 w-6 mr-2 text-sky-500" />
              Communications
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              The international dialing code for incoming calls to landlines in the UAE is{' '}
              <strong>+971</strong> and <strong>02</strong> for Abu Dhabi. Calls to and from
              landlines within Abu Dhabi are free. Direct dialing is possible to over 170 countries.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              The UAE has two main mobile networks, <strong>Du</strong> and <strong>Etisalat</strong>.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
              <li>
                Both offer temporary SIM cards for tourists and business travelers, including data
                and calls, available at outlets across the UAE, including at the airport and malls.
              </li>
              <li>
                Roaming services are also available for most visitors if they wish to use their
                existing number and phone.
              </li>
            </ul>
          </section>

          {/* Currency & Living Cost */}
          <section id="currency" className="mb-10">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-3">
              <DollarSign className="h-6 w-6 mr-2 text-emerald-600" />
              Currency &amp; Living Cost
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              The monetary unit is the <strong>Dirham (AED)</strong>, which is divided into 100 fils.
              The exchange rate is pegged to the US Dollar at the rate <strong>$1 = AED 3.675</strong>.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              The average costs at an average coffee shop or restaurant are as follows:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
              <li>Cup of coffee: 14–20 AED / 3.8–5.5 USD</li>
              <li>Sandwich lunch: 15–30 AED / 5–8.2 USD</li>
              <li>Evening meal: 30–50 AED / 8.2–13.6 USD</li>
            </ul>
          </section>

          {/* Electricity */}
          <section id="electricity" className="mb-10">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-3">
              <Plug className="h-6 w-6 mr-2 text-gray-700" />
              Electricity
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              The electricity supply in Abu Dhabi is <strong>220/240 volts</strong> at{' '}
              <strong>50 cycles</strong>. Standard British-type 13-amp square three-pin plugs are
              the norm in most hotels.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              European or US-made appliances may need a plug adapter, and in some cases a voltage
              converter.
            </p>
          </section>

          {/* Language */}
          <section id="language" className="mb-10">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-3">
              <Languages className="h-6 w-6 mr-2 text-indigo-600" />
              Language
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              The official language of the UAE is Arabic. However, English is also very widely
              spoken throughout Abu Dhabi, especially in business, hospitality, retail
              environments, street signs, taxis, restaurant menus, etc. Urdu and Hindi are also
              widely spoken.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              For some basic Arabic phrases used commonly, check out this site. The top eight to
              learn are:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-1">
              <li>
                <strong>Marhaba (مرحبا)</strong> – Hello
              </li>
              <li>
                <strong>Ahlan (أهلاً)</strong> – Welcome
              </li>
              <li>
                <strong>Ma’asalama (مع السلامة)</strong> – Good Bye
              </li>
              <li>
                <strong>Shukran (شكراً)</strong> – Thank you
              </li>
              <li>
                <strong>Mabrook (مبروك)</strong> – Congratulations
              </li>
              <li>
                <strong>Yalla (يلا)</strong> – Let’s go
              </li>
              <li>
                <strong>Khalas (خلص)</strong> – Enough / done
              </li>
              <li>
                <strong>Inshallah (إن شاء الله)</strong> – God willing, may be, no, and a host of
                other context-dependent meanings
              </li>
            </ul>
          </section>

          {/* Security */}
          <section id="security" className="mb-10">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-3">
              <ShieldCheck className="h-6 w-6 mr-2 text-emerald-600" />
              Security
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              As one of the most cosmopolitan and multicultural cities in the world, home to over
              200 different nationalities, Abu Dhabi is an advocate for peace and stability, and
              proud to be a connecting hub between East and West.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Abu Dhabi is ranked among the safest cities globally, with low crime rates, a stable
              government, and a department of Abu Dhabi Police dedicated entirely to visitors.
            </p>
          </section>

          {/* Taxation */}
          <section id="taxation" className="mb-10">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-3">
              <DollarSign className="h-6 w-6 mr-2 text-gray-700" />
              Taxation
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              The UAE does not levy income tax on individuals.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Value Added Tax (VAT) is levied on a majority of goods and services.
            </p>
          </section>

          {/* Time Zone & Business Hours */}
          <section id="time" className="mb-10">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-3">
              <Clock3 className="h-6 w-6 mr-2 text-indigo-600" />
              Time Zone &amp; Business Hours
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              Abu Dhabi is <strong>GMT+4</strong>. Most businesses are open from approximately
              <strong> 8 am to 6 pm</strong>, Monday to Friday, with Saturday and Sunday being
              official holidays for government departments.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Embassies, consulates, and many government offices operate from about{' '}
              <strong>7:30 am to 2:30 pm</strong>, Monday to Friday.
            </p>
          </section>

          {/* Tipping & Gratuities */}
          <section id="tipping" className="mb-10">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-3">
              <DollarSign className="h-6 w-6 mr-2 text-amber-600" />
              Tipping &amp; Gratuities
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              Tipping practices are similar to most other parts of the world. Many restaurants
              include a 10% service charge.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Additional gratuities are generally left to the customer’s discretion and are often
              given to acknowledge good service.
            </p>
          </section>

          {/* Water */}
          <section id="water" className="mb-10">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-3">
              <Droplets className="h-6 w-6 mr-2 text-sky-500" />
              Water
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              The tap water in Abu Dhabi is safe to drink.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              However, locally bottled water is commonly served in hotels and restaurants.
            </p>
          </section>

          {/* Emergency */}
          <section id="emergency" className="mb-4">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-3">
              <AlertTriangle className="h-6 w-6 mr-2 text-red-500" />
              Emergency
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              The emergency phone number for Abu Dhabi Police is <strong>999</strong>. Whether you
              need police assistance, an ambulance, or any other emergency support, 999 is the
              number to call and calls are free.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              When calling 999, please remember to state your name, the nature of the situation, the
              address of the emergency, and how serious the situation appears to be.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              If you’re involved in a traffic accident, it’s important to contact the police
              immediately. In case of a minor incident, move your car to the roadside, as there are
              fines for obstructing traffic. You cannot file an insurance claim without a police
              report.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Abu Dhabi also provides a range of hotlines and online resources listing 24-hour
              pharmacies, hospitals, clinics, and other medical services.
            </p>
          </section>
        </main>

        {/* Right column: On This Page sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="lg:sticky lg:top-24 bg-gray-50 border border-gray-200 p-4 rounded-xl">
            <div className="flex items-center mb-3">
              <ListTree className="h-5 w-5 mr-2 text-gray-700" />
              <h2 className="text-lg font-semibold text-gray-900">On this page</h2>
            </div>

            <nav className="flex flex-col text-sm">
              <a href="#climate" className="px-3 py-2 rounded-md hover:bg-indigo-100 hover:text-indigo-700">
                Climate
              </a>
              <a href="#clothing" className="px-3 py-2 rounded-md hover:bg-indigo-100 hover:text-indigo-700">
                Clothing
              </a>
              <a href="#communications" className="px-3 py-2 rounded-md hover:bg-indigo-100 hover:text-indigo-700">
                Communications
              </a>
              <a href="#currency" className="px-3 py-2 rounded-md hover:bg-indigo-100 hover:text-indigo-700">
                Currency &amp; Living Cost
              </a>
              <a href="#electricity" className="px-3 py-2 rounded-md hover:bg-indigo-100 hover:text-indigo-700">
                Electricity
              </a>
              <a href="#language" className="px-3 py-2 rounded-md hover:bg-indigo-100 hover:text-indigo-700">
                Language
              </a>
              <a href="#security" className="px-3 py-2 rounded-md hover:bg-indigo-100 hover:text-indigo-700">
                Security
              </a>
              <a href="#taxation" className="px-3 py-2 rounded-md hover:bg-indigo-100 hover:text-indigo-700">
                Taxation
              </a>
              <a href="#time" className="px-3 py-2 rounded-md hover:bg-indigo-100 hover:text-indigo-700">
                Time Zone &amp; Business Hours
              </a>
              <a href="#tipping" className="px-3 py-2 rounded-md hover:bg-indigo-100 hover:text-indigo-700">
                Tipping &amp; Gratuities
              </a>
              <a href="#water" className="px-3 py-2 rounded-md hover:bg-indigo-100 hover:text-indigo-700">
                Water
              </a>
              <a href="#emergency" className="px-3 py-2 rounded-md hover:bg-indigo-100 hover:text-indigo-700">
                Emergency
              </a>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
}
