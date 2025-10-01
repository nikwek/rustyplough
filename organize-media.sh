#!/bin/bash

# Script to organize media files from /files into Hugo site structure

HUGO_IMAGES="hugo-site/themes/rustyplough/static/images"
HUGO_VIDEOS="hugo-site/themes/rustyplough/static/videos"

echo "Organizing media files into Hugo site..."
echo ""

# Create directories
mkdir -p "$HUGO_IMAGES/gallery"
mkdir -p "$HUGO_IMAGES/matches"
mkdir -p "$HUGO_VIDEOS/matches"

# Copy all image files to gallery
echo "Copying images to gallery..."
find files -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \) -exec cp {} "$HUGO_IMAGES/gallery/" \;

# Copy all video files
echo "Copying videos..."
find files -type f \( -iname "*.mov" -o -iname "*.mp4" -o -iname "*.MOV" -o -iname "*.MP4" \) -exec cp {} "$HUGO_VIDEOS/" \;

# Count files
IMAGE_COUNT=$(find "$HUGO_IMAGES/gallery" -type f | wc -l | tr -d ' ')
VIDEO_COUNT=$(find "$HUGO_VIDEOS" -type f | wc -l | tr -d ' ')

echo ""
echo "✅ Done!"
echo "   - Copied $IMAGE_COUNT images to: $HUGO_IMAGES/gallery/"
echo "   - Copied $VIDEO_COUNT videos to: $HUGO_VIDEOS/"
echo ""
echo "Next steps:"
echo "1. Review the files in hugo-site/themes/rustyplough/static/"
echo "2. Organize match-specific photos into subdirectories"
echo "3. Update match pages to display the photos"
echo ""
echo "To use photos in a match page, move them to:"
echo "   $HUGO_IMAGES/matches/[match-name]/"
