import { Link } from "react-router-dom";
import { User, Stethoscope, ArrowRight, Activity, Heart, Users } from "lucide-react";
import HealthResources from "../components/common/HealthResources";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                <Activity className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Healthcare Reimagined for the Digital Age
            </h1>
            <p className="text-xl md:text-2xl text-white mb-10 opacity-90 drop-shadow-md">
              Connect with top doctors, manage your health records, and book appointments seamlessly. Quality care, anytime, anywhere.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/patient/register"
                className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/doctor/register"
                className="bg-blue-800/40 backdrop-blur-sm border-2 border-white/30 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 hover:border-white transition-all duration-300 flex items-center justify-center shadow-md"
              >
                Join as Doctor
              </Link>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 w-full leading-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white fill-current w-full h-16 md:h-32" preserveAspectRatio="none">
            <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">10k+</div>
              <div className="text-gray-600 font-medium">Happy Patients</div>
            </div>
            <div className="p-6 border-l-0 md:border-l border-r-0 md:border-r border-gray-100">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Certified Doctors</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Features */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Choose Your Path</h2>
            <p className="mt-4 text-xl text-gray-600">Tailored experiences for every user</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Patient Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                  <User className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Patients</h3>
                <p className="text-gray-600 mb-6">
                  Access healthcare services from home. Book appointments, view history, and consult remotely.
                </p>
                <ul className="space-y-3 mb-8 text-gray-600">
                  <li className="flex items-center"><Heart className="w-4 h-4 text-green-500 mr-2" /> Easy Scheduling</li>
                  <li className="flex items-center"><Heart className="w-4 h-4 text-green-500 mr-2" /> Secure Records</li>
                  <li className="flex items-center"><Heart className="w-4 h-4 text-green-500 mr-2" /> Remote Consults</li>
                </ul>
                <div className="space-y-3">
                  <Link to="/patient/register" className="block w-full bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                    Register Now
                  </Link>
                  <Link to="/patient/login" className="block w-full border border-green-600 text-green-600 text-center py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold">
                    Login
                  </Link>
                </div>
              </div>
            </div>

            {/* Doctor Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Stethoscope className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Doctors</h3>
                <p className="text-gray-600 mb-6">
                  Manage your practice efficiently. View patient history, schedule, and expand your reach.
                  {/* both cards should have the same number of lines so the buttons align better*/}
                  <br></br><br></br>
                </p>
                <ul className="space-y-3 mb-8 text-gray-600">
                  <li className="flex items-center"><Users className="w-4 h-4 text-blue-500 mr-2" /> Patient Management</li>
                  <li className="flex items-center"><Users className="w-4 h-4 text-blue-500 mr-2" /> Digital Prescriptions</li>
                  <li className="flex items-center"><Users className="w-4 h-4 text-blue-500 mr-2" /> Flexible Schedule</li>
                </ul>
                <div className="space-y-3">
                  <Link to="/doctor/register" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Join Network
                  </Link>
                  <Link to="/doctor/login" className="block w-full border border-blue-600 text-blue-600 text-center py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Health Resources Section */}
      <HealthResources />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <span className="text-2xl font-bold">Care Connect</span>
              </div>
              <p className="text-gray-400 max-w-sm">
                Revolutionizing healthcare delivery through secure, accessible, and efficient telemedicine solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/patient/login" className="hover:text-white transition-colors">Patient Portal</Link></li>
                <li><Link to="/doctor/login" className="hover:text-white transition-colors">Doctor Portal</Link></li>
                <li><Link to="/admin/login" className="hover:text-white transition-colors">Admin Access</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@careconnect.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Health Street, Medical District</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; 2025 Care Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

