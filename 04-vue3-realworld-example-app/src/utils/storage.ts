// 타입을 통해 코드가 나타낼 수 있는 표현을 풍성하게 하는 것
const STORAGE_TYPE = {
  LOCAL: 'localStorage',
  SESSION: 'sessionStorage',
} as const;
type StorageType = typeof STORAGE_TYPE['LOCAL' | 'SESSION'];

/**
 * @see https://typescript-kr.github.io/pages/generics.html
 * @description <T = unknown> T에 해당하는 타입을 넣고, 타입 + 스토리지로 사용하는 것 같음, 가령 TokenStorage 같은식
 * @study 클래스를 호출할 때 제네릭(클래스에서 사용할 타입) 값으로 Token을 넘겼기 때문
 */
export default class Storage<T = unknown> {
  private readonly key: string;
  private readonly storageType: StorageType;

  constructor(key: string, storageType: StorageType = STORAGE_TYPE.LOCAL) {
    this.key = key;
    this.storageType = storageType;
  }

  get(): T | null {
    try {
      const value = window[this.storageType].getItem(this.key) ?? '';
      return JSON.parse(value);
    } catch (e) {
      return null;
    }
  }

  set(value: T): void {
    const strValue = JSON.stringify(value);
    window[this.storageType].setItem(this.key, strValue);
  }

  remove(): void {
    window[this.storageType].removeItem(this.key);
  }
}
