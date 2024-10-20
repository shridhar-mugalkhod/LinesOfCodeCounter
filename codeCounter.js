var fs = require('fs');

// Test first comment

function countLinesOfCode(filepath) {
    let blankLines = 0;
    let commentLines = 0;
    let codeLines = 0;
    let totalLines = 0;
    let inMultiLineComment = false;

    const data = fs.readFileSync(filepath, 'utf8');
    const lines = data.split('\n');
// Test second comment

/* It supports multiline comments also.
x
y
z

gives the output */

    lines.forEach(line => {
        totalLines++;
        const strippedLine = line.trim();

        if (inMultiLineComment) {
            commentLines++;
            if (strippedLine.includes('*/')) {
                inMultiLineComment = false; 
            }
        } else if (!strippedLine) {
            blankLines++;
        } else if (strippedLine.startsWith('//')) {
            commentLines++;
        } else if (strippedLine.startsWith('/*')) {
            commentLines++;
            inMultiLineComment = true; 
        } else {
            codeLines++;
        }
    });



    console.log(`Blank: ${blankLines}`);
    console.log(`Comments: ${commentLines}`);
    console.log(`Code: ${codeLines}`);
    console.log(`Total: ${totalLines}`);
}

const filePath = process.argv[2];

if (!filePath) {
    console.error("Usage: node codeCounter.js <input-file>");
    process.exit(1);
  }

const stats = fs.statSync(filePath);

if (!stats.isFile()) {
    console.error("Error: The provided input is not a valid file.");
    process.exit(1);
}


countLinesOfCode(filePath);

// Test last comment