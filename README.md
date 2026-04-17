# Anar.kz — fullstack (Next.js + Django)

## Structure

- `frontend/`: Next.js (App Router) — SEO-friendly pages, `robots.txt`, `sitemap.xml`
- `backend/`: Django + DRF — dynamic content API (`/api/pages/`)
- `nginx/`: internal reverse proxy (for external NGINX to proxy to)

## Run with Docker

```bash
cp .env.example .env
docker compose up --build
```

Open `http://localhost:8080`.

- Frontend: proxied by internal NGINX to `frontend:3000`
- Backend API: `http://localhost:8080/api/pages/`
- Django admin: `http://localhost:8080/admin/`

## Local dev (without Docker)

Frontend:

```bash
cd frontend
npm i
npm run dev
```

Backend:

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```

## External NGINX

Этот репозиторий поднимает **внутренний** NGINX (контейнер `nginx`), чтобы внешний NGINX мог проксировать на один upstream.

- Внешний NGINX → `http://<host>:8080/` (или проброшенный порт/сокет)
- Внутренний NGINX уже маршрутизирует:
  - `/api/` и `/admin/` → Django
  - всё остальное → Next.js

