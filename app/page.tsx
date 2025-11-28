import Image from 'next/image';

interface Student {
  id: number;
  name: string;
  rollNumber: string;
  department: string;
  email: string;
  phone: string;
  imageUrl: string;
}

export default function StudentProfile() {
  // Student data as JSON object
  const student: Student = {
    id: 1,
    name: 'Arjun Kumar',
    rollNumber: 'CSE-2024-001',
    department: 'Computer Science and Engineering',
    email: 'arjun.kumar@university.edu',
    phone: '+91 98765 43210',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md w-full">
        {/* Header Background */}
        <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

        {/* Profile Section */}
        <div className="relative px-6 pb-6">
          {/* Profile Image */}
          <div className="flex justify-center -mt-16 mb-4">
            <div className="relative w-32 h-32">
              <Image
                src={student.imageUrl}
                alt={student.name}
                fill
                className="rounded-full object-cover border-4 border-white shadow-lg"
                priority
              />
            </div>
          </div>

          {/* Student Information */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">
              {student.name}
            </h1>
            <p className="text-indigo-600 font-semibold text-sm mb-4">
              {student.rollNumber}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {student.department}
            </p>
          </div>

          {/* Details Section */}
          <div className="space-y-4 border-t pt-6">
            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">Email</p>
                <p className="text-sm text-gray-700">{student.email}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">Phone</p>
                <p className="text-sm text-gray-700">{student.phone}</p>
              </div>
            </div>

            {/* ID */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H5a2 2 0 00-2 2v10a2 2 0 002 2h5m0 0h5a2 2 0 002-2v-10a2 2 0 00-2-2h-5m0 0V5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">Student ID</p>
                <p className="text-sm text-gray-700">{student.id}</p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-200">
            Contact Student
          </button>
        </div>
      </div>
    </div>
  );
}
