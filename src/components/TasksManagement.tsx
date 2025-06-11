import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Calendar, User, AlertCircle } from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "مراجعة عقد الإيجار للعميل أحمد",
    description: "مراجعة شاملة لعقد الإيجار وتحديد النقاط القانونية",
    priority: "عالية",
    status: "قيد التنفيذ",
    dueDate: "2024-02-15",
    assignedTo: "محمد الأحمد",
    completed: false,
    caseId: "2024/001"
  },
  {
    id: 2,
    title: "تحضير مرافعة للجلسة القادمة",
    description: "إعداد المرافعة النهائية لقضية النزاع التجاري",
    priority: "عالية",
    status: "جديدة",
    dueDate: "2024-02-18",
    assignedTo: "سارة محمود",
    completed: false,
    caseId: "2024/002"
  },
  {
    id: 3,
    title: "متابعة دفع الأتعاب",
    description: "التواصل مع العميل لمتابعة دفع الأتعاب المستحقة",
    priority: "متوسطة",
    status: "مكتملة",
    dueDate: "2024-02-10",
    assignedTo: "أحمد علي",
    completed: true,
    caseId: "-"
  },
  {
    id: 4,
    title: "تجديد رخصة المحاماة",
    description: "تجديد رخصة المحاماة السنوية قبل انتهاء الموعد",
    priority: "منخفضة",
    status: "مؤجلة",
    dueDate: "2024-03-01",
    assignedTo: "إدارة المكتب",
    completed: false,
    caseId: "-"
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'عالية': return 'bg-red-100 text-red-800 border-red-200';
    case 'متوسطة': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'منخفضة': return 'bg-green-100 text-green-800 border-green-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'جديدة': return 'bg-blue-100 text-blue-800';
    case 'قيد التنفيذ': return 'bg-orange-100 text-orange-800';
    case 'مكتملة': return 'bg-green-100 text-green-800';
    case 'مؤجلة': return 'bg-gray-100 text-gray-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export function TasksManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("الكل");

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "الكل" || 
                         (filter === "مكتملة" && task.completed) ||
                         (filter === "غير مكتملة" && !task.completed);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">إدارة المهام</h1>
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
          <Plus className="h-4 w-4 ml-2" />
          مهمة جديدة
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4">
            <Input
              placeholder="البحث في المهام..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <div className="flex gap-2">
              {["الكل", "مكتملة", "غير مكتملة"].map((filterOption) => (
                <Button
                  key={filterOption}
                  variant={filter === filterOption ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(filterOption)}
                >
                  {filterOption}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tasks List */}
      <div className="space-y-4">
        {filteredTasks.map((task) => (
          <Card key={task.id} className={`hover:shadow-lg transition-shadow ${
            task.completed ? 'opacity-75' : ''
          }`}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Checkbox
                  checked={task.completed}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold ${
                        task.completed ? 'line-through text-gray-500' : 'text-gray-900'
                      }`}>
                        {task.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <Badge className={getPriorityColor(task.priority)}>
                        {task.priority}
                      </Badge>
                      <Badge className={getStatusColor(task.status)}>
                        {task.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 mt-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>موعد الانتهاء: {task.dueDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>مُكلف: {task.assignedTo}</span>
                    </div>
                    {task.caseId !== "-" && (
                      <div className="flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        <span>قضية: {task.caseId}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}