#!/bin/bash
set -e

# Shell script to combine jest coverage report and cyopress coverage report and output one, combined code coverage report.

# Clear previous nyc_output dir.
rm -rf ./.nyc_output

# Clear previous coverage dir.
rm -rf ./coverage

# Clear previous reports dir.
rm -rf ./reports

# Make new dirs
mkdir ./.nyc_output || true
mkdir ./reports || true

# Copy the unit-coverage json file and cypress-coverage json file to the reports dir
cp ./cypress-coverage/coverage-final.json ./reports/cypress-coverage.json && cp ./jest-coverage/coverage-final.json ./reports/unit-coverage.json

# Merge the two coverage files together
npx nyc merge ./reports

# Move the merged coverage file to the .nyc_output dir
mv ./coverage.json ./.nyc_output/out.json

# Generate an lcov.info file and an HTML report
npx nyc report --reporter lcov --reporter text --reporter cobertura --report-dir coverage
