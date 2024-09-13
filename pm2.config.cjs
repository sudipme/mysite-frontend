module.exports = {
  apps: [
    {
      name: "sveltekit-app", // Name of the application in PM2
      script: "build/index.js", // Path to the SvelteKit build file
      instances: 1, // Number of instances to run (use "max" for clustering)
      exec_mode: "fork", // Mode to execute the app, "fork" or "cluster"
      env: {
        NODE_ENV: "production",
        PORT: 3000, // Specify the port you want to run your app on
      },
      args: "--port 3000", // Alternatively, specify the port in arguments
    },
  ],
};
