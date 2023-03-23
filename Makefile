include node_modules/make-node/main.mk


SOURCES = lib/*.js lib/**/*.js
TESTS = test/*.test.js test/**/*.test.js

LCOVFILE = ./reports/coverage/lcov.info

MOCHAFLAGS = --require ./test/bootstrap/node
