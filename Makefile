.PHONY: shell
shell:
	@docker compose exec shell bash

.PHONY: up
up:
	docker compose up -d
.PHONY: restart
restart:
	docker compose down
	docker compose up -d

node-module: node_modules
	@docker compose exec shell npm install

.PHONY: ci
ci:
	@docker compose exec shell deno lint