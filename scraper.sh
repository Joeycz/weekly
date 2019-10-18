#!/bin/sh
set -e
echo "新建index weekly：$(date "+%Y-%m-%d %H:%M:%S")"

docker run -it --env-file=.env -e "CONFIG=$(cat /Users/chengzheng/chengzheng/docsearch-scraper/config.json | jq -r tostring)" algolia/docsearch-scraper

echo "新建 success"


exit 0