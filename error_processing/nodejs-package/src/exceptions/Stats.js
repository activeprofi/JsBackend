class Stats {
  constructor(file, directory) {
    this.file = file;
    this.directory = directory;
  }

  isDirectory() {
    return this.directory;
  }

  isFile() {
    return this.file;
  }
}

export default Stats;
