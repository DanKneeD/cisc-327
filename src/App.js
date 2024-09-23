import React from "react";
import "./index.css";
import backgroundImage from "./assests/images/background.jpg";
import tempPerson from "./assests/images/temp_person.jpg";
import ari from "./assests/images/ari.png";
import dan from "./assests/images/dan.png";
import arda from "./assests/images/arda.png";
import andrew from "./assests/images/andrew.png";

function App() {
  return (
    <div className='text-center font-roman scroll-smooth'>
      {/* Header with 4 buttons */}
      <header className='bg-gray-800'>
        <nav className='flex items-center justify-between p-3'>
          {/* Left Navigation Links */}
          <h1 className='relative font-bold text-white'>Cisc 322</h1>

          {/* Center Title */}

          {/* Right Navigation Links */}
          <ul className='flex'>
            <li className='mx-4'>
              <a href='#the-team' className='text-white hover:text-gray-400 text-center'>
                The Team
              </a>
            </li>
            <li className='mx-4'>
              <a href='#a1' className='text-white hover:text-gray-400'>
                A1
              </a>
            </li>
            <li className='mx-4'>
              <a href='#a2' className='text-white hover:text-gray-400'>
                A2
              </a>
            </li>
            <li className='mx-4'>
              <a href='#a3' className='text-white hover:text-gray-400'>
                A3
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Team Name Section */}
      <section
        id='team-name'
        className='relative flex items-center justify-center h-screen bg-cover bg-center'
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay */}
        <div className='absolute inset-0 bg-black opacity-50'></div>
        {/* Team Name */}
        <h1 className='relative text-6xl font-roman text-white'>Team XI</h1>
      </section>

      {/* The Team for 6 people and photos */}
      <section id='the-team' className='my-8'>
        <h2 className='text-3xl font-semibold text-center mb-6'>The Team</h2>
        <div className='flex flex-wrap justify-center'>
          {/* Team Member 1 */}
          <div className='team-member m-4 text-center'>
            <img src={arda} alt='Member 1' className='w-40 h-40 rounded-full mx-auto' />
            <p className='mt-2 font-medium'>Arda</p>
          </div>
          {/* Team Member 2 */}
          <div className='team-member m-4 text-center'>
            <img src={andrew} alt='Member 2' className='w-40 h-40 rounded-full mx-auto' />
            <p className='mt-2 font-medium'>Andrew</p>
          </div>
          {/* Team Member 3 */}
          <div className='team-member m-4 text-center'>
            <img src={ari} alt='Member 3' className='w-40 h-40 rounded-full mx-auto' />
            <p className='mt-2 font-medium'>Ari</p>
          </div>
          {/* Team Member 4 */}
          <div className='team-member m-4 text-center'>
            <img src={tempPerson} alt='Member 4' className='w-40 h-40 rounded-full mx-auto' />
            <p className='mt-2 font-medium'>Kyra</p>
          </div>
          {/* Team Member 5 */}
          <div className='team-member m-4 text-center'>
            <img src={tempPerson} alt='Member 5' className='w-40 h-40 rounded-full mx-auto' />
            <p className='mt-2 font-medium'>Oliver</p>
          </div>
          {/* Team Member 6 */}
          <div className='team-member m-4 text-center'>
            <img src={dan} alt='Member 6' className='w-40 h-40 rounded-full mx-auto' />
            <p className='mt-2 font-medium'>Daniel</p>
          </div>
        </div>
      </section>
      {/* Section A1 */}
      <section id='a1' className='my-8 p-6 border-t border-gray-200'>
        <h2 className='text-2xl font-semibold text-center'>A1</h2>
        <p className='mt-4 text-center max-w-2xl mx-auto'>Content for A1 section.</p>
      </section>
      {/* Section A2 */}
      <section id='a2' className='my-8 p-6 border-t border-gray-200'>
        <h2 className='text-2xl font-semibold text-center'>A2</h2>
        <p className='mt-4 text-center max-w-2xl mx-auto'>Content for A2 section.</p>
      </section>
      {/* Section A3 */}
      <section id='a3' className='my-8 p-6 border-t border-gray-200'>
        <h2 className='text-2xl font-semibold text-center'>A3</h2>
        <p className='mt-4 text-center max-w-2xl mx-auto'>Content for A3 section.</p>
      </section>
    </div>
  );
}

export default App;
