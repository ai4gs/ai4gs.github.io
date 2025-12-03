import React from 'react';

export default function Posters() {
  const posters = [
    { name: "Anuj Kumar Sirohi", title: "Fair Federated Graph Neural Networks for Personalized Recommendation", citation: "Agrawal, AK Sirohi, and S Kumar. \"No prejudice! fair federated graph neural networks for personalized recommendation.\" Proceedings of the AAAI Conference on Artificial Intelligence. Vol. 38. No. 10. 2024." },
    { name: "Atharva Mehta", title: "Music for All: Representational Bias and Cross-Cultural Adaptability of Music Generation Models", citation: "Mehta, A., Chauhan, S., Djanibekov, A., Kulkarni, A., Xia, G., & Choudhury, M. (2025, April). Music for All: Representational Bias and Cross-Cultural Adaptability of Music Generation Models. In Findings of the Association for Computational Linguistics: NAACL 2025 (pp. 4569-4585)." },
    { name: "Chatrine Qwaider", title: "Arabic Write and Improve: An AI-Powered Platform for Improving Arabic Writing Instruction", citation: "Chirkunov, Kirill, Bashar Alhafni, Chatrine Qwaider, Nizar Habash, and Ted Briscoe. \"ARWI: Arabic Write and Improve.\" In Proceedings of the Fourth Workshop on Intelligent and Interactive Writing Assistants (In2Writing 2025), pp. 11-18. 2025." },
    { name: "Deepanshu Babbar", title: "Empowering Migrant Labor workers through accessible Kiosk Design at transit hubs: An HCI study on self-service interfaces in UAE.", citation: "" },
    { name: "Diana Turmakhan", title: "Towards Equitable Tokenization: Script-Aware Dynamic Patching for Multilingual Transformers", citation: "Comment: I will present work with the Sholpan Bolatzhanova" },
    { name: "Emilio Villa-Cueva", title: "Afri-MCQA : Multimodal Cultural Question Answering Dataset for African Languages", citation: "N/A" },
    { name: "Farah Atif", title: "Sacred or Synthetic? Evaluating LLM Reliability and Abstention for Religious Questions", citation: "Atif, F., Askarbekuly, N., Darwish, K., & Choudhury, M. (2025, October). Sacred or Synthetic? Evaluating LLM Reliability and Abstention for Religious Questions. In Proceedings of the AAAI/ACM Conference on AI, Ethics, and Society (Vol. 8, No. 1, pp. 217-226)." },
    { name: "Hazem Ibrahim", title: "Who Gets Seen in the Age of AI? Adoption Patterns of Large Language Models in Scholarly Writing and Citation Outcomes", citation: "Khan, Farhan Kamrul, et al. \"Who Gets Seen in the Age of AI? Adoption Patterns of Large Language Models in Scholarly Writing and Citation Outcomes.\" arXiv preprint arXiv:2509.08306 (2025)." },
    { name: "Khalid Elmadani", title: "A Large and Balanced Corpus for Fine-grained Arabic Readability Assessment", citation: "Khalid N. Elmadani, Nizar Habash, and Hanada Taha-Thomure. 2025. A Large and Balanced Corpus for Fine-grained Arabic Readability Assessment. In Findings of the Association for Computational Linguistics: ACL 2025, pages 16376–16400, Vienna, Austria. Association for Computational Linguistics." },
    { name: "Manoj Kumar Beriya", title: "Eulerian Data-Driven DNN Modeling to Predict Phase Distribution in Slurry Bubble Column Reactor", citation: "" },
    { name: "Mohamed Dehan Al Kautsar", title: "What Do Indonesians Really Need from Language Technology? A Nationwide Survey", citation: "@inproceedings{al-kautsar-etal-2025-indonesians, title = \"What Do Indonesians Really Need from Language Technology? A Nationwide Survey\", author = \"Al Kautsar, Muhammad Dehan  and Susanto, Lucky  and Wijaya, Derry Tanti  and Koto, Fajri\", booktitle = \"Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing\", year = \"2025\", address = \"Suzhou, China\", publisher = \"Association for Computational Linguistics\", url = \"https://aclanthology.org/2025.emnlp-main.367/\" }" },
    { name: "Mostafa Mohamed Saeed Mohamed Abdalla", title: "Lemmatization as a Classification Task: Results from Arabic across Multiple Genres", citation: "Mostafa Saeed and Nizar Habash. 2025. Lemmatization as a Classification Task: Results from Arabic across Multiple Genres. In Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing, pages 30002–30017, Suzhou, China. Association for Computational Linguistics." },
    { name: "Muhammad Cendekia Airlangga", title: "ASR Under Noise: Exploring Robustness for Sundanese and Javanese", citation: "Salsabila Zahirah Pranida, Rifo Ahmad Genadi, Muhammad Cendekia Airlangga, and Shady Shehata. 2025. ASR Under Noise: Exploring Robustness for Sundanese and Javanese. In Proceedings of the 9th Widening NLP Workshop, pages 87–99, Suzhou, China. Association for Computational Linguistics." },
    { name: "Rifo Ahmad Genadi", title: "Culturally-Nuanced Story Generation for Reasoning in Low-Resource Languages: The Case of Javanese and Sundanese", citation: "https://aclanthology.org/2025.mrl-main.25" },
    { name: "Salam Khalifa", title: "Corpora and Tools for Gulf Arabic: Modeling Challenges of a Low-Resource Variety", citation: "https://camel.abudhabi.nyu.edu/gumar/?page=publications&lang=en" },
    { name: "Saeed Shurrab", title: "Multimodal Deep Learning for Stroke Prediction and Detection using Retinal Imaging and Clinical Data", citation: "Shurrab S, Nepal A, Lee-St. John TJ, Ghazi NG, Piechowski-Jozwiak B, Shamout FE. Multimodal Deep Learning for Stroke Prediction and Detection using Retinal Imaging and Clinical Data. In 2025 47th Annual International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC) 2025. IEEE." },
    { name: "Sara Ghaboura", title: "DuwatBench: Bridging Language and Visual Heritage through an Arabic Calligraphy Benchmark for Multimodal Understanding", citation: "" },
    { name: "Sarfraz Ahmad", title: "UrduFactCheck: An Agentic Fact-Checking Framework for Urdu with Evidence Boosting and Benchmarking", citation: "Sarfraz Ahmad, Hasan Iqbal, Momina Ahsan, Numaan Naeem, Muhammad Ahsan Riaz Khan, Arham Riaz, Muhammad Arslan Manzoor, Yuxia Wang, and Preslav Nakov. 2025. UrduFactCheck: An Agentic Fact-Checking Framework for Urdu with Evidence Boosting and Benchmarking. In Findings of the Association for Computational Linguistics: EMNLP 2025, pages 22788–22802, Suzhou, China. Association for Computational Linguistics." },
    { name: "Zuhair Hasan Shaik", title: "Redefining Experts: Interpretable Decomposition of Language Models for Toxicity Mitigation", citation: "Shaik, Zuhair Hasan, et al. \"Redefining Experts: Interpretable Decomposition of Language Models for Toxicity Mitigation.\" The Thirty-ninth Annual Conference on Neural Information Processing Systems, 2025. https://openreview.net/forum?id=1wmP48quNb" },
  ];

  // Sort alphabetically by presenter name
  const sortedPosters = [...posters].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Poster Presentations
        </h2>
        <p className="text-center text-gray-600 mb-8 italic">
          Listed alphabetically by presenter name
        </p>

        <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-indigo-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b w-1/5">
                  Presenter
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b w-1/3">
                  Poster Title
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                  Citation
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedPosters.map((poster, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-3 text-gray-800 border-b align-top">{poster.name}</td>
                  <td className="px-6 py-3 text-gray-800 border-b align-top">{poster.title}</td>
                  <td className="px-6 py-3 text-gray-700 border-b text-sm align-top whitespace-pre-line">
                    {poster.citation || <span className="italic text-gray-400">No citation available</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
