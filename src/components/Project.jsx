const Project = () => {
  return (
    <div id="project" className="bg-[#222831] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        <h1 data-aos="flip-up" data-aos-duration="200" className="text-4xl md:text-5xl font-bold text-center text-[#00ADB5]">
          My Projects
        </h1>

        {/* Recipe App Project */}
        <div data-aos="fade-up" className="w-full md:w-1/2 flex flex-col items-center bg-[#393E46] p-6 rounded-2xl shadow-lg">
          <h1 className="text-[#00ADB5] font-extrabold text-[32px] mb-4">
            Recipe App
          </h1>
          <p className="text-lg text-[#fff] mb-4">
            A full-stack recipe application built with MERN stack, featuring user authentication, recipe management, and search functionality.
          </p>
          <a
            href="https://github.com/MrXhibit/Recipe-App"
            className="text-[#00ADB5] font-bold text-lg hover:underline"
          >
            View Project
          </a>
        </div>

        {/* Chattty Project */}
        <div data-aos="fade-up" className="w-full md:w-1/2 flex flex-col place-self-end bg-[#393E46] p-6 rounded-2xl shadow-lg">
          <h1 className="text-center text-[#00ADB5] font-extrabold text-[32px] mb-4">
            Chattty
          </h1>
          <p className="text-lg text-[#fff] mb-4">
            A real-time chat application built with React, Node.js, and Socket.io, featuring instant messaging and user presence.
          </p>
          <a
            href="https://github.com/MrXhibit/Chattty"
            className="text-center text-[#00ADB5] font-bold text-lg hover:underline"
          >
            View Project
          </a>
        </div>

        {/* Todo List Project */}
        <div data-aos="fade-up" className="w-full md:w-1/2 flex flex-col items-center bg-[#393E46] p-6 rounded-2xl shadow-lg">
          <h1 className="text-[#00ADB5] font-extrabold text-[32px] mb-4">
            Todo List
          </h1>
          <p className="text-lg text-[#fff] mb-4">
            A React Native todo application with local storage, featuring CRUD operations and a clean, intuitive interface.
          </p>
          <a
            href="https://github.com/MrXhibit/Todo-list"
            className="text-[#00ADB5] font-bold text-lg hover:underline"
          >
            View Project
          </a>
        </div>

        {/* Mikasa AI Project */}
        <div data-aos="fade-up" className="w-full md:w-1/2 flex flex-col place-self-end bg-[#393E46] p-6 rounded-2xl shadow-lg">
          <h1 className="text-center text-[#00ADB5] font-extrabold text-[32px] mb-4">
            Mikasa AI
          </h1>
          <p className="text-lg text-[#fff] mb-4">
            An AI-powered content generation application built with React.js and OpenAI API, featuring dark mode and smooth animations.
          </p>
          <a
            href="https://github.com/MrXhibit/Mikasa-Ai"
            className="text-center text-[#00ADB5] font-bold text-lg hover:underline"
          >
            View Project
          </a>
        </div>

        {/* Landing Page Project */}
        <div data-aos="fade-up" className="w-full md:w-1/2 flex flex-col items-center bg-[#393E46] p-6 rounded-2xl shadow-lg">
          <h1 className="text-[#00ADB5] font-extrabold text-[32px] mb-4">
            Landing Page
          </h1>
          <p className="text-lg text-[#fff] mb-4">
            A modern, responsive landing page built with HTML, CSS, and JavaScript, featuring smooth animations and a clean design.
          </p>
          <a
            href="https://github.com/MrXhibit/Landing-Page"
            className="text-[#00ADB5] font-bold text-lg hover:underline"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
