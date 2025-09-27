/**
 * ManagePatients page
 * Shows a list of patients with search, filters, and actions
 */

import PatientsTable from "../../components/admin/PatientsTable";

const ManagePatients = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Manage Patients</h2>
      <PatientsTable />
    </div>
  );
};

export default ManagePatients;
