
const Bio = () => {

    const handleDownload = () => {
      const downloadLink = document.createElement('a');
      downloadLink.href = 'CVOfMdJahedMiahWebDev.pdf';
      downloadLink.download = 'CVOfMdJahedMiahWebDev.pdf';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

    };

  return (
    <div className="hero py-20 bg-base-600">
    <div className="hero-content">
      <div className="mr-20">
      <img src="https://i.ibb.co/NN3pKTD/jahedpp-removebg-preview.png" className="max-w-sm rounded-lg shadow-2xl" />
      </div>
      <div className="p-10 mb-5">
        <h1 className="text-5xl font-bold">My Bio</h1>
        <p className="py-6 text-lg">I have been passionating about front-end development since my college days, and now seeking a new challenge. I think my knowledge and skills in HTML, CSS, JavaScript, and React make me perfect for this role. As well as i have good knowledge of node js, Express js and next js. I’ve worked on the web development of projects during my bachelor's.</p>
    <div>
        <label>HTML5</label>
    <input type="range" min={0} max="100" value="95" className="range range-primary" />
    <label>CSS</label>
    <input type="range" min={0} max="100" value="90" className="range range-primary" />
    <label>Bootstrap</label>
    <input type="range" min={0} max="100" value="90" className="range range-primary" />
    <label>Tailwind css</label>
    <input type="range" min={0} max="100" value="90" className="range range-primary" />
    <label>Javascript</label>
    <input type="range" min={0} max="100" value="80" className="range range-primary" />
    <label>React</label>
    <input type="range" min={0} max="100" value="80" className="range range-primary" />
    </div>
    <div>
    <button className="btn btn-primary mr-2">Hire me</button>
    <button className="btn btn-primary" onClick={handleDownload}>Download CV</button>
    </div>
      </div>
    </div>
  </div>
  )
}

export default Bio;