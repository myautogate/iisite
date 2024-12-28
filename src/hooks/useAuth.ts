import { useState, useCallback } from 'react';

const ADMIN_PASSWORD = 'whisper-admin-2024';
const TOKEN_KEY = 'whisper-admin-token';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem(TOKEN_KEY);
  });

  const login = useCallback((password: string) => {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem(TOKEN_KEY, 'authenticated');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    setIsAuthenticated(false);
  }, []);

  return { isAuthenticated, login, logout };
}