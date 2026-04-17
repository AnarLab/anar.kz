export type CmsPage = {
  slug: string;
  title: string;
  description: string;
  body: string;
  updated_at: string;
};

function getApiBaseUrl(): string {
  // Browser: call nginx on same origin (e.g. /api)
  if (typeof window !== "undefined") {
    return (process.env.NEXT_PUBLIC_API_BASE_URL || "/api").replace(/\/$/, "");
  }

  // Server (Next runtime inside container): call backend service directly
  return (process.env.API_INTERNAL_BASE_URL || "http://backend:8000/api").replace(/\/$/, "");
}

async function apiGet<T>(path: string, init?: RequestInit): Promise<T> {
  const base = getApiBaseUrl();
  const url = `${base}${path.startsWith("/") ? "" : "/"}${path}`;

  const res = await fetch(url, {
    ...init,
    headers: {
      Accept: "application/json",
      ...(init?.headers || {}),
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`API ${res.status} ${res.statusText}${body ? `: ${body}` : ""}`);
  }

  return (await res.json()) as T;
}

export async function getPages(signal?: AbortSignal): Promise<CmsPage[]> {
  return apiGet<CmsPage[]>("/pages/", { signal });
}

