module.exports = {
  apps: [
    {
      name: 'digital', // The process name shown in pm2 list
      script: 'server.ts', // Your custom Next.js server file
      exec_mode: 'cluster', // Enables multi-core usage (use "fork" if single instance)
      instances: 'max', // Start one instance per CPU core
      env: {
        NODE_ENV: 'production', // Environment variable
        PORT: 3030, // You can change the port if needed
      },
      watch: false, // Set to true if you want auto-restart on file change
      error_file: './logs/error.log', // Optional: log file paths
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
};