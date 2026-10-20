module.exports = {
  apps: [
    {
      name: "rol-vault",
      script: "npm",
      args: "start",
      cwd: "./src/runtime-server/server",
      env: {
        PORT: 3000,
        HOST: "0.0.0.0",
        VAULT_PATH: "/data/data/com.termux/files/home/storage/vaults/Rol",
        VAULT_REGISTRY:
          "/data/data/com.termux/files/home/storage/vaults/registry.json",
      },
    },
  ],
};
