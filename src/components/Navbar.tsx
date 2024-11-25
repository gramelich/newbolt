import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Receipt, 
  Clock, 
  Settings, 
  PlusCircle,
  FileEdit,
  Wallet
} from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/transactions', icon: Receipt, label: 'Transactions' },
    { path: '/pending', icon: Clock, label: 'Pending' },
    { path: '/new', icon: PlusCircle, label: 'New Entry' },
    { path: '/manage', icon: FileEdit, label: 'Manage' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <nav className="bg-indigo-700 text-white h-screen w-64 fixed left-0 top-0 p-4">
      <div className="flex items-center gap-2 mb-8 px-4">
        <Wallet className="w-8 h-8" />
        <span className="text-xl font-bold">FinanceTrack</span>
      </div>
      
      <div className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive(item.path)
                ? 'bg-indigo-800 text-white'
                : 'text-indigo-100 hover:bg-indigo-600'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;