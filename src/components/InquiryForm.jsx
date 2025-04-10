import React, { Component } from "react";

const categories = [
  "Wedding Venues", "Caterers", "Wedding Invitations", "Wedding Gifts",
  "Wedding Photographers", "Wedding Music", "Wedding Transportation", "Tent House",
  "Wedding Entertainment", "Florists", "Wedding Planners", "Wedding Videography",
  "Honeymoon", "Wedding Decorators", "Wedding Cakes", "Wedding DJ", "Pandits",
  "Photobooth", "Astrologers", "Party Places", "Wedding Choreographers",
  "Bridal Jewellery", "Bridal Makeup Artists", "Bridal Lehenga", "Mehndi Artists",
  "Makeup Salon", "Trousseau Packing", "Grooms", "Sherwani"
];

class InquiryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      searchTerm: "",
      requirement: "",
      name: "",
      contactNumber: "",
      formSubmitted: false,
      submitMessage: ""
    };
  }

  handleSubmitRequirement = () => {
    const { location, searchTerm, requirement, name, contactNumber } = this.state;
    if (!location || !searchTerm || !requirement || !name || !contactNumber) {
      alert("Please fill in all fields!");
      return;
    }

    this.setState({ 
      formSubmitted: true,
      submitMessage: `Name: ${name}\nContact: ${contactNumber}\nCategory: ${searchTerm}\nLocation: ${location}\nRequirement: ${requirement}`
    });

    // Reset form after 3 seconds and close it
    setTimeout(() => {
      this.setState({ 
        location: "", 
        searchTerm: "", 
        requirement: "",
        name: "",
        contactNumber: "",
        formSubmitted: false
      });
      
      if (this.props.onClose) {
        this.props.onClose();
      }
    }, 3000);
  };

  render() {
    const { location, searchTerm, requirement, name, contactNumber, formSubmitted, submitMessage } = this.state;
    const { onClose } = this.props;

    return (
      <div className="fixed inset-0 flex items-center justify-center p-4 z-30">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        ></div>
        
        {/* Form Container */}
        <div className="w-full max-w-md md:max-w-lg bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-5 md:p-6 border border-white/20 z-40 animate-fade-in-up">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-800 hover:text-pink-600 bg-white/50 hover:bg-white/80 rounded-full p-1 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <h3 className="text-xl md:text-2xl font-bold text-center mb-5 md:mb-6 text-pink-600">
            Tell us what you need
          </h3>

          {formSubmitted ? (
            <div className="bg-green-500/90 text-white p-4 rounded-xl text-center">
              <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <p className="font-semibold text-lg">Thank you for your submission!</p>
              <p className="text-sm mt-2 whitespace-pre-line">{submitMessage}</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {/* Name Field */}
              <div className="group">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                  value={name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>

              {/* Contact Number Field */}
              <div className="group">
                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                  value={contactNumber}
                  onChange={(e) => this.setState({ contactNumber: e.target.value })}
                />
              </div>

              <div className="group">
                <select
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                  value={searchTerm}
                  onChange={(e) => this.setState({ searchTerm: e.target.value })}
                >
                  <option value="">Select Vendor Category</option>
                  {categories.map((cat, idx) => (
                    <option key={idx} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="group">
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                  value={location}
                  onChange={(e) => this.setState({ location: e.target.value })}
                />
              </div>

              <div className="group">
                <textarea
                  placeholder="Describe your requirement"
                  className="w-full px-4 py-3 h-28 rounded-xl border border-gray-300 bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-transparent transition-all duration-300 resize-none placeholder-gray-500"
                  value={requirement}
                  onChange={(e) => this.setState({ requirement: e.target.value })}
                ></textarea>
              </div>

              <button
                onClick={this.handleSubmitRequirement}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-pink-600 hover:to-purple-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 shadow-lg font-medium"
              >
                Submit Requirement
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default InquiryForm;