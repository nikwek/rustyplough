#!/bin/bash
API_TOKEN="jVmwNJu-4PnMfijF86NE73UhHV75gjmdSIK0J8i3"
ACCOUNT_ID="6a0f7f9056cf44dc74497f5b621d50aa"
BUCKET_NAME="rustyploughfc"
OUTPUT_FILE="filenames.txt"
LIMIT=100

> "$OUTPUT_FILE"  # Clear the file

next_cursor=""

while true; do
  # Build URL with cursor only if not empty
  if [ -z "$next_cursor" ]; then
    URL="https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/r2/buckets/$BUCKET_NAME/objects?limit=$LIMIT"
  else
    URL="https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/r2/buckets/$BUCKET_NAME/objects?limit=$LIMIT&cursor=$next_cursor"
  fi
  
  RESPONSE=$(curl -s -X GET "$URL" -H "Authorization: Bearer $API_TOKEN")
  
  # Extract file names and add to output
  echo "$RESPONSE" | jq -r '.result[]?.key' >> "$OUTPUT_FILE"
  
  # Get next cursor
  next_cursor=$(echo "$RESPONSE" | jq -r '.result_info.cursor')
  
  # Exit if no more pages
  if [ "$next_cursor" = "null" ] || [ -z "$next_cursor" ]; then
    break
  fi
done

echo "File names saved to $OUTPUT_FILE"