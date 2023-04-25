#!/bin/bash

cd /opt/backend-code/
npm start > /tmp/app.out.log 2> /tmp/app.err.log < /dev/null &
