import { useState } from "react";
import { Search, FileText, Check, X } from "lucide-react";
import mockData from "../../data/mockData.json";

interface PendingDoctor {
  id: number;
  name: string;
  specialty: string;
  status: string;
  email: string;
  phone: string;
  avatar: string;
  documents: string[];
  submittedDate: string;
  experience: string;
}

const CredentialVerification = () => {
  
  // gonna fix this later, doctor credintals verfied by admin
  const [pendingDoctors, setPendingDoctors] = useState<PendingDoctor[]>(
    mockData.pendingVerifications
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("patients");

  const handleApprove = (doctorId: number) => {
    setPendingDoctors((prev) =>
      prev.map((doctor) =>
        doctor.id === doctorId ? { ...doctor, status: "Approved" } : doctor
      )
    );
  };

  const handleReject = (doctorId: number) => {
    setPendingDoctors((prev) =>
      prev.map((doctor) =>
        doctor.id === doctorId ? { ...doctor, status: "Rejected" } : doctor
      )
    );
  };

  const filteredDoctors = pendingDoctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">
          Credential Verification
        </h1>
        <div className="flex items-center space-x-4">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <img
              src="https://i.pravatar.cc/150?u=admin"
              alt="Admin"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <button className="text-blue-600 text-sm">Upload New Photo</button>
        </div>
      </div>

      {/* Tabs and Search */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("patients")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "patients"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Patients
            </button>
            <button
              onClick={() => setActiveTab("doctors")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "doctors"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Doctor Applications
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <FileText size={20} />
              <span>View Documents</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Name
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Specialty
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Status
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredDoctors.map((doctor) => (
                <tr
                  key={doctor.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={doctor.avatar}
                        alt={doctor.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-gray-900">
                          {doctor.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          ({doctor.specialty})
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-green-600 font-medium">Active</span>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        doctor.status === "Pending"
                          ? "bg-orange-100 text-orange-800"
                          : doctor.status === "Approved"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {doctor.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-2">
                      {doctor.status === "Pending" && (
                        <>
                          <button
                            onClick={() => handleApprove(doctor.id)}
                            className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-colors"
                          >
                            <Check size={16} />
                            <span>Approve</span>
                          </button>
                          <button
                            onClick={() => handleReject(doctor.id)}
                            className="flex items-center space-x-1 bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition-colors"
                          >
                            <X size={16} />
                            <span>Reject</span>
                          </button>
                        </>
                      )}
                      {doctor.status === "Approved" && (
                        <span className="text-green-600 font-medium">
                          Approved
                        </span>
                      )}
                      {doctor.status === "Rejected" && (
                        <span className="text-red-600 font-medium">
                          Rejected
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Save Changes Button */}
      <div className="flex justify-center">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default CredentialVerification;
