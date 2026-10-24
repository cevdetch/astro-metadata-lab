#!/usr/bin/env bash
# Usage: bash scripts/probe-deployment.sh [origin]
set -u

origin="${1:-https://astro-metadata-lab.pages.dev}"
origin="${origin%/}"

paths=(
  /cases/metadata/explicit-og/
  /cases/source/metadata/explicit-og.txt
  /cases/source/metadata/explicit-og
  /cases/source/metadata/explicit-og.txt/
  /cases/assets/icon-blue.svg
  /cases/assets/social-red.png
  /cases/assets/app.webmanifest
  /cases/indexing/redirect/
)

result=0
for case_path in "${paths[@]}"; do
  printf '\nURL: %s%s\n' "$origin" "$case_path"
  # Keep the first response so redirects remain visible.
  if ! curl --silent --show-error --connect-timeout 10 --max-time 20 \
    --output /dev/null \
    --write-out 'HTTP: %{http_code}\nContent-Type: %{content_type}\nRedirect: %{redirect_url}\n' \
    "${origin}${case_path}"; then
    result=1
  fi
done

exit "$result"
