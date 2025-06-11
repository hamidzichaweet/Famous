import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Plus, Search, Phone, Mail, MapPin } from "lucide-react";

const clients = [
  {
    id: 1,
    name: "أحمد محمد علي",
    email: "ahmed@example.com",
    phone: "+970-599-123456",
    address: "رام الله، فلسطين",
    activeCases: 2,
    totalCases: 5,
    status: "نشط",
    joinDate: "2023-01-15"
  },
  {
    id: 2,
    name: "فاطمة أحمد",
    email: "fatima@example.com",
    phone: "+970-599-654321",
    address: "نابلس، فلسطين",
    activeCases: 1,
    totalCases: 3,
    status: "نشط",
    joinDate: "2023-03-20"
  },
  {
    id: 3,
    name: "شركة النور التجارية",
    email: "info@alnoor.com",
    phone: "+970-599-789012",
    address: "الخليل، فلسطين",
    activeCases: 0,
    totalCases: 2,
    status: "غير نشط",
    joinDate: "2022-11-10"
  }
];

const getStatusColor = (status: string) => {
  return status === 'نشط' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
};

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').substring(0, 2);
};

export function ClientsManagement() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">إدارة العملاء</h1>
        <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
          <Plus className="h-4 w-4 ml-2" />
          عميل جديد
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="البحث في العملاء..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client) => (
          <Card key={client.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold">
                    {getInitials(client.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">{client.name}</CardTitle>
                  <Badge className={getStatusColor(client.status)} variant="secondary">
                    {client.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span className="ltr">{client.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span className="ltr">{client.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{client.address}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">{client.activeCases}</p>
                    <p className="text-xs text-gray-500">قضايا نشطة</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-600">{client.totalCases}</p>
                    <p className="text-xs text-gray-500">إجمالي القضايا</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-gray-500">انضم في {client.joinDate}</span>
                <Button variant="outline" size="sm">
                  عرض التفاصيل
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}