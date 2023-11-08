.PHONY: shell
shell:
	@docker compose exec shell bash

.PHONY: up
up:
	docker compose up -d

node-module: node_modules
	@docker compose exec shell npm install

.PHONY: ci
ci:
	@docker compose exec shell npm ci
	@docker compose exec shell npx eslint src/
	@docker compose exec shell npm test