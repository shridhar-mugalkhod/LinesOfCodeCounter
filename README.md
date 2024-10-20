# LinesOfCodeCounter

A simple **JavaScript tool** to count the lines in a source code file. The tool categorizes each line as:  
- **Blank line**
- **Comment**
- **Code**

It provides the **total number of lines** along with individual counts for blank lines, comments, and code lines.

---

## Features
- **Strict input validation**: Accepts only valid files, not directories.
- **Supports single-line and multi-line comments**: Lines starting with `//` are treated as single-line comments and Lines starting with `/*` are treated as multi-line comments.
- **Extensible**: Easily add support for other languages.

---

## Prerequisites
- **Node.js** installed on your machine.  

---

## Usage

1. **Clone the repository** or copy the `codeCounter.js` file into your project directory.
2. Open a terminal and navigate to the folder where `codeCounter.js` is located.
3. **Run the tool** with a valid file as input:
   ```bash
   node codeCounter.js <input-file>
