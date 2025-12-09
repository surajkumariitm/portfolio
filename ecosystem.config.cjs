module.exports = {
  apps: [
    {
      name: 'portfolio-backend',
      cwd: './server',
      script: 'index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 5000
      }
    },
    {
      name: 'portfolio-frontend',
      cwd: './client',
      script: 'node_modules/.bin/vite',
      args: '--host 0.0.0.0 --port 3000',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
};
