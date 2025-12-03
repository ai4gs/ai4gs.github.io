import React, { useState, useCallback, useMemo } from "react";

export default function ProgramSchedule() {
  const [expandedDay, setExpandedDay] = useState(null);
  const [expandedTime, setExpandedTime] = useState(null);
  const [expandedSession, setExpandedSession] = useState(null);
  const [expandedTalkType, setExpandedTalkType] = useState(null);
  const [expandedKeynoteDetails, setExpandedKeynoteDetails] = useState(null);
  const [expandedKeynoteAbstract, setExpandedKeynoteAbstract] = useState(null);
  const [expandedKeynoteBio, setExpandedKeynoteBio] = useState(null);
  const sessions = [
    {
      time: "09:30 – 11:00",
      day1: {
        title: "Plenary 1: Participant Introduction, Seminar Goals",
        type: "plenary",
        venue: "Lecture Hall 1",
      },
      day2: {
        title: "Open Day",
        type: "open",
        venue: "MUH",
        details: (
          <div className="text-sm text-gray-700 mt-2 space-y-2">
            <div className="bg-pink-100 p-3 rounded border-l-4 border-pink-600">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-pink-900 mb-1">🎓 Inauguration</p>
                  <p className="text-xs text-pink-700">9:30 – 10:15 AM</p>
                </div>
              </div>
            </div>
            <div className="bg-pink-50 p-3 rounded border-l-4 border-pink-400">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-pink-800 mb-1">🎤 Keynote by Prof. Anil B. Deolalikar</p>
                  <p className="text-xs text-pink-700">10:15 – 11:00 AM</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setExpandedDay(2); // Day 2 (10 Dec)
                    setExpandedTime("2-0"); // First session (09:30-11:00)
                    setTimeout(() => {
                      document.querySelector("#event-details")?.scrollIntoView({ behavior: "smooth" });
                    }, 50);
                  }}
                  className="ml-2 text-pink-600 hover:text-pink-900 hover:bg-pink-200 rounded-full w-6 h-6 flex items-center justify-center transition cursor-pointer text-lg leading-none"
                  title="Click to view more details"
                >
                  ℹ️
                </button>
              </div>
            </div>
          </div>
        ),
        linkId: "anil-keynote",
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
        title: "Plenary 2: Thematic Session A – Technology",
        type: "plenary",
        venue: "Lecture Hall 1",
        details: (
          <div className="text-sm text-gray-700 mt-2 space-y-3">
            <div className="bg-blue-100 p-3 rounded border-l-4 border-blue-600">
              <p className="font-bold text-blue-900 mb-2">🎤 Vision Talk (40 mins):</p>
              <ul className="ml-4">
                <li>
                  <span className="font-semibold text-blue-800">Alham Fikri Aji</span> – [vision talk title TBC]
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
              <p className="font-bold text-blue-800 mb-2">⚡ Lightning Talks (8 mins each):</p>
              <ul className="ml-4 list-disc space-y-1"> 
                <li>
                  <span className="font-semibold text-blue-700">Bashar Alhafni</span> – "Arabic NLP"
                </li>
                <li>
                  <span className="font-semibold text-blue-700">Julia Kreutzer</span> – "Aya model family – building multilingual LLMs: what do we rely on and what is missing?"
                </li>
                <li>
                  <span className="font-semibold text-blue-700">Hari (Energy)</span> – short lightning talk on energy & AI [title TBC]
                </li>
                <li>
                  <span className="font-semibold text-blue-700">Luciana Benotti</span> – "Sourcing Training/Evaluation Data for AI: LatamGPT and HESEIA projects"
                </li>
              </ul>
            </div>
          </div>
        ),
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
        title: "Plenary 3: Thematic Session B – User",
        type: "plenary",
        venue: "Lecture Hall 1",
        details: (
          <div className="text-sm text-gray-700 mt-2 space-y-3">
            <div className="bg-blue-100 p-3 rounded border-l-4 border-blue-600">
              <p className="font-bold text-blue-900 mb-2">🎤 Vision Talk (40 mins):</p>
              <ul className="ml-4">
                <li>
                  <span className="font-semibold text-blue-800">Munmun De Choudhury</span> – [vision talk title TBC]
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
              <p className="font-bold text-blue-800 mb-2">⚡ Lightning Talks (8 mins each):</p>
              <ul className="ml-4 list-disc space-y-1"> 
                <li>
                  <span className="font-semibold text-blue-700">Melissa Densmore</span> – "Participatory Co-Design in Africa: Building Inclusive Living Labs for Research and Innovation in AI"
                </li>
                <li>
                  <span className="font-semibold text-blue-700">Aditya Vashistha</span> – "AI safety for marginalized communities"
                </li>
                <li>
                  <span className="font-semibold text-blue-700">Ishtiaque Ahmed</span> – "AI Ethics: From Value Alignment to Value-in-Context"
                </li>
                <li>
                  <span className="font-semibold text-blue-700">Danish Pruthi</span> – "Richer Outputs for Richer Countries?"
                </li>
                <li>
                  <span className="font-semibold text-blue-700">Tatapong Beyala</span> – "Empowering African women through AI-assisted storytelling solutions for inclusive innovation in the creative industry"
                </li>
              </ul>
            </div>
          </div>
        ),
      },
      day2: {
        title: "Plenary 4: Thematic Session C – Society",
        type: "plenary",
        venue: "Lecture Hall 1",
        details: (
          <div className="text-sm text-gray-700 mt-2 space-y-3">
            <div className="bg-blue-100 p-3 rounded border-l-4 border-blue-600">
              <p className="font-bold text-blue-900 mb-2">🎤 Vision Talk (40 mins):</p>
              <ul className="ml-4">
                <li>
                  <span className="font-semibold text-blue-800">Kentaro Toyama</span> – [vision talk title TBC]
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
              <p className="font-bold text-blue-800 mb-2">⚡ Lightning Talks (8 mins each):</p>
              <ul className="ml-4 list-disc space-y-1"> 
                <li>
                  <span className="font-semibold text-blue-700">Howard Lakougna</span> – "State of language models for low-resourced languages"
                </li>
                <li>
                  <span className="font-semibold text-blue-700">Yasir Zaki</span> – "Towards a World Wide Web without digital inequality"
                </li>
                <li>
                  <span className="font-semibold text-blue-700">Wessam Ezzeddine</span> – "Risks of AGI"
                </li>
                <li>
                  <span className="font-semibold text-blue-700">Fajri Koto (Culture)</span> – short lightning talk on culture & language technologies [title TBC]
                </li>
              </ul>
            </div>
          </div>
        ),
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

  const handleScrollTo = useCallback((id) => {
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }, []);

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
                        {s?.details && (
                          <div className="mt-2 flex justify-center pt-2 border-t border-gray-300">
                            <button
                              type="button"
                              onClick={() => {
                                const dayNum = dayKey === "day1" ? 1 : dayKey === "day2" ? 2 : 3;
                                setExpandedDay(dayNum);
                                setExpandedTime(`${dayNum}-${idx}`);
                                setTimeout(() => {
                                  document.querySelector("#event-details")?.scrollIntoView({ behavior: "smooth" });
                                }, 100);
                              }}
                              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full w-6 h-6 flex items-center justify-center transition cursor-pointer text-lg leading-none"
                              title="View more details"
                            >
                              ℹ️
                            </button>
                          </div>
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

        {/* Detailed Timeline View */}
        <div id="event-details" className="mt-12 bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Details by Day</h2>
          
          {[
            { day: "day1", label: "9 Dec", dayNum: 1 },
            { day: "day2", label: "10 Dec", dayNum: 2 },
            { day: "day3", label: "11 Dec", dayNum: 3 },
          ].map(({ day, label, dayNum }) => (
            <div key={day} className="mb-4">
              <button
                onClick={() => setExpandedDay(expandedDay === dayNum ? null : dayNum)}
                className={`w-full flex items-center gap-3 p-4 rounded-lg border-2 transition ${
                  expandedDay === dayNum
                    ? "bg-indigo-50 border-indigo-300"
                    : "bg-gray-50 border-gray-200 hover:border-indigo-200"
                }`}
              >
                <span className="text-xl">{expandedDay === dayNum ? "▼" : "▶"}</span>
                <span className="font-bold text-lg text-gray-900">{label}</span>
              </button>

              {expandedDay === dayNum && (
                <div className="mt-2 space-y-3 ml-4" style={{ contain: "layout style paint" }}>
                  {sessions.map((session, idx) => {
                    const sessionData = session[day];
                    if (!sessionData || !sessionData.title) return null;

                    const hasDetails = sessionData.details || sessionData.type === "break";
                    const isBreak = sessionData.type === "break";
                    const isExpanded = expandedTime === `${dayNum}-${idx}`;

                    return (
                      <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() =>
                            !isBreak &&
                            setExpandedTime(isExpanded ? null : `${dayNum}-${idx}`)
                          }
                          className={`w-full flex items-center gap-3 p-3 transition ${
                            isExpanded ? "bg-indigo-100" : "bg-gray-50 hover:bg-gray-100"
                          } ${isBreak ? "cursor-default" : "cursor-pointer"}`}
                          disabled={isBreak}
                        >
                          {!isBreak && (
                            <span className="text-lg">
                              {isExpanded ? "▼" : "▶"}
                            </span>
                          )}
                          {isBreak && <span className="text-lg text-gray-400">•</span>}
                          <div className="text-left">
                            <p className="font-semibold text-gray-900 text-sm">
                              {session.time}
                            </p>
                            <p className="text-sm text-gray-700">{sessionData.title}</p>
                            {sessionData.venue && (
                              <p className="text-xs text-gray-500">Venue: {sessionData.venue}</p>
                            )}
                          </div>
                        </button>

                        {isExpanded && hasDetails && (
                          <div className="bg-gray-50 p-4 space-y-3" style={{ contain: "layout style paint" }}>
                            {/* Vision Talk and Lightning Talks Expansion */}
                            {sessionData.type === "plenary" && sessionData.details && (
                              <div>
                                {/* Display Vision Talk Info */}
                                <div className="mb-3 bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                                  <p className="font-bold text-blue-900 mb-2">🎤 Vision Talk (40 mins)</p>
                                  <div className="text-xs text-blue-800">{sessionData.details}</div>
                                </div>

                                {/* Display Lightning Talks Info */}
                                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                                  <p className="font-bold text-blue-900 mb-2">⚡ Lightning Talks (8 mins each)</p>
                                  <div className="text-xs text-blue-800">{sessionData.details}</div>
                                </div>
                              </div>
                            )}

                            {/* Panel Discussion Details */}
                            {sessionData.type === "open" && sessionData.details && (
                              <div className="text-xs text-gray-700 bg-pink-50 p-3 rounded border-l-4 border-pink-400">
                                {sessionData.details}
                                
                                {/* Keynote Expandable Section */}
                                <div className="mt-4 pt-4 border-t border-pink-200">
                                  <button
                                    onClick={() =>
                                      setExpandedKeynoteDetails(
                                        expandedKeynoteDetails === `${dayNum}-${idx}`
                                          ? null
                                          : `${dayNum}-${idx}`
                                      )
                                    }
                                    className="flex items-center gap-2 text-pink-800 font-semibold hover:text-pink-900"
                                  >
                                    <span>
                                      {expandedKeynoteDetails === `${dayNum}-${idx}` ? "▼" : "▶"}
                                    </span>
                                    Keynote: AI and the Economies of the Global South
                                  </button>
                                  
                                  {expandedKeynoteDetails === `${dayNum}-${idx}` && (
                                    <div className="mt-3 space-y-4 bg-white p-3 rounded text-gray-700">
                                      <div>
                                        <h4 className="font-semibold text-pink-900 mb-2">Speaker</h4>
                                        <p className="text-xs">Prof. Anil B. Deolalikar, Professor of Economics, University of California, Riverside (USA)</p>
                                      </div>
                                      
                                      <button
                                        onClick={() =>
                                          setExpandedKeynoteAbstract(
                                            expandedKeynoteAbstract === `${dayNum}-${idx}`
                                              ? null
                                              : `${dayNum}-${idx}`
                                          )
                                        }
                                        className="flex items-center gap-2 font-semibold text-pink-700 hover:text-pink-900 text-xs"
                                      >
                                        <span>
                                          {expandedKeynoteAbstract === `${dayNum}-${idx}` ? "▼" : "▶"}
                                        </span>
                                        Abstract
                                      </button>
                                      
                                      {expandedKeynoteAbstract === `${dayNum}-${idx}` && (
                                        <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded">
                                          <p className="mb-3">
                                            Artificial intelligence (AI) presents both opportunities and risks for developing economies.
                                            However, it remains uncertain whether AI will serve as a leapfrogging technology, allowing the
                                            Global South to catch up with advanced economies, or if it will lead to greater divergence. This
                                            presentation explores AI's impact on the Global South through the lens of development
                                            economics, emphasizing labor markets, infrastructure constraints, institutional challenges, and
                                            benefit-cost analysis.
                                          </p>
                                          <p className="mb-3">
                                            The presentation examines how AI affects employment differently in developing countries than
                                            in advanced economies. Standard automation models, designed for high-income countries,
                                            require significant adjustments when applied to economies with large agricultural and informal
                                            sectors, different relative factor prices, and varied infrastructure capabilities. Three scenarios are
                                            explored: vulnerability in service exports (particularly in business process outsourcing), potential
                                            productivity gains in agriculture, and the enigma of the large informal sector, which AI-driven
                                            changes might entirely overlook.
                                          </p>
                                          <p className="mb-3">
                                            Besides labor market implications, the presentation covers additional challenges like data
                                            governance, infrastructure needs, and the institutional capacity necessary for effective regulation.
                                            It also explains how benefit-cost analysis – a tool commonly used in development economics to
                                            prioritize policy actions – can be applied to rank AI initiatives in the Global South based on their
                                            impact relative to cost.
                                          </p>
                                          <p>
                                            Throughout the presentation, the focus is on the unique contributions of development economics
                                            in understanding AI effects. The aim is to identify important knowledge gaps that require
                                            rigorous empirical research. Ultimately, the goal is to encourage transdisciplinary dialogue on
                                            how to maximize AI's potential while effectively managing its risks in low- and middle-income
                                            countries.
                                          </p>
                                        </div>
                                      )}
                                      
                                      <button
                                        onClick={() =>
                                          setExpandedKeynoteBio(
                                            expandedKeynoteBio === `${dayNum}-${idx}`
                                              ? null
                                              : `${dayNum}-${idx}`
                                          )
                                        }
                                        className="flex items-center gap-2 font-semibold text-pink-700 hover:text-pink-900 text-xs"
                                      >
                                        <span>
                                          {expandedKeynoteBio === `${dayNum}-${idx}` ? "▼" : "▶"}
                                        </span>
                                        Speaker Bio
                                      </button>
                                      
                                      {expandedKeynoteBio === `${dayNum}-${idx}` && (
                                        <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded">
                                          <p className="mb-3">
                                            Anil Deolalikar is Professor of Economics and Founding
                                            Dean Emeritus of the School of Public Policy at the
                                            University of California, Riverside. He serves as Chair of the
                                            Board of Directors of the global think-tank, One Health
                                            Trust, based in Washington, D.C. and Bengaluru. He also
                                            served as Chair of the Board of Directors for the UC-wide
                                            Global Health Institute from 2017 to 2022.
                                          </p>
                                          <p className="mb-3">
                                            Deolalikar previously taught at the University of
                                            Washington, the University of Pennsylvania, and Harvard
                                            University. He served as Lead Human Development
                                            Economist for the World Bank in New Delhi in 2002-03 and
                                            Senior Human Development Economist for the World Bank
                                            in Nairobi in 1995-96.
                                          </p>
                                          <p className="mb-3">
                                            Deolalikar is a development economist who has published numerous books and articles
                                            on the economics of nutrition, health, education, demography, and poverty and social
                                            protection in developing countries. He is co-editor of <em>The Journal of Asian and African
                                            Studies</em> and editor-in-chief of the World Scientific Publishing book series, <em>Grand Public
                                            Policy Challenges of the 21st Century</em>. He also serves on the editorial board of <em>The
                                            Journal of Developing Societies</em>. He is an elected Fellow of the American Association for
                                            the Advancement of Science and was a recipient of the World Bank's Robert McNamara
                                            Fellowship for International Development early in his career.
                                          </p>
                                          <p>
                                            Deolalikar obtained his Ph.D. from Stanford University, a Diploma in Development
                                            Economics from Cambridge University, and BA summa cum laude from Harvard
                                            University. He was also a Rockefeller Foundation Postdoctoral Fellow in economic
                                            demography at Yale University.
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}