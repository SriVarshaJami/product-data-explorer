import { api } from './api';

// Create navigation item
export const createNavigation = (data: {
  title: string;
  slug: string;
}) => {
  return api.post('/navigation', data);
};

// Get all navigation items
export const getNavigation = () => {
  return api.get('/navigation');
};

// Scrape navigation from website
export const scrapeNavigation = () => {
  return api.post('/navigation/scrape');
};

// Search navigation
export const searchNavigation = (query: string) => {
  return api.get('/navigation/search', {
    params: { q: query },
  });
};
