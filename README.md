# Users List

A modern web application that displays user profiles with a clean, responsive interface. Built with TypeScript, HTML, and CSS using ES modules.

## 🚀 Features

- **Dynamic User Loading**: Fetch random users from the RandomUser API
- **Responsive Design**: Modern UI that works on all devices
- **Type Safety**: Full TypeScript implementation with proper type definitions
- **Modular Architecture**: Clean separation of concerns with ES modules
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Loading States**: Skeleton loading animation for better UX
- **Interactive Cards**: Remove user cards with smooth animations

## 🛠️ Tech Stack

- **TypeScript** - Type-safe JavaScript
- **ES Modules** - Modern module system
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **RandomUser API** - External API for user data

## 📁 Project Structure

```
users-list/
├── index.html             # Main HTML file (root)
├── styles/                # CSS styles
│   └── styles.css         # Main stylesheet
├── src/                   # TypeScript source files
│   ├── main.ts            # Application entry point
│   ├── api.ts             # API functions
│   ├── components.ts      # UI components
│   ├── constants.ts       # Application constants
│   ├── error-handler.ts   # Error handling
│   ├── types.ts           # Type definitions
│   ├── ui-helpers.ts      # UI utility functions
│   ├── ui-renders.ts      # UI rendering functions
│   └── utils.ts           # Utility functions
├── dist/                  # Build output (auto-generated)
├── node_modules/          # Dependencies (gitignored)
└── package.json           # Project configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/thallysbezerra/users-list.git
   cd users-list
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

4. **Open the application**
   - Open `index.html` in your browser
   - Or serve it using a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server .
     ```

### Development

For development with auto-rebuild on file changes:

```bash
npm run watch
```

This will automatically rebuild the TypeScript files when you make changes.

## 🎯 How It Works

1. **Initial Load**: The application loads 12 random users on page load
2. **User Cards**: Each user is displayed in a card with their photo, name, and email
3. **Interactive Features**: 
   - Click "Load new users" to fetch a new set of users
   - Click "Remove" on any card to remove it with animation
4. **Loading States**: Skeleton loading animation shows while fetching data
5. **Error Handling**: User-friendly error messages if API calls fail

## 🔧 Configuration

### TypeScript Configuration

The project uses `tsconfig.json` with the following key settings:
- **Target**: ES2016
- **Module**: ES2015 (ES modules)
- **Strict mode**: Enabled for better type safety
- **Output**: Compiled to `dist/` directory

### Build Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run watch` - Watch for changes and auto-rebuild

## 🌐 API Integration

The application integrates with the [RandomUser API](https://randomuser.me/) to fetch user data:

- **Endpoint**: `https://randomuser.me/api/?results=12`
- **Data**: Returns user profiles with photos, names, and contact information
- **Error Handling**: Graceful fallback for network issues

## 🎨 UI Components

### User Card
- Profile photo
- Full name
- Email address
- Remove button with animation

### Loading Skeleton
- Animated skeleton cards
- Grid layout matching final cards
- Smooth transition to actual content

### Error Display
- Clear error messages
- Retry functionality
- Non-intrusive design

## 🔒 Type Safety

The project includes comprehensive TypeScript types:

```typescript
interface User {
  login: { uuid: string };
  picture: { large: string };
  name: { first: string; last: string };
  email: string;
}

interface UIReferences {
  usersEl: HTMLElement | null;
  loadingEl: HTMLElement | null;
  errorEl: HTMLElement | null;
  buttonLoadNewUsersEl: HTMLButtonElement | null;
}
```

## 🚀 Deployment

To deploy this application:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload files**:
   - Upload `index.html` to your server root
   - Upload the `styles/` directory
   - Upload the `dist/` directory contents
   - Ensure your server supports ES modules

3. **Server configuration**:
   - Configure your server to serve `index.html` as the entry point
   - Ensure proper MIME types for `.js` files

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## ✅ TODO List

- [ ] Add unit tests using Jest
- [ ] Implement end-to-end tests with Cypress
- [ ] Set up styling with Tailwind CSS
- [ ] Implement search functionality
- [ ] Add input field to specify the number of users to load
- [ ] Implement CI/CD pipeline

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Thallys Bezerra**
- GitHub: [@thallysbezerra](https://github.com/thallysbezerra)

---

**Happy coding! 🎉**