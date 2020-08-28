
export default class ObjectHelper {
  public static isEmpty(obj: object): boolean {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }

    return true;
  }

  public static flashToObject(flashArray: string[][]): { [s: string]: string} {
    return flashArray.reduce((prev, curr) => ({ [curr[0]]: curr[1], ...prev }), {});
  }
}
