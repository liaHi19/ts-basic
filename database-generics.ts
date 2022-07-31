interface DatabaseGen<T, K> {
  get(id: K): T;
  set(id: K, value: T): void;
}

interface PersistableGen {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

type DBKeyType = string | number | symbol;

class InMemoryDatabaseGen<T, K extends DBKeyType> implements DatabaseGen<T, K> {
  protected db: Record<K, T> = {} as Record<K, T>;
  get(id: K): T {
    return this.db[id];
  }
  set(id: K, value: T): void {
    this.db[id] = value;
  }
}

class PersistentDatabaseGen<T, K extends DBKeyType>
  extends InMemoryDatabaseGen<T, K>
  implements PersistableGen
{
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDB1Gen = new PersistentDatabaseGen<number, string>();
myDB1Gen.set("foo", 26);
const savedGen = myDB1Gen.saveToString();

const myDB2Gen = new PersistentDatabaseGen<number, string>();
myDB2Gen.restoreFromString(savedGen);
console.log(myDB2Gen.get("foo"));
