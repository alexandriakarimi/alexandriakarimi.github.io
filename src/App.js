import React from 'react';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} min- transition-colors duration-300`}>
      <header className="py-8 px-4 bg-opacity-90 backdrop-blur-md z-10 relative">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <svg
              className="w-8 h-8 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 22h20L12 2z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="text-2xl font-bold">Alexandria Johnson Karimi, MSW, CSWA</h1>
          </div>
          <button onClick={toggleDarkMode} className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full focus:outline-none">
            {isDarkMode ? (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 18a6 6 0 110-12 6 6 0 010 12zm0-2a4 4 0 100-8 4 4 0 000 8zm-8 7h16a1 1 0 001-1V4a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3v1M12 21v1M4.757 4.757l1.414 1.414M18.243 18.243l1.414 1.414M1.586 12.879l1.414-1.414M19.014 11.121l1.414-1.414M12 20h1M12 4h1M4.757 19.243l1.414-1.414M18.243 5.757l1.414-1.414M1.586 11.121l1.414 1.414M19.014 12.879l1.414 1.414"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
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
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
              <h4 className="text-xl font-bold mb-4">Individual Therapy</h4>
              <p className="text-lg mb-4">
                Tailored sessions to address personal challenges and promote overall well-being.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
              <h4 className="text-xl font-bold mb-4">Couples Therapy</h4>
              <p className="text-lg mb-4">
                Collaborative sessions to strengthen relationships and resolve conflicts.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
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
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <p className="text-lg mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p className="text-gray-600 dark:text-gray-400">- Jane Doe</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <p className="text-lg mb-4">
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              </p>
              <p className="text-gray-600 dark:text-gray-400">- John Smith</p>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 dark:bg-gray-800 p-16 text-center rounded-lg shadow-lg mb-16">
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
      <footer className="bg-gray-200 dark:bg-gray-700 text-center py-8">
        <p className="text-lg">© 2024 Alexandria Johnson Karimi, MSW, CSWA. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;