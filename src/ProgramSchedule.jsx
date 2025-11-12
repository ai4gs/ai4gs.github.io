import React from "react";

export default function ProgramSchedule() {
  const sessions = [
    {
      time: "09:30 – 11:00",
      day1: { title: "Plenary 1: Participant Introduction, Seminar Goals", type: "plenary", venue: "Lecture Hall 1" },
      day2: { title: "Open Day (Inauguration, Keynote by Prof. Anil B. Deolalikar)", type: "open", venue: "MUH" },
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
      day1: { title: "Plenary 2: Thematic Session A", type: "plenary", venue: "Lecture Hall 1" },
      day2: {
        title: "Open Day Panel Discussion — Transdisciplinary Perspectives on AI for Global South",
        type: "open",
        venue: "MUH",
        details: (
          <div className="text-sm text-gray-700 mt-1">
            <p><span className="font-semibold">Moderator:</span> Elizabeth Churchill</p>
            <p className="font-semibold mt-1">Confirmed Panelists:</p>
            <ul className="ml-4 list-disc">
              <li>Weibke Denecke</li>
              <li>Olugbenga G. Ogedegbe</li>
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
      day1: { title: "Plenary 3: Thematic Session B", type: "plenary", venue: "Lecture Hall 1" },
      day2: { title: "Plenary 4: Thematic Session C", type: "plenary", venue: "Lecture Hall 1" },
      day3: { title: "Plenary 5: Breakout Session Reporting and Synthesis", type: "plenary", venue: "Lecture Hall 1" },
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
      day3: { title: "Plenary 6: Summary, Feedback and Next Steps", type: "plenary", venue: "Lecture Hall 1" },
    },
    {
      time: "18:00 – 20:30",
      day1: { title: "Dinner", type: "break" },
      day2: { title: "Social Event & Dinner at IIT Delhi Abu Dhabi Campus", type: "break" },
      day3: { title: "Dinner", type: "break" },
    },
  ];

  const getColor = (type) => {
    switch (type) {
      case "open": return "bg-pink-50 border-l-4 border-pink-300";
      case "plenary": return "bg-indigo-50 border-l-4 border-indigo-300";
      case "breakout": return "bg-yellow-50 border-l-4 border-yellow-300";
      case "break": return "bg-gray-50 border-l-4 border-gray-200";
      default: return "";
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 via-pink-50 to-purple-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
          Program Schedule
        </h2>

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
                    return (
                      <td key={dayKey} className={`px-4 py-3 align-top ${getColor(s?.type)}`}>
                        {s?.title && (
                          <p className={`font-semibold text-center ${
                            s.type === "open"
                              ? "text-pink-700"
                              : s.type === "plenary"
                              ? "text-indigo-700"
                              : s.type === "breakout"
                              ? "text-yellow-700"
                              : "text-gray-700"
                          }`}>
                            {s.title}
                          </p>
                        )}
                        {s?.venue && (
                          <p className="text-sm text-gray-600 mt-1 text-center">
                            <span className="font-medium">Venue:</span> {s.venue}
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

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-pink-200 border border-pink-300 rounded" /> Open Day (MUH)
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-indigo-200 border border-indigo-300 rounded" /> Plenary (Lecture Hall 1)
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-yellow-200 border border-yellow-300 rounded" /> Breakout (TBD)
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-gray-200 border border-gray-300 rounded" /> Breaks / Meals
          </div>
        </div>
      </div>
    </section>
  );
}
