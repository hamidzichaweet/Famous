import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter, Eye } from "lucide-react";

const cases = [
  {
    id: "2024/001",
    title: "قضية عقارية - نزاع ملكية",
    client: "أحمد محمد علي",
    status: "نشطة",
    type: "عقاري",
    nextSession: "2024-02-15",
    priority: "عالية"
  },
  {
    id: "2024/002",
    title: "قضية تجارية - خلاف شراكة",
    client: "شركة النور التجارية",
    status: "معلقة",
    type: "تجاري",
    nextSession: "2024-02-20",
    priority: "متوسطة"
  },
  {
    id: "2024/003",
    title: "قضية أحوال شخصية",
    client: "فاطمة أحمد",
    status: "مكتملة",
    type: "أحوال شخصية",
    nextSession: "-",
    priority: "منخفضة"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'نشطة': return 'bg-green-100 text-green-800';
    case 'معلقة': return 'bg-yellow-100 text-yellow-800';
    case 'مكتملة': return 'bg-blue-100 text-blue-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'عالية': return 'bg-red-100 text-red-800';
    case 'متوسطة': return 'bg-orange-100 text-orange-800';
    case 'منخفضة': return 'bg-gray-100 text-gray-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export function CasesManagement() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">إدارة القضايا</h1>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          <Plus className="h-4 w-4 ml-2" />
          قضية جديدة
        </Button>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="البحث في القضايا..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 ml-2" />
              تصفية
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Cases List */}
      <div className="grid gap-4">
        {cases.map((case_) => (
          <Card key={case_.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{case_.title}</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">رقم القضية: {case_.id}</p>
                </div>
                <div className="flex gap-2">
                  <Badge className={getPriorityColor(case_.priority)}>
                    {case_.priority}
                  </Badge>
                  <Badge className={getStatusColor(case_.status)}>
                    {case_.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-700">العميل</p>
                  <p className="text-sm text-gray-600">{case_.client}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">نوع القضية</p>
                  <p className="text-sm text-gray-600">{case_.type}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">الجلسة القادمة</p>
                  <p className="text-sm text-gray-600">{case_.nextSession}</p>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 ml-2" />
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