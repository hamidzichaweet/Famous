import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";
import { CasesManagement } from "@/components/CasesManagement";
import { ClientsManagement } from "@/components/ClientsManagement";
import { TasksManagement } from "@/components/TasksManagement";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "cases":
        return <CasesManagement />;
      case "clients":
        return <ClientsManagement />;
      case "tasks":
        return <TasksManagement />;
      case "documents":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">إدارة الوكالات</h1>
            <div className="text-center py-12">
              <p className="text-gray-500">قريباً - إدارة الوكالات والمستندات</p>
            </div>
          </div>
        );
      case "finance":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">الإدارة المالية</h1>
            <div className="text-center py-12">
              <p className="text-gray-500">قريباً - إدارة الفواتير والمدفوعات</p>
            </div>
          </div>
        );
      case "sessions":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">إدارة الجلسات</h1>
            <div className="text-center py-12">
              <p className="text-gray-500">قريباً - جدولة ومتابعة الجلسات</p>
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">الإعدادات</h1>
            <div className="text-center py-12">
              <p className="text-gray-500">قريباً - إعدادات النظام والمستخدمين</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="mr-64 p-8">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Index;