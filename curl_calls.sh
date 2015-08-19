#!/bin/bash

HOST="127.0.0.1:3001"

function post() {
  curl -v -H "Content-Type: application/json" -XPOST \
  --data "{\"username\":\"dickeyxxx\", \"body\":\"node rules!\"}" \
  $HOST/api/posts
}

function authenticate() {
  curl -X POST -d '{"username": "dickeyxxx", "password": "pass"}' -H \
  "Content-Type: application/json" $HOST/api/users
}

function createUser() {
  curl -X POST -d '{"username": "dickeyxxx", "password": "pass"}' -H \
  "Content-Type: application/json" $HOST/api/users
}
