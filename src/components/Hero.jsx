import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoLoaded: false,
    };
  }

  handleVideoCanPlayThrough = () => {
    this.setState({ videoLoaded: true });
  };

  render() {
    const { videoLoaded } = this.state;

    return (
      <section
        id="hero"
        className="relative w-full overflow-hidden flex flex-col items-center justify-center bg-black"
      >
        {/* Video Container */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px] overflow-hidden">
          <video
            className={`absolute inset-0 w-full h-full object-cover brightness-[1.2] transition-opacity duration-500 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
            src={require("../assets/vid.webm")}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onCanPlayThrough={this.handleVideoCanPlayThrough}
          ></video>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Loading Placeholder */}
        {!videoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white">Loading...</div>
          </div>
        )}

        {/* Event Planner Nameplate - Positioned at the bottom */}
      {/* Mobile View - Show Only 'Get Started' Button */}
<div className="absolute inset-x-0 bottom-10 flex sm:hidden justify-center">
  <button className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full font-semibold">
    Get Started
  </button>
</div>

{/* Desktop View - Show Full Search Bar */}
<div className="absolute inset-x-0 bottom-1/2 translate-y-1/2 sm:bottom-20 w-full hidden sm:flex justify-center px-4">
  <div className="w-full flex items-center bg-white/20 backdrop-blur-md rounded-full shadow-md overflow-hidden max-w-3xl mx-auto">
    {/* City Dropdown */}
    <select className="px-4 py-3 bg-transparent text-white font-semibold rounded-l-full outline-none">
      <option className="text-black">Select City</option>
      <option className="text-black">Mumbai</option>
      <option className="text-black">Pune</option>
      <option className="text-black">Delhi</option>
      <option className="text-black">Bangalore</option>
    </select>

    {/* Search Input */}
    <input
      type="text"
      placeholder="Search for Venues, Caterers, Decorators..."
      className="flex-1 px-4 py-3 outline-none bg-transparent text-white placeholder-white"
    />

    {/* Plan Now Button */}
    <button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 font-semibold rounded-r-full">
      <FaSearch />
      Get Started
    </button>
  </div>
</div>


      </section>
    );
  }
}

export default Hero;
