import React from 'react';
import { useTelegram } from '../context/TelegramContext';
import { Save } from 'lucide-react';

const Settings = () => {
  const { telegramConfig, updateTelegramConfig } = useTelegram();
  const [config, setConfig] = React.useState(telegramConfig);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateTelegramConfig(config);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl">
        <h2 className="text-lg font-semibold mb-4">Telegram Notifications</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={config.enabled}
                onChange={(e) => setConfig({ ...config, enabled: e.target.checked })}
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm font-medium text-gray-700">Enable Telegram Notifications</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Bot Token</label>
            <input
              type="text"
              value={config.botToken}
              onChange={(e) => setConfig({ ...config, botToken: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter your Telegram bot token"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Chat ID</label>
            <input
              type="text"
              value={config.chatId}
              onChange={(e) => setConfig({ ...config, chatId: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter your Telegram chat ID"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              <Save className="w-4 h-4" />
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;