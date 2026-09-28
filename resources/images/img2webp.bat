@echo off
echo Converting images to WebP...

for %%f in (*.jpg *.jpeg *.png *.bmp *.tiff) do (
    echo Converting %%f
    magick "%%f" -resize "1400x>" -quality 80 "%%~nf.webp"
)

echo.
echo Conversion complete!
pause
