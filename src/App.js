import React from 'react';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-300`}>
      <header className={`py-8 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} bg-opacity-90 backdrop-blur-md z-10 relative`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <svg
              className="w-8 h-8 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L5 9h2l-3 4h3l-2 4h14l-2-4h3l-3-4h2L12 2z M12 17v5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="text-2xl font-bold">Alexandria Johnson Karimi, MSW, CSWA</h1>
          </div>
          <button 
            onClick={toggleDarkMode} 
            className={`p-2 rounded-full ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
            } focus:outline-none flex items-center justify-center`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-md`}>
              {isDarkMode ? (
                <svg
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Welcome to Forest Breath Therapy</h2>
          <p className="text-lg mb-8">
            I am Alexandria Johnson Karimi, a clinical social work associate (CSWA, MSW), practicing under supervision, dedicated to providing trauma-informed mental health therapy in Portland, OR.
          </p>
          <a
            href="#services"
            className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full transition-transform duration-300 transform hover:scale-105 focus:outline-none"
          >
            View Services
          </a>
        </section>
        <section className="mb-16" id="about">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">About Me</h3>
              <p className="text-lg mb-4">
                With a Bachelor's degree from University of Oregon and a Master's in Social Work (MSW) from Capella University, I bring a wealth of knowledge and experience to my practice.
              </p>
              <p className="text-lg mb-4">
                I am committed to social justice, diversity, and serving low-income populations. My approach is trauma-informed, ensuring a safe and supportive environment for all clients.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img src="https://media.licdn.com/dms/image/v2/D5603AQHs7vYGpj8Ewg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731450693151?e=1741824000&v=beta&t=aXm-pJXbrePubTp3WvAQ-nG7skShF43ymCKXFqZfw8M" alt="Alexandria Johnson Karimi" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>
        
        <section className="mb-16" id="services">
          <h3 className="text-3xl font-bold text-center mb-8">Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105`}>
              <h4 className="text-xl font-bold mb-4">Individual Therapy</h4>
              <p className="text-lg mb-4">
                Tailored sessions to address personal challenges and promote overall well-being.
              </p>
            </div>
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105`}>
              <h4 className="text-xl font-bold mb-4">Couples Therapy</h4>
              <p className="text-lg mb-4">
                Collaborative sessions to strengthen relationships and resolve conflicts.
              </p>
            </div>
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105`}>
              <h4 className="text-xl font-bold mb-4">Group Therapy</h4>
              <p className="text-lg mb-4">
                Supportive group settings for shared learning and growth.
              </p>
            </div>
          </div>
        </section>

        

        <section className="mb-16" id="testimonials">
          <h3 className="text-3xl font-bold text-center mb-8">Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md`}>
              <p className="text-lg mb-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p className="text-gray-600 dark:text-gray-400">- Jane Doe</p>
            </div>
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md`}>
              <p className="text-lg mb-4">
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              </p>
              <p className="text-gray-600 dark:text-gray-400">- John Smith</p>
            </div>
          </div>
        </section>


        <section className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-16 text-center rounded-lg shadow-lg mb-16`}>
          <h3 className="text-3xl font-bold mb-8">Contact Me</h3>
          <p className="text-lg mb-8">
            Ready to take the first step towards healing and growth? Contact me today to schedule an appointment.
          </p>
          <a
            href="mailto:alexandria@mentalhealthservices.com"
            className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full transition-transform duration-300 transform hover:scale-105 focus:outline-none"
          >
            Email Me
          </a>
        </section>

        
      </main>
      <footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} text-center py-8`}>
        <p className="text-lg">© 2024 Alexandria Johnson Karimi, MSW, CSWA. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;