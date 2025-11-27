# Full-Stack Application: Angular 20 + Express.js + MongoDB
Please read bellow after UI screenshots for intrsuctions.

<img width="2551" height="1325" alt="Screenshot 2025-11-27 153818" src="https://github.com/user-attachments/assets/d4142905-4166-4908-ab0b-8fac400f7de0" />

<img width="2536" height="863" alt="Screenshot 2025-11-27 153831" src="https://github.com/user-attachments/assets/8f655ee9-5d8f-44ae-bfff-2efa9c19b69f" />

<img width="2542" height="1366" alt="Screenshot 2025-11-27 153749" src="https://github.com/user-attachments/assets/beb39a40-2ed8-43d2-bc18-84faeca1345f" />

<img width="2545" height="1363" alt="Screenshot 2025-11-27 153802" src="https://github.com/user-attachments/assets/8c1f7511-2c01-4556-b44f-9e9755860a61" />

<img width="2547" height="1365" alt="Screenshot 2025-11-27 153721" src="https://github.com/user-attachments/assets/ef4d6797-0bd2-48b2-a8b5-25ea9331a017" />

# Full-Stack Application: Angular 20 + Express.js + MongoDB

Complete CRUD application with routing, parent-child components, and Angular Material.

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (v6 or higher)
- Angular CLI (v20)
- npm or yarn

---

## BACKEND SETUP

### 1. Create Backend Structure

```bash
# Create project root
mkdir fullstack-app
cd fullstack-app

# Create backend directory
mkdir backend
cd backend

# Initialize Node.js project
npm init -y

# Install dependencies
npm install express mongoose cors dotenv body-parser

# Install dev dependencies
npm install --save-dev nodemon

# Create directory structure
mkdir src
mkdir src/models
mkdir src/routes
mkdir src/controllers
mkdir src/config
```

### 2. Create Backend Files

Create the following files with the provided content:

- `package.json`
- `.env`
- `src/server.js`
- `src/config/database.js`
- `src/models/user.model.js`
- `src/models/product.model.js`
- `src/controllers/user.controller.js`
- `src/controllers/product.controller.js`
- `src/routes/user.routes.js`
- `src/routes/product.routes.js`

### 3. Start MongoDB

```bash
# Start MongoDB service (macOS/Linux)
sudo systemctl start mongod

# Or for macOS with Homebrew
brew services start mongodb-community

# Or run MongoDB directly
mongod
```

### 4. Run Backend Server

```bash
# Development mode with auto-reload
npm run dev

# Or production mode
npm start
```

Backend will run on `http://localhost:3000`

### 5. Test Backend API

```bash
# Health check
curl http://localhost:3000/api/health

# Get all users
curl http://localhost:3000/api/users

# Create a user
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","age":30}'

# Get all products
curl http://localhost:3000/api/products

# Create a product
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Laptop","description":"Gaming laptop","price":1200,"category":"Electronics","stock":10}'
```

---

## FRONTEND SETUP

### 1. Install Angular CLI

```bash
# Install Angular CLI globally
npm install -g @angular/cli@20
```

### 2. Create Angular Project

```bash
# Go back to root directory
cd ..

# Create Angular project
ng new frontend --routing --style=scss

# Navigate to frontend
cd frontend
```

When prompted:
- Would you like to enable Server-Side Rendering (SSR)? **No**
- Would you like to add Angular routing? **Yes**

### 3. Install Angular Material

```bash
ng add @angular/material
```

When prompted:
- Choose a prebuilt theme: **Indigo/Pink**
- Set up global Angular Material typography? **Yes**
- Include the Angular animations module? **Yes**

### 4. Generate Modules

```bash
# Generate feature modules
ng generate module features/users --routing
ng generate module features/products --routing
ng generate module shared
```

### 5. Generate Components

```bash
# User components
ng generate component features/users/user-list
ng generate component features/users/user-form
ng generate component features/users/user-detail

# Product components
ng generate component features/products/product-list
ng generate component features/products/product-form
ng generate component features/products/product-detail

# Shared components
ng generate component shared/header
ng generate component shared/footer

# Page components
ng generate component pages/home
ng generate component pages/not-found
```

### 6. Generate Services

```bash
ng generate service core/services/api
ng generate service core/services/user
ng generate service core/services/product
```

### 7. Generate Models (Interfaces)

```bash
ng generate interface core/models/user
ng generate interface core/models/product
```

### 8. Create All Frontend Files

Copy the provided content for each file:

**Core Files:**
- `src/environments/environment.ts`
- `src/app/core/models/user.ts`
- `src/app/core/models/product.ts`
- `src/app/core/services/api.service.ts`
- `src/app/core/services/user.service.ts`
- `src/app/core/services/product.service.ts`

**App Files:**
- `src/app/app.module.ts`
- `src/app/app-routing.module.ts`
- `src/app/app.component.ts`
- `src/app/app.component.html`
- `src/app/app.component.scss`

**Shared Module:**
- `src/app/shared/shared.module.ts`
- `src/app/shared/header/header.component.ts`
- `src/app/shared/header/header.component.html`
- `src/app/shared/header/header.component.scss`
- `src/app/shared/footer/footer.component.ts`
- `src/app/shared/footer/footer.component.html`
- `src/app/shared/footer/footer.component.scss`

**Users Module:**
- `src/app/features/users/users.module.ts`
- `src/app/features/users/users-routing.module.ts`
- All user component files (TS, HTML, SCSS)

**Products Module:**
- `src/app/features/products/products.module.ts`
- `src/app/features/products/products-routing.module.ts`
- All product component files (TS, HTML, SCSS)

**Pages:**
- All home and not-found component files

**Styles:**
- `src/styles.scss`

### 9. Run Frontend Application

```bash
# Development server
ng serve

# Or with specific port
ng serve --port 4200

# Open browser
ng serve --open
```

Frontend will run on `http://localhost:4200`

### 10. Build for Production

```bash
# Production build
ng build --configuration production

# The build artifacts will be in dist/frontend/
```

---

## PROJECT STRUCTURE

```
fullstack-app/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js
│   │   ├── controllers/
│   │   │   ├── user.controller.js
│   │   │   └── product.controller.js
│   │   ├── models/
│   │   │   ├── user.model.js
│   │   │   └── product.model.js
│   │   ├── routes/
│   │   │   ├── user.routes.js
│   │   │   └── product.routes.js
│   │   └── server.js
│   ├── .env
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── app/
    │   │   ├── core/
    │   │   │   ├── models/
    │   │   │   │   ├── user.ts
    │   │   │   │   └── product.ts
    │   │   │   └── services/
    │   │   │       ├── api.service.ts
    │   │   │       ├── user.service.ts
    │   │   │       └── product.service.ts
    │   │   ├── features/
    │   │   │   ├── users/
    │   │   │   │   ├── user-list/
    │   │   │   │   ├── user-form/
    │   │   │   │   ├── user-detail/
    │   │   │   │   ├── users.module.ts
    │   │   │   │   └── users-routing.module.ts
    │   │   │   └── products/
    │   │   │       ├── product-list/
    │   │   │       ├── product-form/
    │   │   │       ├── product-detail/
    │   │   │       ├── products.module.ts
    │   │   │       └── products-routing.module.ts
    │   │   ├── shared/
    │   │   │   ├── header/
    │   │   │   ├── footer/
    │   │   │   └── shared.module.ts
    │   │   ├── pages/
    │   │   │   ├── home/
    │   │   │   └── not-found/
    │   │   ├── app.module.ts
    │   │   ├── app-routing.module.ts
    │   │   └── app.component.*
    │   ├── environments/
    │   │   └── environment.ts
    │   └── styles.scss
    └── package.json
```

---

## API ENDPOINTS

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

---

## FEATURES

### Backend
- ✅ RESTful API with Express.js
- ✅ MongoDB with Mongoose ODM
- ✅ Complete CRUD operations
- ✅ Input validation
- ✅ Error handling
- ✅ CORS enabled

### Frontend
- ✅ Angular 20 with TypeScript
- ✅ Lazy loading modules
- ✅ Reactive forms with validation
- ✅ Angular Material components
- ✅ Responsive design
- ✅ Parent-child component communication
- ✅ Service-based architecture
- ✅ Routing and navigation
- ✅ HTTP interceptors ready
- ✅ Loading states and error handling

---

## TROUBLESHOOTING

### MongoDB Connection Issues
```bash
# Check if MongoDB is running
sudo systemctl status mongod

# Check MongoDB logs
tail -f /var/log/mongodb/mongod.log
```

### Port Already in Use
```bash
# Kill process on port 3000 (Backend)
lsof -ti:3000 | xargs kill -9

# Kill process on port 4200 (Frontend)
lsof -ti:4200 | xargs kill -9
```

### Angular Material Not Working
```bash
# Reinstall Angular Material
npm uninstall @angular/material @angular/cdk
ng add @angular/material
```

### CORS Issues
Ensure backend `.env` has correct settings and CORS is enabled in `server.js`

---

## DEVELOPMENT WORKFLOW

1. Start MongoDB
2. Start Backend: `cd backend && npm run dev`
3. Start Frontend: `cd frontend && ng serve`
4. Open browser: `http://localhost:4200`

---

## TESTING THE APPLICATION

1. Navigate to `http://localhost:4200`
2. Click on "Users" or "Products"
3. Try creating, viewing, editing, and deleting items
4. Test form validation
5. Test search/filter functionality
6. Test pagination and sorting

---

## LICENSE

MIT License - Feel free to use this project for learning and development!
