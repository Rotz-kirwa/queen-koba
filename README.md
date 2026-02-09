# Queen Koba E-Commerce Platform

Complete e-commerce solution for Queen Koba skincare products.

## Project Structure

```
koba/
├── frontend/          # Customer-facing store (React + Vite)
├── backend/           # Backend API (Flask + MongoDB)
└── admin/            # Admin dashboard (to be created)
```

## Services

- **Frontend**: http://localhost:8080
- **Backend**: http://localhost:5000
- **Admin**: http://localhost:3001 (to be created)

## Quick Start

### Frontend

```bash
cd /home/user/Public/koba/frontend
npm install
npm run dev
```

### Backend

```bash
cd /home/user/Public/koba/backend

# Setup virtual environment
python3 -m venv venv
source venv/bin/activate
pip install -r queen-koba-backend/app/requirements.txt

# Create .env
cat > .env << 'EOF'
MONGO_URI=mongodb://localhost:27017/queenkoba
JWT_SECRET_KEY=your-secret-key
JWT_ACCESS_TOKEN_EXPIRES=86400
FLASK_APP=queenkoba_mongodb.py
FLASK_ENV=development
SECRET_KEY=your-flask-secret
EOF

# Start MongoDB
sudo systemctl start mongodb
# OR
docker run -d --name queenkoba-mongodb -p 27017:27017 mongo:latest

# Run backend
python queen-koba-backend/queenkoba_mongodb.py
```

### Admin (To Be Created)

Admin dashboard will be created fresh in the `admin/` directory.

## Contact

- Email: info@queenkoba.com
- Phone: 0119 559 180
- WhatsApp: 0119 559 180
- Instagram: @queenkoba
