import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Scale, 
  Users, 
  FileText, 
  DollarSign, 
  Calendar, 
  CheckSquare,
  TrendingUp,
  AlertCircle
} from "lucide-react";

const stats = [
  {
    title: "القضايا النشطة",
    value: "24",
    icon: Scale,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    change: "+12%"
  },
  {
    title: "العملاء",
    value: "156",
    icon: Users,
    color: "text-green-600",
    bgColor: "bg-green-50",
    change: "+8%"
  },
  {
    title: "الوكالات",
    value: "89",
    icon: FileText,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    change: "+15%"
  },
  {
    title: "الإيرادات الشهرية",
    value: "₪45,000",
    icon: DollarSign,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    change: "+22%"
  }
];

const recentActivities = [
  { id: 1, type: "قضية جديدة", title: "قضية عقارية - أحمد محمد", time: "منذ ساعتين", status: "جديد" },
  { id: 2, type: "جلسة", title: "جلسة محكمة - قضية رقم 2023/145", time: "غداً 10:00 ص", status: "مجدولة" },
  { id: 3, type: "مهمة", title: "مراجعة عقد الإيجار", time: "منذ يوم", status: "مكتملة" },
  { id: 4, type: "دفعة", title: "دفعة من العميل سارة أحمد", time: "منذ 3 أيام", status: "مستلمة" }
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">لوحة التحكم</h1>
        <Badge variant="outline" className="text-sm">
          آخر تحديث: الآن
        </Badge>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="h-4 w-4 text-green-500 ml-1" />
                      <span className="text-sm text-green-600">{stat.change}</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertCircle className="h-5 w-5 ml-2" />
            الأنشطة الأخيرة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {activity.type}
                    </Badge>
                    <span className="font-medium">{activity.title}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
                </div>
                <Badge 
                  variant={activity.status === 'جديد' ? 'default' : 
                          activity.status === 'مجدولة' ? 'secondary' : 
                          activity.status === 'مكتملة' ? 'outline' : 'default'}
                >
                  {activity.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}