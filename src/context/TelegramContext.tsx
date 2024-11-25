import React, { createContext, useContext, useState, useEffect } from 'react';
import { TelegramConfig } from '../types';

interface TelegramContextType {
  telegramConfig: TelegramConfig;
  updateTelegramConfig: (config: TelegramConfig) => void;
}

const TelegramContext = createContext<TelegramContextType | undefined>(undefined);

export const TelegramProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [telegramConfig, setTelegramConfig] = useState<TelegramConfig>(() => {
    const saved = localStorage.getItem('telegramConfig');
    return saved ? JSON.parse(saved) : {
      botToken: '',
      chatId: '',
      enabled: false
    };
  });

  useEffect(() => {
    localStorage.setItem('telegramConfig', JSON.stringify(telegramConfig));
  }, [telegramConfig]);

  const updateTelegramConfig = (config: TelegramConfig) => {
    setTelegramConfig(config);
  };

  return (
    <TelegramContext.Provider
      value={{
        telegramConfig,
        updateTelegramConfig
      }}
    >
      {children}
    </TelegramContext.Provider>
  );
};

export const useTelegram = () => {
  const context = useContext(TelegramContext);
  if (context === undefined) {
    throw new Error('useTelegram must be used within a TelegramProvider');
  }
  return context;
};