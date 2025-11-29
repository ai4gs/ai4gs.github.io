import React from "react";

import EmiratesPalaceImg from "../photos/emirates-palace.webp";
import LouvreImg from "../photos/louvre.jpg";
import GrandMosqueImg from "../photos/grand-mosque.jpg";
import QasrAlHosnImg from "../photos/qasr-al-hosn.jpg";
import AquariumImg from "../photos/aquarium.webp";
import YasImg from "../photos/yas.avif";
import MangroveParkImg from "../photos/mangrove-park.jpg";
import CornicheImg from "../photos/corniche.webp";
import DubaiImg from "../photos/dubai.webp";
import SharjahImg from "../photos/sharjah.jpg";

export default function Places() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Places to Visit
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Discover the best attractions in Abu Dhabi and nearby emirates during your stay.
          </p>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            AI4GS 2025 will take place in Abu Dhabi, United Arab Emirates, and will be hosted at MBZUAI.
            Abu Dhabi recently hosted COLING 2025, and we are sharing some of the useful resources prepared
            by the COLING organizers for their participants. These links provide practical information to
            help you prepare for your visit.
          </p>
        </div>

        {/* Abu Dhabi Landmarks */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Abu Dhabi Landmarks
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Emirates Palace */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={EmiratesPalaceImg}
                  alt="Emirates Palace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Emirates Palace</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Located in the heart of Abu Dhabi, Emirates Palace is one of the capital&apos;s
                  most well-known landmarks, renowned for its Arabesque architecture and
                  five-star hospitality.
                </p>
                <a
                  href="https://www.google.ae/maps/dir/Current+Location/Emirate%20Palace,Abu%20Dhabi/@24.461644,54.317283"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 font-medium underline"
                >
                  Directions →
                </a>
              </div>
            </div>

            {/* Louvre Abu Dhabi */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={LouvreImg}
                  alt="Louvre Abu Dhabi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Louvre Abu Dhabi</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  The first universal museum in the Arab World, located on Saadiyat Island, 
                  showcasing artworks and artefacts from ancient to contemporary times.
                </p>
                <a
                  href="https://www.google.ae/maps/dir/Current+Location/Louvre%20Abu%20Dhabi,Abu%20Dhabi/@24.533698,54.398137"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 font-medium underline"
                >
                  Directions →
                </a>
              </div>
            </div>

            {/* Sheikh Zayed Grand Mosque */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={GrandMosqueImg}
                  alt="Sheikh Zayed Grand Mosque"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Sheikh Zayed Grand Mosque
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  One of the world&apos;s largest mosques, combining architectural styles from
                  across the Muslim world and symbolising cultural diversity.
                </p>
                <a
                  href="https://www.google.ae/maps/dir/Current+Location/Sheikh%20Zayed%20Grand%20Mosque,Abu%20Dhabi/@24.412837,54.474976"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 font-medium underline"
                >
                  Directions →
                </a>
              </div>
            </div>

            {/* Qasr Al Hosn */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={QasrAlHosnImg}
                  alt="Qasr Al Hosn"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Qasr Al Hosn</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  The oldest stone building in Abu Dhabi, formerly home to the ruling family and 
                  seat of government, now a museum narrating the city&apos;s history.
                </p>
                <a
                  href="https://www.google.ae/maps/dir/Current+Location/Qasr%20Al%20Hosn,Abu%20Dhabi/@24.482239,54.354842"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 font-medium underline"
                >
                  Directions →
                </a>
              </div>
            </div>

            {/* National Aquarium */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={AquariumImg}
                  alt="The National Aquarium Abu Dhabi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  The National Aquarium Abu Dhabi
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  The largest aquarium in the Middle East, home to more than 46,000 animals across 
                  10 themed zones.
                </p>
                <a
                  href="https://www.google.ae/maps/dir/Current+Location/The%20National%20Aquarium%20Abu%20Dhabi,Abu%20Dhabi/@24.402209,54.49634"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 font-medium underline"
                >
                  Directions →
                </a>
              </div>
            </div>

            {/* Yas Island */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={YasImg}
                  alt="Yas Island"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Yas Island</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  A major entertainment hub with Formula 1 circuit, theme parks, shopping mall, 
                  golf course, beaches, and hotels.
                </p>
                <a
                  href="https://www.google.ae/maps/dir/Current+Location/Yas%20Island,Abu%20Dhabi/@24.497478505617185,54.603839566018365"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 font-medium underline"
                >
                  Directions →
                </a>
              </div>
            </div>

            {/* Jubail Mangrove Park */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={MangroveParkImg}
                  alt="Jubail Mangrove Park"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Jubail Mangrove Park</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Boardwalks through mangrove forests, with opportunities to spot turtles, herons, 
                  gazelles, and more—ideal for birdwatchers and photographers.
                </p>
                <a
                  href="https://www.google.ae/maps/dir/Current+Location/Jubail%20Mangrove%20Park,Abu%20Dhabi/@24.545194,54.485399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 font-medium underline"
                >
                  Directions →
                </a>
              </div>
            </div>

            {/* Corniche */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={CornicheImg}
                  alt="Abu Dhabi Corniche"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Abu Dhabi Corniche</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  An 8km waterfront with walking and cycling paths, play areas, cafés, and a 
                  lifeguarded public beach.
                </p>
                <a
                  href="https://www.google.ae/maps/dir/Current+Location/Corniche%20Rd,Abu%20Dhabi/@24.471006378735797,54.33220600533254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 font-medium underline"
                >
                  Directions →
                </a>
              </div>
            </div>
          </div>
        </section>

                {/* Abu Dhabi Beaches */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Abu Dhabi Beaches
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-10 text-center leading-relaxed">
            Enjoy Abu Dhabi&apos;s coastline, from relaxed island beaches to the lively Corniche
            waterfront, all within a short drive from the city.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Soul Beach Saadiyat Island */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Soul Beach Saadiyat Island
              </h3>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Tucked away on Saadiyat Island, Soul Beach is a new beachfront destination that is
                part of the Mamsha Al Saadiyat community.
              </p>
              <a
                href="https://www.google.ae/maps/dir/Current+Location/Soul%20Beach,Abu%20Dhabi/@24.53966171946439,54.41035367059425"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-medium underline"
              >
                Directions →
              </a>
            </div>

            {/* Saadiyat Beach */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Saadiyat Beach
              </h3>
              <p className="text-gray-600 mb-3 leading-relaxed">
                With pristine white sands along a wide shoreline, Saadiyat Beach is one of the most
                desirable beach locations in the UAE.
              </p>
              <a
                href="https://www.google.ae/maps/dir/Current+Location/Saadiyat%20Beach,Abu%20Dhabi/@24.548873,54.436608"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-medium underline"
              >
                Directions →
              </a>
            </div>

            {/* Yas Beach */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Yas Beach
              </h3>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Set on a long stretch of white sand, Yas Beach offers guests of Yas Island hotels
                access to clear waters and surrounding mangroves.
              </p>
              <a
                href="https://www.google.ae/maps/dir/Current+Location/Yas%20Beach,Abu%20Dhabi/@24.462087,54.592183"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-medium underline"
              >
                Directions →
              </a>
            </div>

            {/* Corniche Beach */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Corniche Beach
              </h3>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Corniche Beach combines turquoise water and soft white sand with a scenic
                boardwalk, landscaped gardens, and benches overlooking the Arabian Gulf.
              </p>
              <a
                href="https://www.google.ae/maps/dir/Current+Location/Corniche%20Beach,Abu%20Dhabi/@24.473195,54.340827"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-medium underline"
              >
                Directions →
              </a>
            </div>
          </div>
        </section>

        {/* Nearby Cities */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Nearby Cities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Dubai */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={DubaiImg}
                  alt="Dubai skyline"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Dubai</h3>
                <p className="text-lg mb-2 text-gray-700">140 km · ~1 hr 20 min by car</p>
                <p className="mb-4 text-gray-700">
                  A vibrant, multicultural city famous for Burj Khalifa, modern architecture,
                  shopping, and entertainment.
                </p>
                <a
                  href="https://www.visitdubai.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-all"
                >
                  Explore Dubai →
                </a>
              </div>
            </div>

            {/* Sharjah */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={SharjahImg}
                  alt="Sharjah"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 bg-gradient-to-br from-emerald-50 to-teal-50">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Sharjah</h3>
                <p className="text-lg mb-2 text-gray-700">165 km · ~1 hr 50 min by car</p>
                <p className="mb-4 text-gray-700">
                  A major cultural hub of the UAE, with museums, heritage areas, and a wide range
                  of family activities.
                </p>
                <a
                  href="https://www.visitsharjah.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-all"
                >
                  Explore Sharjah →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}