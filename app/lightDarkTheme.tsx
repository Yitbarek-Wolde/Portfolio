'use client';

import React, { useState, useEffect } from 'react';

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem('yit-portfolio-theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(false);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = (): void => {
    if (!isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('yit-portfolio-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('yit-portfolio-theme', 'dark'); 
    }
    setIsDarkMode(!isDarkMode);
  };


  return (
      <div className="flex items-center space-x-4">
       
        <span className="text-foreground  text-zinc-600  dark:text-zinc-100">Dark</span>
        <label className="relative inline-block w-10 h-6">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleTheme}
            className="sr-only"
          />
          <div className="slider  text-zinc-600 dark:text-zinc-100 bg-gray-600 dark:bg-gray-600 absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-all"></div>
          <div
            className={`dot absolute left-1 top-1  text-zinc-600 bg-white dark:bg-gray-300 w-4 h-4 rounded-full transition-transform transform ${
              isDarkMode ? 'translate-x-4' : ''
            }`}
          ></div>
        </label>
        <span className="text-foreground  text-zinc-600 dark:text-zinc-100">Light</span>
      </div>

  );
};

export default ThemeToggle;
