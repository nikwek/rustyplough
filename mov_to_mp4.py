import subprocess
import os
import sys

# Check if a file path was provided
if len(sys.argv) < 2:
    print("Usage: python mov_to_mp4.py <path_to_video_file>")
    sys.exit(1)

# Get the input file path
input_file = sys.argv[1]

# Check if file exists
if not os.path.exists(input_file):
    print(f"Error: File '{input_file}' not found.")
    sys.exit(1)

# Generate output file path (same directory, .mp4 extension)
output_file = os.path.splitext(input_file)[0] + ".mp4"

print(f"Converting {input_file} → {output_file} ...")

# Run ffmpeg conversion
command = [
    "ffmpeg",
    "-i", input_file,
    "-c:v", "libx264",   # H.264 video codec
    "-c:a", "aac",       # AAC audio codec
    "-strict", "experimental",
    output_file
]

try:
    subprocess.run(command, check=True)
    print(f"✅ Done: {output_file}")
except subprocess.CalledProcessError as e:
    print(f"❌ Error during conversion: {e}")
    sys.exit(1)
