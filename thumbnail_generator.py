#!/usr/bin/env python3
"""
Generate low-resolution thumbnails for photo gallery images.
Creates tiny blurred versions for progressive loading.
"""

import os
from pathlib import Path
from PIL import Image


# Configuration
INPUT_DIR = "src/assets/photogallery/full"
OUTPUT_DIR = "src/assets/photogallery/thumbnails"
THUMBNAIL_MAX_SIZE = 30  # Maximum dimension (width or height)
QUALITY = 60  # JPEG quality (lower = smaller file size)


def create_thumbnails():
    """Generate thumbnails for all images in the input directory."""

    # Create input and output directories if they don't exist
    input_path = Path(INPUT_DIR)
    output_path = Path(OUTPUT_DIR)

    if not input_path.exists():
        print(f"Error: Input directory '{INPUT_DIR}' does not exist!")
        return

    output_path.mkdir(parents=True, exist_ok=True)

    # Supported image formats
    supported_formats = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".bmp"}

    # Process each image
    processed = 0
    for image_file in input_path.iterdir():
        if image_file.suffix.lower() not in supported_formats:
            continue

        try:
            # Open the image
            with Image.open(image_file) as img:
                # Fix orientation based on EXIF data
                try:
                    from PIL import ImageOps

                    img = ImageOps.exif_transpose(img)
                except Exception:
                    pass  # If no EXIF data, continue normally

                # Convert RGBA to RGB if necessary (for JPEG compatibility)
                if img.mode in ("RGBA", "LA", "P"):
                    background = Image.new("RGB", img.size, (255, 255, 255))
                    if img.mode == "P":
                        img = img.convert("RGBA")
                    background.paste(
                        img,
                        mask=img.split()[-1] if img.mode in ("RGBA", "LA") else None,
                    )
                    img = background

                # Calculate thumbnail size while maintaining aspect ratio
                aspect_ratio = img.width / img.height
                if img.width > img.height:
                    thumb_width = THUMBNAIL_MAX_SIZE
                    thumb_height = int(THUMBNAIL_MAX_SIZE / aspect_ratio)
                else:
                    thumb_height = THUMBNAIL_MAX_SIZE
                    thumb_width = int(THUMBNAIL_MAX_SIZE * aspect_ratio)

                # Create thumbnail
                img.thumbnail((thumb_width, thumb_height), Image.Resampling.LANCZOS)

                # Save as JPEG with low quality
                output_file = output_path / f"{image_file.stem}.jpg"
                img.save(output_file, "JPEG", quality=QUALITY, optimize=True)

                print(f"✓ Created thumbnail: {output_file.name}")
                processed += 1

        except Exception as e:
            print(f"✗ Error processing {image_file.name}: {e}")

    print(f"\n{'='*50}")
    print(f"Processed {processed} images")
    print(f"Thumbnails saved to: {OUTPUT_DIR}")
    print(f"{'='*50}")


def print_aspect_ratios():
    """Print aspect ratios for all images to help with layout."""

    input_path = Path(INPUT_DIR)
    supported_formats = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".bmp"}

    print(f"\n{'='*50}")
    print("Image Aspect Ratios (for your TypeScript code):")
    print(f"{'='*50}\n")

    for image_file in sorted(input_path.iterdir()):
        if image_file.suffix.lower() not in supported_formats:
            continue

        try:
            with Image.open(image_file) as img:
                aspect_ratio = round(img.width / img.height, 2)
                print(
                    f"{{ src: '{image_file.name}', alt: '{image_file.stem}', aspectRatio: {aspect_ratio} }},"
                )
        except Exception as e:
            print(f"Error reading {image_file.name}: {e}")

    print()


if __name__ == "__main__":
    print("Photo Gallery Thumbnail Generator")
    print("=" * 50)

    create_thumbnails()
    print_aspect_ratios()
