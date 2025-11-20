# Database Setup Guide

This guide will help you set up PostgreSQL for ProMaStreet on macOS.

## Option 1: Docker (Recommended for Development)

Docker provides the easiest way to run PostgreSQL without complex installation.

### Prerequisites
- Install Docker Desktop for Mac from [docker.com](https://www.docker.com/products/docker-desktop)

### Setup Steps

1. **Start PostgreSQL Container**
```bash
docker run --name promastreet-db \
  -e POSTGRES_USER=promastreet \
  -e POSTGRES_PASSWORD=dev_password_123 \
  -e POSTGRES_DB=promastreet \
  -p 5432:5432 \
  -d postgres:16-alpine
```

2. **Verify Container is Running**
```bash
docker ps | grep promastreet-db
```

3. **Update .env File**
```bash
DATABASE_URL="postgresql://promastreet:dev_password_123@localhost:5432/promastreet?schema=public"
DIRECT_URL="postgresql://promastreet:dev_password_123@localhost:5432/promastreet?schema=public"
```

### Docker Management Commands

```bash
# Start container
docker start promastreet-db

# Stop container
docker stop promastreet-db

# View logs
docker logs promastreet-db

# Access PostgreSQL CLI
docker exec -it promastreet-db psql -U promastreet -d promastreet

# Remove container (data will be lost)
docker rm -f promastreet-db
```

### With Docker Compose (Alternative)

Create `docker-compose.yml` in project root:

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    container_name: promastreet-db
    environment:
      POSTGRES_USER: promastreet
      POSTGRES_PASSWORD: dev_password_123
      POSTGRES_DB: promastreet
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

  redis:
    image: redis:7-alpine
    container_name: promastreet-redis
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    restart: unless-stopped

volumes:
  postgres_data:
  redis_data:
```

Start services:
```bash
docker-compose up -d
```

---

## Option 2: Homebrew Installation

Install PostgreSQL directly on your Mac using Homebrew.

### Prerequisites
- Install Homebrew from [brew.sh](https://brew.sh/)

### Setup Steps

1. **Install PostgreSQL**
```bash
brew install postgresql@16
```

2. **Start PostgreSQL Service**
```bash
brew services start postgresql@16
```

3. **Create Database and User**
```bash
# Access PostgreSQL CLI
psql postgres

# In PostgreSQL prompt, run:
CREATE USER promastreet WITH PASSWORD 'dev_password_123';
CREATE DATABASE promastreet OWNER promastreet;
GRANT ALL PRIVILEGES ON DATABASE promastreet TO promastreet;
\q
```

4. **Update .env File**
```bash
DATABASE_URL="postgresql://promastreet:dev_password_123@localhost:5432/promastreet?schema=public"
DIRECT_URL="postgresql://promastreet:dev_password_123@localhost:5432/promastreet?schema=public"
```

### Homebrew Management Commands

```bash
# Start PostgreSQL
brew services start postgresql@16

# Stop PostgreSQL
brew services stop postgresql@16

# Restart PostgreSQL
brew services restart postgresql@16

# Access PostgreSQL CLI
psql -U promastreet -d promastreet

# Check status
brew services list
```

---

## Option 3: Postgres.app

A native macOS app for PostgreSQL.

### Setup Steps

1. **Download and Install**
   - Download from [postgresapp.com](https://postgresapp.com/)
   - Drag to Applications folder
   - Open Postgres.app

2. **Create Database**
   - Click "Initialize" to create default cluster
   - Click on postgres to open terminal
   - Run:
   ```sql
   CREATE USER promastreet WITH PASSWORD 'dev_password_123';
   CREATE DATABASE promastreet OWNER promastreet;
   ```

3. **Update .env File** (same as above)

---

## Option 4: Multipass VM (As Requested)

Multipass provides lightweight Ubuntu VMs on macOS.

### Prerequisites
```bash
brew install multipass
```

### Setup Steps

1. **Launch Ubuntu VM**
```bash
multipass launch --name promastreet-db --cpus 2 --memory 2G --disk 10G
```

2. **Install PostgreSQL in VM**
```bash
# Shell into VM
multipass shell promastreet-db

# Update and install PostgreSQL
sudo apt update
sudo apt install -y postgresql postgresql-contrib

# Configure PostgreSQL to accept external connections
sudo nano /etc/postgresql/14/main/postgresql.conf
# Change: listen_addresses = '*'

sudo nano /etc/postgresql/14/main/pg_hba.conf
# Add: host all all 0.0.0.0/0 md5

# Restart PostgreSQL
sudo systemctl restart postgresql
```

3. **Create Database and User**
```bash
sudo -u postgres psql

CREATE USER promastreet WITH PASSWORD 'dev_password_123';
CREATE DATABASE promastreet OWNER promastreet;
GRANT ALL PRIVILEGES ON DATABASE promastreet TO promastreet;
\q
```

4. **Get VM IP Address**
```bash
multipass info promastreet-db
# Look for IPv4 address (e.g., 192.168.64.2)
```

5. **Update .env File**
```bash
DATABASE_URL="postgresql://promastreet:dev_password_123@192.168.64.2:5432/promastreet?schema=public"
DIRECT_URL="postgresql://promastreet:dev_password_123@192.168.64.2:5432/promastreet?schema=public"
```

### Multipass Management Commands

```bash
# List VMs
multipass list

# Start VM
multipass start promastreet-db

# Stop VM
multipass stop promastreet-db

# Delete VM
multipass delete promastreet-db
multipass purge

# Shell into VM
multipass shell promastreet-db
```

---

## Prisma Setup (After Database is Running)

Once your PostgreSQL is running (any option above), initialize Prisma:

### 1. Generate Prisma Client
```bash
npm run db:generate
```

### 2. Create Initial Migration
```bash
npm run db:migrate
```

### 3. (Optional) Seed Database
```bash
npm run db:seed
```

### 4. Open Prisma Studio (Database GUI)
```bash
npm run db:studio
```

---

## Recommended Setup for Different Scenarios

### For Development (Local)
**Recommendation: Docker** ✅
- Easy to start/stop
- No system-wide installation
- Can be destroyed and recreated easily
- Includes Redis if needed

### For Long-term Development
**Recommendation: Homebrew** ✅
- Native performance
- Integrated with macOS
- Always running in background
- Good for multiple projects

### For Testing Isolation
**Recommendation: Multipass** ✅
- Complete isolation
- Can test deployment scripts
- Simulate production environment
- Good for testing migrations

### For Production
**Recommendation: Managed Service** ✅
- Supabase (easiest, includes auth & storage)
- Neon (serverless, free tier)
- Railway (simple deployment)
- AWS RDS (enterprise)

---

## Troubleshooting

### Connection Refused
```bash
# Check if PostgreSQL is running
docker ps                    # For Docker
brew services list           # For Homebrew
multipass list              # For Multipass

# Check if port 5432 is in use
lsof -i :5432
```

### Authentication Failed
- Verify username and password in .env
- Check PostgreSQL user permissions
- Ensure DATABASE_URL format is correct

### Prisma Migration Errors
```bash
# Reset database (WARNING: destroys all data)
npx prisma migrate reset

# Push schema without migrations (dev only)
npx prisma db push
```

### Port Already in Use
```bash
# Find process using port 5432
lsof -i :5432

# Kill the process
kill -9 <PID>
```

---

## Next Steps

After database setup:

1. ✅ Verify connection works
2. ✅ Run Prisma migrations
3. ✅ Seed initial data
4. ✅ Start development server
5. ✅ Begin building features

For questions, refer to:
- [Prisma Documentation](https://www.prisma.io/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Docker Documentation](https://docs.docker.com/)

