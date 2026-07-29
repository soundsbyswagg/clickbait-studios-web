#!/bin/bash
set -e
npx lighthouse-ci --url=http://localhost:3000 --budget=./lighthouse-budget.json --output=./lighthouse-report --output=json --output=html --view