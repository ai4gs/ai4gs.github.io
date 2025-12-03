import React from 'react';
import { Calendar, MapPin, Award, FileText } from 'lucide-react';

export default function Participate() {
  return (
    <section className="py-16 px-6 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Participate in AI4GS Open Day
        </h1>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-lg border border-indigo-100 shadow-md">
          <p className="text-lg text-gray-700 mb-6">
            <span className="font-semibold text-indigo-600">AI for Global South (AI4GS)</span> is an
            invitation-only event, except for the <span className="font-semibold">Open Day</span> on{' '}
            <span className="font-semibold">10th December 2025 (09:30 AM – 2:00 PM)</span> at MBZUAI,
            Masdar City, Abu Dhabi.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            We invite <span className="font-semibold">students and researchers</span> to showcase their
            work through posters that explore how AI can foster inclusion and create a positive impact
            in the Global South.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Suggested Themes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>NLP for low-resource or underrepresented languages</li>
            <li>Computer Vision using locally sourced data</li>
            <li>Efficient and practical Machine Learning methods</li>
            <li>AI Safety and Alignment for the Global South</li>
            <li>HCI studies of underrepresented communities</li>
            <li>AI applications in healthcare, education, and finance</li>
            <li>AI governance and policy</li>
          </ul>

          <p className="text-gray-700 mb-6">
            Both <span className="font-semibold">published work</span> and{' '}
            <span className="font-semibold">work in progress</span> are welcome. The posters will be
            non-archival.
          </p>

          <div className="bg-white p-6 rounded-lg border-l-4 border-indigo-600 mb-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-indigo-600" /> Important Dates
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>
                <span className="font-semibold">Poster submission deadline:</span> 27th November 2025
              </li>
              <li>
                <span className="font-semibold">Poster session:</span> 10th December 2025 (09:30 AM – 2:00 PM)
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border-l-4 border-purple-600 mb-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Award className="h-5 w-5 text-purple-600" /> Awards
            </h3>
            <p className="text-gray-700">
              Awards will be presented to the top three posters:
              <br />
              1st – AED 500 | 2nd – AED 300 | 3rd – AED 200
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border-l-4 border-green-600 mb-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-green-600" /> Venue
            </h3>
            <p className="text-gray-700">Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)</p>
            <p className="text-gray-600 text-sm">Masdar City, Abu Dhabi, UAE</p>
          </div>

          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-2">
              <button
                disabled
                className="inline-flex items-center gap-2 bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold cursor-not-allowed opacity-60 shadow-md"
              >
                <FileText className="h-5 w-5" />
                Submit Poster
              </button>
              <p className="text-red-600 font-semibold text-sm">Submission deadline closed (27th November 2025)</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>
            For any queries, please contact:
            <br />
            <span className="font-semibold">Ananya Agrawal</span> — Ananya.Agrawal@mbzuai.ac.ae
            <br />
            <span className="font-semibold">Salsabila Pranida</span> — Salsabila.Pranida@mbzuai.ac.ae
          </p>
        </div>
      </div>
    </section>
  );
}
