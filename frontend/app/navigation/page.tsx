'use client';

import { useEffect, useState } from 'react';
import { api } from '@/src/services/api';

type NavigationItem = {
  id: number;
  title: string;
  slug: string;
};

export default function NavigationPage() {
  const [data, setData] = useState<NavigationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  // Load all navigation
  const fetchNavigation = async () => {
    try {
      setLoading(true);
      const res = await api.get('/navigation');

      // ✅ ALWAYS ensure array
      setData(Array.isArray(res.data) ? res.data : res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Search
  const search = async () => {
    try {
      setLoading(true);
      const res = await api.get(`/navigation/search?q=${query}`);

      // ✅ force array
      setData(Array.isArray(res.data) ? res.data : res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Scrape
  const scrape = async () => {
    await api.post('/navigation/scrape');
    alert('Scraping completed');
    fetchNavigation();
  };

  useEffect(() => {
    fetchNavigation();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <main style={{ padding: 20 }}>
      <h1>Navigation List</h1>

      {/* Search */}
      <div style={{ marginBottom: 16 }}>
        <input
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: 8, marginRight: 8 }}
        />

        <button onClick={search} style={{ padding: 8, marginRight: 8 }}>
          Search
        </button>

        <button onClick={scrape} style={{ padding: 8 }}>
          Scrape
        </button>
      </div>

      {/* List */}
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.title} — {item.slug}
          </li>
        ))}
      </ul>
    </main>
  );
}
