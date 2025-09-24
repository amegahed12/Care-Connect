/**
 * PatientsTable component
 * Displays patients in a table with basic info
 * Future: add pagination, filtering, actions
 */

import { useState } from "react";

interface Patient {
  id: number;
  name: string;
  age: number;
  condition: string;
  registered: string;
}

const samplePatients: Patient[] = [
  {
    id: 1,
    name: "John Doe",
    age: 34,
    condition: "Diabetes",
    registered: "2023-01-14",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 28,
    condition: "Asthma",
    registered: "2023-03-22",
  },
  {
    id: 3,
    name: "Michael Johnson",
    age: 45,
    condition: "Hypertension",
    registered: "2022-11-05",
  },
];

const PatientsTable = () => {
  const [patients] = useState<Patient[]>(samplePatients);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-100 text-slate-700">
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Age</th>
            <th className="px-6 py-3">Condition</th>
            <th className="px-6 py-3">Registered</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id} className="border-b hover:bg-slate-50">
              <td className="px-6 py-4">{p.name}</td>
              <td className="px-6 py-4">{p.age}</td>
              <td className="px-6 py-4">{p.condition}</td>
              <td className="px-6 py-4">{p.registered}</td>
              <td className="px-6 py-4">
                <button className="text-blue-600 hover:underline mr-3">
                  Edit
                </button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientsTable;
