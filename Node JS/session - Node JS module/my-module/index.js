class Color {
    constructor(name, code) {
      this.name = name;
      this.code = code;
    }
  }
  
  const allColors = [
    new Color('brightred', '#E74C3C'),
    new Color('soothingpurple', '#9B59B6'),
    new Color('skyblue', '#5DADE2'),
    new Color('leafygreen', '#48C9B0'),
    new Color('sunkissedyellow', '#F4D03F'),
    new Color('groovygray', '#D7DBDD'),
  ];
  
  // exporting
  exports.getRandomColor = () => {
    return allColors[Math.floor(Math.random() * allColors.length)];
  }
  
  // exporting
  exports.allColors = allColors;