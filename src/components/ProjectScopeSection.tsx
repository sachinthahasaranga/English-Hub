import React from 'react'
import { FaBook, FaSearch, FaLightbulb, FaBullseye, FaCode, FaTools } from 'react-icons/fa'

const sections = [
  {
    id: 'literature',
    title: 'Literature Survey',
    icon: FaBook,
    description:
      'Recent advances in language acquisition emphasize the critical role of listening skills in second language learning. Traditional, one-size-fits-all approaches often fail to meet diverse learner needs, leading to disengagement and uneven progress. Modern educational technologies, especially AI-driven adaptive systems, have demonstrated effectiveness in personalizing listening practice by dynamically adjusting task difficulty and providing real-time, semantic feedback. Research highlights the importance of integrating both bottom-up and top-down listening strategies, cultural context, and metacognitive development to enhance comprehension. However, despite successes in STEM EdTech, language learning particularly listening comprehension remains underfunded and underserved. Existing platforms often lack real-time adaptability, personalized feedback, and long-term skill tracking. Emerging AI-powered solutions using machine learning models and predictive analytics show promise for bridging these gaps by delivering tailored, engaging, and culturally contextualized listening experiences that foster autonomous language development.',
  },
  {
    id: 'gap',
    title: 'Research Gap',
    icon: FaSearch,
    description: '',
  },
  {
    id: 'problem',
    title: 'Research Problem & Solution',
    icon: FaLightbulb,
    description:
      'Students aged 10–12 often struggle with listening comprehension due to generic, non-adaptive educational platforms that lack personalization, emotional awareness, and predictive capabilities. Traditional systems follow fixed learning paths and respond only after failure occurs, limiting engagement and learning outcomes. Moreover, they rarely adapt in real time to a learner’s emotional state or academic progression. The proposed solution, EnglishHub, is an intelligent, web-based learning platform that integrates machine learning, real-time emotional feedback, and adaptive gamification to enhance English listening comprehension. By combining student classification, LSTM-based performance forecasting, and dynamic content adjustment, EnglishHub offers personalized listening activities tailored to each learner’s skill level and emotional engagement. Through interactive narratives, affect-aware mini-games, and scaffolded sessions, EnglishHub transforms listening practice into a responsive, engaging, and effective learning journey—bridging critical gaps in current language education tools.',
  },
  {
    id: 'objectives',
    title: 'Research Objectives',
    icon: FaBullseye,
    description: '',
  },
  {
    id: 'methodology',
    title: 'Methodology',
    icon: FaCode,
    description:
      'The study developed an adaptive learning platform for students aged 10–12, integrating machine learning models to personalize listening comprehension activities. Student data and responses were collected via a web-based MERN stack application, with Python Flask hosting ML models for real time evaluation using a cosine similarity algorithm. Two learning modes—Main and Practice Sessions were designed, with dynamic content delivery based on proficiency levels stored in MongoDB. Emotional states were captured through real time facial expression recognition using TensorFlow and OpenCV to inform adaptive storytelling and activity difficulty adjustments. A secure dashboard provided progress reporting for educators and parents. The system’s architecture emphasized scalability, responsiveness, and child-friendly UI design, with plans for extended features like speech recognition and advanced analytics.',
  },
  {
    id: 'technologies',
    title: 'Technologies',
    icon: FaTools,
    description: '',
  },
]

const ProjectScopeSection: React.FC = () => {
  return (
    <section id="project-scope" className="bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Project Scope
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore the comprehensive scope of our AI-enhanced LMS, from adaptive listening activities to intelligent chatbot integration for personalized student support.
        </p>

        <div className="space-y-16">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="space-y-4">
              <div className="flex items-center mb-6">
                <section.icon className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  {section.title}
                </h3>
              </div>

              {section.id === 'gap' ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="text-lg font-semibold mb-3 text-blue-700">Specialized Listening Comprehension</h4>
                    <p className="text-gray-600">
                      Current popular language learning platforms primarily focus on general language skills like vocabulary and grammar but lack dedicated, structured listening comprehension development. They do not adequately support advanced listening sub-skills such as inference-making, note-taking, or academic listening, which are essential for real-world communication and academic success.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="text-lg font-semibold mb-3 text-blue-700">Dynamic Personalization and Real-Time Adaptation</h4>
                    <p className="text-gray-600">
                      While some platforms include basic adaptive features, they rarely offer real-time, granular content adjustment based on learner performance. Personalized feedback targeting specific listening skills and dynamic difficulty scaling during activities are largely absent, limiting effective individualized learning paths.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="text-lg font-semibold mb-3 text-blue-700">Integration of Pedagogical Theories</h4>
                    <p className="text-gray-600">
                      Many existing systems fail to incorporate proven educational frameworks such as Mastery Learning, Cognitive Load Theory, and Scaffolded Learning. This results in static, one-size-fits-all content that does not optimize cognitive capacity or progression within learners’ Zones of Proximal Development.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="text-lg font-semibold mb-3 text-blue-700">Emotional and Engagement Feedback</h4>
                    <p className="text-gray-600">
                      There is a notable deficiency in real-time emotional recognition and affective feedback integration in language learning platforms. Existing tools either use post-session self-reports or offer simplistic mood indicators, missing opportunities for in the moment adaptive interventions that can mitigate frustration or disengagement.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="text-lg font-semibold mb-3 text-blue-700">Comprehensive Progress Reporting and Predictive Analytics</h4>
                    <p className="text-gray-600">
                      Current solutions focus primarily on academic metrics, neglecting detailed emotional engagement data and long-term skill development tracking. Predictive forecasting of learner trajectories and early intervention mechanisms are rarely implemented, reducing timely support effectiveness.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="text-lg font-semibold mb-3 text-blue-700">Ethical and Privacy Considerations in AI Integration</h4>
                    <p className="text-gray-600">
                      The deployment of biometric and emotional data tracking technologies in child-focused education remains limited by privacy, security, and regulatory concerns. This hinders widespread adoption and research into real-time adaptive learning based on affective states.
                    </p>
                  </div>
                </div>
              ) : section.id === 'objectives' ? (
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <ol className="list-decimal pl-5 text-gray-600 space-y-4">
                    <li className="flex items-start">
                      <span className="font-semibold text-blue-700 mr-2">1.</span>
                      <span>Develop an adaptive gamification system with real-time emotional feedback to enhance engagement and tailor learning experiences based on students affective states.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-blue-700 mr-2">2.</span>
                      <span>Implement personalized academic content delivery combined with future predictive analytics to dynamically adjust learning pathways and anticipate student progress.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-blue-700 mr-2">3.</span>
                      <span>Create an adaptive listening activity system that accurately assesses and classifies student proficiency across multiple listening sub-skills, enabling targeted and effective skill development.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-blue-700 mr-2">4.</span>
                      <span>Design and integrate interactive reading activities that complement listening exercises to support comprehensive language skill acquisition for students aged 10–12.</span>
                    </li>
                  </ol>
                </div>
              ) : section.id === 'technologies' ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                  {[
                    { name: 'React', url: 'https://reactnative.dev/img/header_logo.svg' },
                    { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                    { name: 'TensorFlow', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
                    { name: 'Flask', url: 'https://icon.icepanel.io/Technology/png-shadow-512/Flask.png' },
                    { name: 'MongoDB', url: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg' },
                    { name: 'Vercel', url: 'https://www.svgrepo.com/show/354513/vercel-icon.svg' },
                  ].map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center group">
                      <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                        <img src={tech.url} alt={tech.name} className="h-16 w-16 object-contain" />
                      </div>
                      <span className="mt-3 text-sm text-gray-700 font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <p className="text-gray-600 text-justify leading-relaxed">{section.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectScopeSection
