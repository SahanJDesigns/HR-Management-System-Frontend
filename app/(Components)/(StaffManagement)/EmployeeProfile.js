import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

const EmployeeProfile = () => {
  const employee = {
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    supervisorId: "SUP123",
    birthDate: "1990-01-01",
    maritalStatus: "Married",
    nic: "123456789",
    address: "123 Main St, Anytown, USA",
    jobTitle: "Software Engineer",
    payGrade: "PG-5",
    department: "Engineering",
    profilePicture: "https://via.placeholder.com/150",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?fit=crop&w=1920&q=80"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Card with Gradient */}
      <div className="relative z-10 max-w-4xl mx-auto shadow-lg rounded-lg p-6 bg-gradient-to-br from-white via-gray-100 to-transparent backdrop-blur-md">
        <div className="flex">
          {/* Profile Picture on the Left */}
          <div className="flex-shrink-0">
            <img
              src={employee.profilePicture}
              alt={`${employee.firstName} ${employee.lastName}`}
              className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover shadow-lg"
            />
          </div>

          {/* User Details on the Right */}
          <div className="ml-8 flex-1">
            <CardHeader>
              <h2 className="text-3xl font-bold text-gray-800">{`${employee.firstName} ${employee.lastName}`}</h2>
              <p className="text-sm text-gray-500">@{employee.username}</p>
            </CardHeader>
            <CardContent className="mt-4">
              {/* Personal Information */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Information</h3>
                  <ul className="space-y-1 text-sm">
                    <li><strong>Supervisor ID:</strong> {employee.supervisorId}</li>
                    <li><strong>Date of Birth:</strong> {employee.birthDate}</li>
                    <li><strong>Marital Status:</strong> {employee.maritalStatus}</li>
                    <li><strong>NIC:</strong> {employee.nic}</li>
                    <li><strong>Address:</strong> {employee.address}</li>
                  </ul>
                </div>

                {/* Job Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Job Details</h3>
                  <ul className="space-y-1 text-sm">
                    <li><strong>Job Title:</strong> {employee.jobTitle}</li>
                    <li><strong>Pay Grade:</strong> {employee.payGrade}</li>
                    <li><strong>Department:</strong> {employee.department}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </div>
        </div>

        {/* Footer with Edit Button */}
        <CardFooter className="mt-6 flex justify-end">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow-sm">
            Edit Profile
          </button>
        </CardFooter>
      </div>
    </div>
  );
};

export default EmployeeProfile;




