import React from 'react';

export default function Posters() {
  const posters = [
    { name: "Anuj Kumar Sirohi", title: "Fair Federated Graph Neural Networks for Personalized Recommendation" },
    { name: "Atharva Mehta", title: "Music for All: Representational Bias and Cross-Cultural Adaptability of Music Generation Models" },
    { name: "Chatrine Qwaider", title: "Arabic Write and Improve: An AI-Powered Platform for Improving Arabic Writing Instruction" },
    { name: "Deepanshu Babbar", title: "Empowering Migrant Labor workers through accessible Kiosk Design at transit hubs: An HCI study on self-service interfaces in UAE." },
    { name: "Diana Turmakhan", title: "Towards Equitable Tokenization: Script-Aware Dynamic Patching for Multilingual Transformers" },
    { name: "Emilio Villa-Cueva", title: "Afri-MCQA : Multimodal Cultural Question Answering Dataset for African Languages" },
    { name: "Farah Atif", title: "Sacred or Synthetic? Evaluating LLM Reliability and Abstention for Religious Questions" },
    { name: "Hazem Ibrahim", title: "Who Gets Seen in the Age of AI? Adoption Patterns of Large Language Models in Scholarly Writing and Citation Outcomes" },
    { name: "Khalid Elmadani", title: "A Large and Balanced Corpus for Fine-grained Arabic Readability Assessment" },
    { name: "Manoj Kumar Beriya", title: "Eulerian Data-Driven DNN Modeling to Predict Phase Distribution in Slurry Bubble Column Reactor" },
    { name: "Mohamed Dehan Al Kautsar", title: "What Do Indonesians Really Need from Language Technology? A Nationwide Survey" },
    { name: "Mostafa Mohamed Saeed Mohamed Abdalla", title: "Lemmatization as a Classification Task: Results from Arabic across Multiple Genres" },
    { name: "Muhammad Cendekia Airlangga", title: "ASR Under Noise: Exploring Robustness for Sundanese and Javanese" },
    { name: "Rifo Ahmad Genadi", title: "Culturally-Nuanced Story Generation for Reasoning in Low-Resource Languages: The Case of Javanese and Sundanese" },
    { name: "Salam Khalifa", title: "Corpora and Tools for Gulf Arabic: Modeling Challenges of a Low-Resource Variety" },
    { name: "Saeed Shurrab", title: "Multimodal Deep Learning for Stroke Prediction and Detection using Retinal Imaging and Clinical Data" },
    { name: "Sara Ghaboura", title: "DuwatBench: Bridging Language and Visual Heritage through an Arabic Calligraphy Benchmark for Multimodal Understanding" },
    { name: "Sarfraz Ahmad", title: "UrduFactCheck: An Agentic Fact-Checking Framework for Urdu with Evidence Boosting and Benchmarking" },
    { name: "Zuhair Hasan Shaik", title: "Redefining Experts: Interpretable Decomposition of Language Models for Toxicity Mitigation" },
  ];

  // Sort alphabetically by presenter name
  const sortedPosters = [...posters].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Poster Presentations
        </h2>

        <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-indigo-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                  Presenter
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                  Poster Title
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedPosters.map((poster, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-3 text-gray-800 border-b">{poster.name}</td>
                  <td className="px-6 py-3 text-gray-800 border-b">{poster.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
