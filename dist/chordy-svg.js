// This is a declaration file in TypeScript and does not contain executable code.
// It defines types and interfaces for the "chordy-svg" module and a global namespace.
// Since it only contains type declarations, there is no direct JavaScript equivalent to convert to.
// However, if you want a JavaScript stub that represents the structure, here is an approximation:

// Note: This JavaScript code does not enforce types and does not implement functionality.

class ChordySvg {
  /**
   * @param {Object} input - InputChord
   * @param {Object} [options] - Partial Config
   */
  constructor(input, options) {
    /** @type {Object} */
    this.config = null;
    /** @type {Object} */
    this.svgConfig = null;
    /** @type {Object} */
    this.chord = null;
    /** @type {*} */
    this.svgChord = null;
    /** @type {string} */
    this.svgData = '';
  }

  /**
   * @returns {string}
   */
  svg() {
    return '';
  }

  /**
   * @returns {string[]}
   */
  notes() {
    return [];
  }

  /**
   * @private
   * @param {Object} input - InputChord
   */
  processChord(input) {}

  /**
   * @private
   * @param {*} group
   * @returns {ChordySvg}
   */
  drawStrings(group) {
    return this;
  }

  /**
   * @private
   * @param {*} groupX
   * @param {Object} input - InputChord
   */
  drawX(groupX, input) {}

  /**
   * @private
   * @param {*} groupDots
   */
  drawDots(groupDots) {}

  /**
   * @private
   * @param {*} groupTitle
   */
  drawTitle(groupTitle) {}

  /**
   * @private
   * @param {Object} obj
   * @returns {boolean}
   */
  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
}

// Export default stub
export default ChordySvg;
