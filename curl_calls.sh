#!/bin/bash

HOST="127.0.0.1:3001"

function post() {
  curl -v -H "Content-Type: application/json" -XPOST \
  --data "{\"username\":\"dickeyxxx\", \"body\":\"node rules!\"}" \
  $HOST/api/posts
}
