import { useState, useEffect } from 'react';
import { ProfileConfig, Project } from '../types/portfolio';
import { fallbackProfile, fallbackProjects } from '../data/fallbackData';
import { fetchPortfolioApi } from '../lib/api';

export function usePortfolioData() {
  const [profile, setProfile] = useState<ProfileConfig>(fallbackProfile);
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      setLoading(true);
      const data = await fetchPortfolioApi();
      if (isMounted && data) {
        if (data.profile) setProfile(data.profile);
        if (data.projects && Array.isArray(data.projects) && data.projects.length > 0) {
          setProjects(data.projects);
        }
      }
      if (isMounted) setLoading(false);
    }

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { profile, projects, loading };
}
