#!/bin/bash

volume=$(pamixer --get-volume)
blocks=$(((volume + 4) / 5))  # ceil logic
bar=$(printf '▌%.0s' $(seq 1 $blocks))
empty=$(printf ' %.0s' $(seq 1 $((20 - blocks))))

echo "{\"text\": \"${bar}${empty}\"}"
