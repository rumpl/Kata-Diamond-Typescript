export default class DiamondBuilder {
  constructor() {

  }

  private pad(letter:string, idx:number):string {
    var num = letter.charCodeAt(0) - 65;

    var ret = '';

    for (var i = 0; i < num - idx; i++) {
      ret += ' ';
    }

    return ret;
  }

  private repeatSpace(repetition:number):string {
    var result:string = '';

    for (var i = 0; i < repetition * 2 - 1; i++) {
      result += ' ';
    }

    return result;
  }

  public getDiamond(letter:string):string[] {
    var lines:string[] = [];

    lines.push(this.pad(letter, 0) + 'A');

    for (var i = 1; i < (letter.charCodeAt(0) - 64); i++) {
      var lineLetter = String.fromCharCode(65 + i);

      lines.push(this.pad(letter, i) + lineLetter + this.repeatSpace(i) + lineLetter);
    }

    for (var i = lines.length - 2; i > -1; i--) {
      lines.push(lines[i]);
    }

    lines.forEach((line) => {console.log(line)});
    console.log();
    return lines;
  }
}
