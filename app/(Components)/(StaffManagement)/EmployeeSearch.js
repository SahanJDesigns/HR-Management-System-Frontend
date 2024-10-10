



import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import EmployeeCard from "./EmployeeCard";
import { useEffect, useState } from "react";
import axios from 'axios';

const EmployeeSearch = () => {
    const [employees, setEmployees] = useState([]); // Ensure this is initialized as an array
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const token = localStorage.getItem('authToken'); // Retrieve token from local storage
                const res = await axios.get('http://localhost:5000/users', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Set the token in the Authorization header
                    },
                    withCredentials: true,
                });

                console.log("API Response:", res.data); // Log the response to see its structure

                // Ensure the response is in the expected format
                if (Array.isArray(res.data)) {
                    setEmployees(res.data); // Assuming the API returns the user data directly as an array
                } else {
                    setError('Unexpected data format');
                }
            } catch (error) {
                setError('Error fetching employee data: ' + error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <div className="flex flex-row items-center justify-between">
                        {/* search bar */}
                        <div className="relative flex items-center space-x-2 p-2 rounded-xl w-1/2">
                            <Search className="absolute left-8 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <Input
                                type="text"
                                placeholder="Search"
                                className="h-10 pl-10 rounded-md focus:outline-none focus:border-none"
                            />
                        </div>
                        {/* toggle group */}
                        <div className="flex ml-auto items-center space-x-4">
                            <ToggleGroup type="multiple">
                                <ToggleGroupItem value="all">All</ToggleGroupItem>
                                <ToggleGroupItem value="active">Active</ToggleGroupItem>
                                <ToggleGroupItem value="inactive">Inactive</ToggleGroupItem>
                            </ToggleGroup>
                        </div>
                    </div>
                </CardTitle>
                <CardContent className="grid grid-cols-3 gap-4">
                    {employees.map((employee) => (
                        <EmployeeCard
                            key={employee.user_id} // Adjust according to your API response
                            name={employee.username} // Adjust based on your data structure
                            role={employee.role}
                        />
                    ))}
                </CardContent>
            </CardHeader>
        </Card>
    );
};

export default EmployeeSearch;



