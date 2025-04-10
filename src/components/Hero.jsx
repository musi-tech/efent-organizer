import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import InquiryForm from "./InquiryForm";
import vid from "../assets/vid.webm";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoLoaded: false,
      showAd: true,
      adSkippable: false,
      showInquiryForm: false, // Added state for form
    };
  }

  handleVideoCanPlayThrough = () => {
    this.setState({ videoLoaded: true });
  };

  componentDidMount() {
    this.adSkipTimer = setTimeout(() => {
      this.setState({ adSkippable: true });
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.adSkipTimer);
  }

  handleSkipAd = () => {
    this.setState({ showAd: false });
  };

  toggleInquiryForm = () => {
    this.setState((prevState) => ({
      showInquiryForm: !prevState.showInquiryForm,
    }));
  };

  render() {
    const { videoLoaded, showAd, adSkippable, showInquiryForm } = this.state;

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
            src={vid}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onLoadedData={this.handleVideoCanPlayThrough}
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

        {/* Inquire Now Button */}
        <button
  onClick={this.toggleInquiryForm}
  className="absolute top-1/2 right-6 transform -translate-y-1/2 px-6 py-3 rounded-full z-20 font-medium flex items-center group transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400/50 backdrop-blur-md bg-white/10 border border-pink-500/30 shadow-[0_8px_30px_rgb(255,105,180,0.12)] hover:shadow-[0_8px_30px_rgb(255,105,180,0.3)]"
>
  <span className="text-pink-200 group-hover:text-white transition-all duration-300 mr-2 tracking-wide font-semibold drop-shadow-md">
    Inquire Now
  </span>
  <svg
    className="w-5 h-5 text-pink-300 group-hover:translate-x-1 group-hover:text-white transition-all duration-300"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
  </svg>

  {/* Neon Side Glow Effects */}
  <span className="absolute top-1/2 left-0 h-[60%] w-1 bg-pink-500 rounded-full blur-sm opacity-70 animate-pulse -translate-y-1/2"></span>
  <span className="absolute top-1/2 right-0 h-[60%] w-1 bg-purple-500 rounded-full blur-sm opacity-70 animate-pulse -translate-y-1/2"></span>
</button>


        {/* Inquiry Form */}
        {showInquiryForm && <InquiryForm onClose={this.toggleInquiryForm} />}
      </section>
    );
  }
}

export default Hero;
