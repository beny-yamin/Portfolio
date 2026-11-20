import { ProfileConfig, Project, ContactMessage } from '../types/portfolio';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

export interface PortfolioApiResponse {
  profile: ProfileConfig;
  projects: Project[];
}

export interface ContactApiResponse {
  success: boolean;
  messageId?: string;
  error?: string;
}

export async function fetchPortfolioApi(): Promise<PortfolioApiResponse | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/portfolio`, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data;
  } catch {
    return null;
  }
}

export async function postContactApi(payload: ContactMessage): Promise<ContactApiResponse> {
  try {
    const res = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return { success: false, error: err.error || 'Failed to submit dispatch' };
    }

    const data = await res.json();
    return { success: true, messageId: data.messageId };
  } catch (error) {
    return { success: false, error: (error as Error).message || 'Network error' };
  }
}
