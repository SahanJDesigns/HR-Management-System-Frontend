
import React from 'react';
import { CardTitle, Card, CardContent, CardHeader, CardDescription } from '@/components/ui/card';
import { Avatar,AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Icon, Mail, Phone, Verified } from 'lucide-react';




const EmployeeCard = ({ name, role }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      {/* Placeholder for Profile Picture */}
      <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
        {/* Optionally, you can add a text or icon here */}
        <span className="text-gray-400">Profile</span>
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">{role}</p>
      <button className="mt-4 bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700">
        View
      </button>
    </div>
  );
};

export default EmployeeCard;



//
