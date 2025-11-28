import { useState } from "react";
import { Search, Plus, Filter } from "lucide-react";
import mockData from "../../data/mockData.json";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  status: string;
  email: string;
  phone: string;
  avatarUrl: string;
  verified: boolean;
  joinDate: string;
  appointments: number;
}

const ManageDoctors = () => {
  const [doctors, setDoctors] = useState<Doctor[]>(mockData.doctors);
  const [searchTerm, setSearchTerm] = useState("");

  const handleToggleStatus = (doctorId: number) => {
    setDoctors((prev) =>
      prev.map((doctor) =>
        doctor.id === doctorId
          ? {
              ...doctor,
              status: doctor.status === "Active" ? "Inactive" : "Active",
            }
          : doctor
      )
    );
  };

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Manage Doctors</h1>
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

      {/* Sub-section */}
      <div className="flex items-center space-x-2">
        <span className="text-gray-600">Patients</span>
      </div>

      {/* Search and Actions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Sort by
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Filter size={16} />
              <span>Filter</span>
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
              <Plus size={20} />
              <span>Add New Doctor</span>
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
                        src={doctor.avatarUrl}
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
                        doctor.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : doctor.status === "Inactive"
                          ? "bg-red-100 text-red-800"
                          : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      {doctor.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={doctor.status === "Active"}
                          onChange={() => handleToggleStatus(doctor.id)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
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

export default ManageDoctors;
