import React from 'react';
import { NavLink, Routes, Route, Outlet } from 'react-router';
import { LayoutDashboard, Package, ShoppingBag, Users, Tag, Image as ImageIcon, BarChart3, Settings, ShieldCheck, MessageSquareWarning, RefreshCcw } from 'lucide-react';
import { SimplePlaceholder } from './Placeholders';

const AdminLayout = () => {
  return (
    <div className="flex bg-gray-50 flex-1 min-h-[calc(100vh-64px)] overflow-hidden">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex">
        <div className="p-4 border-b border-gray-100">
          <h2 className="font-black text-gray-800 text-lg">Seller Hub</h2>
          <p className="text-xs text-gray-500">KickZone Marketplace</p>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {[
            { to: '/admin', icon: LayoutDashboard, label: 'Dashboard', exact: true },
            { to: '/admin/products', icon: Package, label: 'Products' },
            { to: '/admin/inventory', icon: Package, label: 'Inventory' },
            { to: '/admin/orders', icon: ShoppingBag, label: 'Orders' },
            { to: '/admin/refunds', icon: RefreshCcw, label: 'Returns & Refunds' },
            { to: '/admin/users', icon: Users, label: 'Users & Roles' },
            { to: '/admin/approvals', icon: ShieldCheck, label: 'Approvals' },
            { to: '/admin/moderation', icon: MessageSquareWarning, label: 'Moderation' },
            { to: '/admin/coupons', icon: Tag, label: 'Coupons' },
            { to: '/admin/banners', icon: ImageIcon, label: 'Banners' },
            { to: '/admin/analytics', icon: BarChart3, label: 'Analytics' },
            { to: '/admin/settings', icon: Settings, label: 'Settings' },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.exact}
              className={({ isActive }) => 
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`
              }
            >
              <item.icon size={18} />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <Outlet />
      </main>
    </div>
  );
};

export const AdminApp = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<SimplePlaceholder title="Dashboard Overview" subtitle="Total Revenue, Orders, and Active Users charts." fallbackRoute="/" />} />
        <Route path="products" element={<SimplePlaceholder title="Product Management" subtitle="Manage catalog, categories and specs." fallbackRoute="/admin" />} />
        <Route path="inventory" element={<SimplePlaceholder title="Inventory Manager" subtitle="Manage stock levels across warehouses." fallbackRoute="/admin" />} />
        <Route path="orders" element={<SimplePlaceholder title="Order Processing" subtitle="View and fulfill all customer orders. Status updates." fallbackRoute="/admin" />} />
        <Route path="refunds" element={<SimplePlaceholder title="Returns & Refunds Management" subtitle="Issue refunds, approve Return Requests." fallbackRoute="/admin" />} />
        <Route path="users" element={<SimplePlaceholder title="User Management" subtitle="Manage buyers and sellers. Block/Unblock." fallbackRoute="/admin" />} />
        <Route path="approvals" element={<SimplePlaceholder title="Approvals" subtitle="Seller approvals and Product listing approvals." fallbackRoute="/admin" />} />
        <Route path="moderation" element={<SimplePlaceholder title="Moderation" subtitle="Review & QnA moderation. Report management." fallbackRoute="/admin" />} />
        <Route path="coupons" element={<SimplePlaceholder title="Coupons & Offers" subtitle="Create discount campaigns." fallbackRoute="/admin" />} />
        <Route path="banners" element={<SimplePlaceholder title="Banner Management" subtitle="Update homepage heroes." fallbackRoute="/admin" />} />
        <Route path="analytics" element={<SimplePlaceholder title="Analytics" subtitle="Deep dive into marketplace figures (abandoned cart, CR)." fallbackRoute="/admin" />} />
        <Route path="settings" element={<SimplePlaceholder title="System Settings" subtitle="Global config." fallbackRoute="/admin" />} />
      </Route>
    </Routes>
  );
};
