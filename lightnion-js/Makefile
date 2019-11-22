.PHONY: clean build

build:
	@npm run build

all: install build

build-dev: # build unminified javascript
	@npm run build-dev

install:
	@npm install

dev:
	@npm run dev

clean:
	@rm -f dist/*

mr_proper: clean
	@rm -rf node_modules
	@rm -rf .cache