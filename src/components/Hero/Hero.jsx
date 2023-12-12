const Hero = () => {
  return (
    <div className="hero py-20 bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/NN3pKTD/jahedpp-removebg-preview.png" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">This is Jahed. I am Professional <span className="text-bold text-red-600">MERN</span> Developer</h1>
      <p className="py-6 text-lg">I'm passionate about crafting immersive and dynamic web experiences, <br /> and I specialize in the MERN stack.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Hero;