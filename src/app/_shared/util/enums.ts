export class UtilEnum {
  static enumToArray(enumeration: any) {
    const result: Array<{ key: string; value: any }> = [];
    for (let key in enumeration) {
      if (!isNaN(Number(key))) continue;

      const value = enumeration[key] as string | number;
      result.push({ key, value });
    }
    return result;
  }
}
