#!/bin/sh
rm -rf build;
mkdir -p build/static;

pushd frontend;
npm run prod;
popd;

cp frontend/index.html build/staticj;
cp -r frontend/dist build/static;

pushd server;
vgo build;
popd;

mv server/lotus build;
docker-compose build;
