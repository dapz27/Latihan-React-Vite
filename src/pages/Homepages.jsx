import React from 'react';

const Homepages = () => {
  return (
    <div className="container mx-auto px-6">
      {/* Hero Section */}
      <section className="hero py-20 flex flex-col md:flex-row items-center justify-between gap-8" id="Home">
        <div className="hero-image w-full md:w-1/2 flex justify-center">
          <img 
            src="https://carisinyal.com/wp-content/uploads/2015/12/Home-Workout-No-Equipment_.webp" 
            alt="gym images" 
            className="w-[400px] h-auto rounded-xl shadow-lg" 
          />
        </div>

        <div className="hero-text w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to <span className="text-red-500">Our Website</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Selamat datang di website kami, disini kami menjual berbagai aplikasi kebugaran tubuh yang dapat 
            membantu anda untuk olahraga dirumah, kami menyediakan beberapa aplikasi yang bisa anda gunakan untuk kesehatan tubuh.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about py-20" id="about">
        <h2 className="text-3xl font-bold text-center mb-8">About <span className='text-red-500'>us</span></h2>
        <p className="text-gray-500 text-center max-w-3xl mx-auto text-lg leading-relaxed">
          Disini kami menyediakan berbagai layanan yang akan tertera dimenu bawah ini ,di website ini
          pengguna bisa memilihi aplikasi yang ingin digunakan untuk memulai latihan kebugaran,dan banyak
          lagi yang akan datang fitur-fitur yang akan ditambahkan ke website kami.
        </p>
      </section>

      {/* Our Services */}
      <section className="services py-20 bg-gray-100" id="services">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white shadow-lg p-6 rounded-xl w-80">
            <h3 className="font-bold text-lg mb-2">Healty care</h3>
            <p className="text-gray-600">improve your body.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl w-80">
            <h3 className="font-bold text-lg mb-2">Consult Fit</h3>
            <p className="text-gray-600">Consult about your problem.</p>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <div className="bg-white shadow-lg p-6 rounded-xl w-80">
            <h3 className="font-bold text-lg mb-2">Influencer Gym</h3>
            <p className="text-gray-600">Collaborate with us.</p>
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section className="projects py-20" id="projects">
  <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
  <div className="flex flex-wrap justify-center gap-6">
    <div className="bg-white shadow-lg p-6 rounded-xl w-80">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBeuKu_s5zDBRp3aXppv_7dFbNPyOwahNg6A&s" alt="Project 1" className="w-full h-40 object-cover rounded-xl mb-4" />
      <h3 className="font-bold text-lg mb-2">Project 1</h3>
      <p className="text-gray-600">Lebih diutamakan untuk wanita.</p>
    </div>
    <div className="bg-white shadow-lg p-6 rounded-xl w-80">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95y5zTPjjcFFvCDKke3fAsZvWAqDowsyOnw&s" alt="Project 2" className="w-full h-40 object-cover rounded-xl mb-4" />
      <h3 className="font-bold text-lg mb-2">Project 2</h3>
      <p className="text-gray-600">Bisa untuk semua kalangan.</p>
    </div>
  </div>
  <div className="flex justify-center mt-6">
    <div className="bg-white shadow-lg p-6 rounded-xl w-80">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlLecf36tZy4Xohb7X0k1NfM58ICfdL_tyGw&s" alt="Project 3" className="w-full h-40 object-cover rounded-xl mb-4" />
      <h3 className="font-bold text-lg mb-2">Project 3</h3>
      <p className="text-gray-600">gerakan menggunakan dumble.</p>
    </div>
  </div>
</section>
</div>
  );      
};

export default Homepages;
