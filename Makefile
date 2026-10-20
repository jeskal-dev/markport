SERVER_PATH = "src/runtime-server/server"


vendor:
	node scripts/update-obsidian-mobile.js --version 1.12.7 && node scripts/patch-obsidian-mobile.js

setup-server:
	cd $(SERVER_PATH) && npm i --verbose

dev: setup-server
	cd $(SERVER_PATH) && npm run dev

start: setup-server
	cd $(SERVER_PATH) && npm run start
