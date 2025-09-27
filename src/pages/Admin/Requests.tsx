import { useState } from "react";
import { Search, Filter, Clock, CheckCircle, XCircle } from "lucide-react";

interface Request {
  id: number;
  type: string;
  requester: string;
  description: string;
  status: string;
  date: string;
  priority: string;
}

const sampleRequests: Request[] = [
  {
    id: 1,
    type: "Doctor Registration",
    requester: "Dr. Sarah Johnson",
    description: "New doctor registration request",
    status: "Pending",
    date: "2023-12-15",
    priority: "High",
  },
  {
    id: 2,
    type: "Patient Data Access",
    requester: "Dr. Michael Chen",
    description: "Request to access patient medical records",
    status: "Approved",
    date: "2023-12-14",
    priority: "Medium",
  },
  {
    id: 3,
    type: "System Access",
    requester: "Nurse Emily White",
    description: "Request for additional system permissions",
    status: "Pending",
    date: "2023-12-13",
    priority: "Low",
  },
];

const Requests = () => {
  const [requests] = useState<Request[]>(sampleRequests);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRequests = requests.filter(
    (request) =>
      request.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.requester.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Requests</h1>
      </div>

      {/* Search and Actions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
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
                placeholder="Search requests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Type
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Requester
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Description
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Status
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Date
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((request) => (
                <tr
                  key={request.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span className="font-medium text-gray-900">
                        {request.type}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-900">
                    {request.requester}
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    {request.description}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        request.status === "Pending"
                          ? "bg-orange-100 text-orange-800"
                          : request.status === "Approved"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {request.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{request.date}</td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-2">
                      {request.status === "Pending" && (
                        <>
                          <button className="flex items-center space-x-1 bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition-colors">
                            <CheckCircle size={16} />
                            <span>Approve</span>
                          </button>
                          <button className="flex items-center space-x-1 bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition-colors">
                            <XCircle size={16} />
                            <span>Reject</span>
                          </button>
                        </>
                      )}
                      {request.status === "Approved" && (
                        <span className="text-green-600 font-medium">
                          Approved
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
    </div>
  );
};

export default Requests;
