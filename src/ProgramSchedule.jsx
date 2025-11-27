import React from "react";
import AnilBDeolalikar from '../photos/‪Anil B. Deolalikar.png';

export default function ProgramSchedule() {
  const sessions = [
    {
      time: "09:30 – 11:00",
      day1: {
        title: "Plenary 1: Participant Introduction, Seminar Goals",
        type: "plenary",
        venue: "Lecture Hall 1",
      },
      day2: {
        title:
          "Open Day (Inauguration, Keynote by Prof. Anil B. Deolalikar)",
        type: "open",
        venue: "MUH",
        linkId: "anil-keynote", // anchor to scroll to details
      },
      day3: { title: "Breakout Session 3", type: "breakout", venue: "TBD" },
    },
    {
      time: "11:00 – 11:30",
      day1: { title: "Coffee Break", type: "break" },
      day2: { title: "Coffee Break", type: "break" },
      day3: { title: "Coffee Break", type: "break" },
    },
    {
      time: "11:30 – 13:00",
      day1: {
        title: "Plenary 2: Thematic Session A",
        type: "plenary",
        venue: "Lecture Hall 1",
      },
      day2: {
        title:
          "Open Day Panel Discussion — Transdisciplinary Perspectives on AI for Global South",
        type: "open",
        venue: "MUH",
        details: (
          <div className="text-sm text-gray-700 mt-1">
            <p>
              <span className="font-semibold">Moderator:</span> Elizabeth
              Churchill
            </p>
            <p className="font-semibold mt-1">Confirmed Panelists:</p>
            <ul className="ml-4 list-disc">
              <li>Weibke Denecke</li>
              <li>Kalika Bali</li>
              <li>Vukosi Marivate</li>
            </ul>
          </div>
        ),
      },
      day3: { title: "Breakout Session 4", type: "breakout", venue: "TBD" },
    },
    {
      time: "13:00 – 14:00",
      day1: { title: "Lunch", type: "break" },
      day2: { title: "Lunch & Poster Presentations", type: "break" },
      day3: { title: "Lunch", type: "break" },
    },
    {
      time: "14:00 – 15:30",
      day1: {
        title: "Plenary 3: Thematic Session B",
        type: "plenary",
        venue: "Lecture Hall 1",
      },
      day2: {
        title: "Plenary 4: Thematic Session C",
        type: "plenary",
        venue: "Lecture Hall 1",
      },
      day3: {
        title:
          "Plenary 5: Breakout Session Reporting and Synthesis",
        type: "plenary",
        venue: "Lecture Hall 1",
      },
    },
    {
      time: "15:30 – 16:00",
      day1: { title: "Coffee Break", type: "break" },
      day2: { title: "Coffee Break", type: "break" },
      day3: { title: "Coffee Break", type: "break" },
    },
    {
      time: "16:00 – 18:00",
      day1: { title: "Breakout Session 1", type: "breakout", venue: "TBD" },
      day2: { title: "Breakout Session 2", type: "breakout", venue: "TBD" },
      day3: {
        title:
          "Plenary 6: Summary, Feedback and Next Steps",
        type: "plenary",
        venue: "Lecture Hall 1",
      },
    },
    {
      time: "18:00 – 20:30",
      day1: { title: "Dinner", type: "break" },
      day2: {
        title:
          "Social Event & Dinner at IIT Delhi Abu Dhabi Campus",
        type: "break",
      },
      day3: { title: "Dinner", type: "break" },
    },
  ];

  const getColor = (type) => {
    switch (type) {
      case "open":
        return "bg-pink-50 border-l-4 border-pink-300";
      case "plenary":
        return "bg-indigo-50 border-l-4 border-indigo-300";
      case "breakout":
        return "bg-yellow-50 border-l-4 border-yellow-300";
      case "break":
        return "bg-gray-50 border-l-4 border-gray-200";
      default:
        return "";
    }
  };

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 via-pink-50 to-purple-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
          Program Schedule
        </h2>

        {/* Schedule Table */}
        <div className="overflow-x-auto shadow-lg rounded-lg border border-indigo-100">
          <table className="w-full text-left border-collapse table-fixed">
            <colgroup>
              <col className="w-1/6" />
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <thead>
              <tr className="bg-indigo-100 text-gray-800">
                <th className="px-4 py-3 font-semibold">Time</th>
                <th className="px-4 py-3 font-semibold text-center">9 Dec</th>
                <th className="px-4 py-3 font-semibold text-center">10 Dec</th>
                <th className="px-4 py-3 font-semibold text-center">11 Dec</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((row, idx) => (
                <tr key={idx} className="border-t border-gray-100">
                  <td className="px-4 py-3 align-top font-medium text-gray-800 bg-white">
                    {row.time}
                  </td>
                  {["day1", "day2", "day3"].map((dayKey) => {
                    const s = row[dayKey];
                    const isAnilKeynote = s?.linkId === "anil-keynote";

                    return (
                      <td
                        key={dayKey}
                        className={`px-4 py-3 align-top ${getColor(
                          s?.type
                        )}`}
                      >
                        {s?.title && (
                          <p
                            className={`font-semibold text-center ${
                              s.type === "open"
                                ? "text-pink-700"
                                : s.type === "plenary"
                                ? "text-indigo-700"
                                : s.type === "breakout"
                                ? "text-yellow-700"
                                : "text-gray-700"
                            }`}
                          >
                            {isAnilKeynote ? (
                              <button
                                type="button"
                                onClick={() => handleScrollTo("anil-keynote")}
                                className="underline decoration-pink-400 hover:text-pink-800"
                              >
                                {s.title}
                              </button>
                            ) : (
                              s.title
                            )}
                          </p>
                        )}
                        {s?.venue && (
                          <p className="text-sm text-gray-600 mt-1 text-center">
                            <span className="font-medium">Venue:</span>{" "}
                            {s.venue}
                          </p>
                        )}
                        {s?.details && (
                          <div className="mt-2 text-left">{s.details}</div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-pink-200 border border-pink-300 rounded" />{" "}
            Open Day (MUH)
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-indigo-200 border border-indigo-300 rounded" />{" "}
            Plenary (Lecture Hall 1)
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-yellow-200 border border-yellow-300 rounded" />{" "}
            Breakout (TBD)
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-gray-200 border border-gray-300 rounded" />{" "}
            Breaks / Meals
          </div>
        </div>

        <section
          id="anil-keynote"
          className="mt-16 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-indigo-100 px-6 py-8"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/4 flex flex-col items-center">
              <img
                src={AnilBDeolalikar}
                alt="Prof. Anil B. Deolalikar"
                className="w-40 h-40 rounded-full object-cover border border-gray-300 shadow-md"
              />
              <p className="mt-3 text-sm text-gray-600 text-center font-medium">
                Prof. Anil B. Deolalikar
              </p>
            </div>

            <div className="w-full md:w-3/4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Keynote: AI and the Economies of the Global South: A
                Development Economics Perspective
              </h3>
              <p className="text-gray-700 mb-1">
                Prof. Anil B. Deolalikar, Professor of Economics, University of
                California, Riverside (USA)
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Open Day Inauguration Keynote &nbsp;·&nbsp; 10 December &nbsp;·&nbsp;
                MUH
              </p>

              <h4 className="text-sm font-semibold tracking-[0.3em] text-gray-500 mb-2">
                ABSTRACT
              </h4>
              <p className="text-gray-700 mb-3">
                Artificial intelligence (AI) presents both opportunities and risks for developing economies.
                However, it remains uncertain whether AI will serve as a leapfrogging technology, allowing the
                Global South to catch up with advanced economies, or if it will lead to greater divergence. This
                presentation explores AI’s impact on the Global South through the lens of development
                economics, emphasizing labor markets, infrastructure constraints, institutional challenges, and
                benefit-cost analysis.
              </p>
              <p className="text-gray-700 mb-3">
                The presentation examines how AI affects employment differently in developing countries than
                in advanced economies. Standard automation models, designed for high-income countries,
                require significant adjustments when applied to economies with large agricultural and informal
                sectors, different relative factor prices, and varied infrastructure capabilities. Three scenarios are
                explored: vulnerability in service exports (particularly in business process outsourcing), potential
                productivity gains in agriculture, and the enigma of the large informal sector, which AI-driven
                changes might entirely overlook.
              </p>
              <p className="text-gray-700 mb-3">
                Besides labor market implications, the presentation covers additional challenges like data
                governance, infrastructure needs, and the institutional capacity necessary for effective regulation.
                It also explains how benefit-cost analysis – a tool commonly used in development economics to
                prioritize policy actions – can be applied to rank AI initiatives in the Global South based on their
                impact relative to cost.
              </p>
              <p className="text-gray-700">
                Throughout the presentation, the focus is on the unique contributions of development economics
                in understanding AI effects. The aim is to identify important knowledge gaps that require
                rigorous empirical research. Ultimately, the goal is to encourage transdisciplinary dialogue on
                how to maximize AI’s potential while effectively managing its risks in low- and middle-income
                countries.
              </p>

              <hr className="my-6 border-gray-200" />

              <h4 className="text-sm font-semibold tracking-[0.3em] text-gray-500 mb-2">
                SPEAKER BIO
              </h4>
              <p className="text-gray-700 mb-3">
                Anil Deolalikar is Professor of Economics and Founding
                Dean Emeritus of the School of Public Policy at the
                University of California, Riverside. He serves as Chair of the
                Board of Directors of the global think-tank, One Health
                Trust, based in Washington, D.C. and Bengaluru. He also
                served as Chair of the Board of Directors for the UC-wide
                Global Health Institute from 2017 to 2022.
              </p>
              <p className="text-gray-700 mb-3">
                Deolalikar previously taught at the University of
                Washington, the University of Pennsylvania, and Harvard
                University. He served as Lead Human Development
                Economist for the World Bank in New Delhi in 2002-03 and
                Senior Human Development Economist for the World Bank
                in Nairobi in 1995-96.
              </p>
              <p className="text-gray-700 mb-3">
                Deolalikar is a development economist who has published numerous books and articles
                on the economics of nutrition, health, education, demography, and poverty and social
                protection in developing countries. He is co-editor of <em>The Journal of Asian and African
                Studies</em> and editor-in-chief of the World Scientific Publishing book series, <em>Grand Public
                Policy Challenges of the 21st Century</em>. He also serves on the editorial board of <em>The
                Journal of Developing Societies</em>. He is an elected Fellow of the American Association for
                the Advancement of Science and was a recipient of the World Bank’s Robert McNamara
                Fellowship for International Development early in his career.
              </p>
              <p className="text-gray-700">
                Deolalikar obtained his Ph.D. from Stanford University, a Diploma in Development
                Economics from Cambridge University, and BA summa cum laude from Harvard
                University. He was also a Rockefeller Foundation Postdoctoral Fellow in economic
                demography at Yale University.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}