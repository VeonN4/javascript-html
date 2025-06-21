# Define the path to search
$searchPath = "C:\Users\Veonise\Documents\Workspace\javascript-html"

# Count .html files
$htmlFileCount = (Get-ChildItem -Path $searchPath -Recurse -File -Filter *.html).Count
$remainingTugas = 100-$htmlFileCount

# Output the total
Write-Output "Total tugas: $htmlFileCount"
Write-Output "Sisa tugas: $remainingTugas"
