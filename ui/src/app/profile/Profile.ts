export class Profile {
  private _id: bigint;
  private _firstName: string;

  constructor(id: bigint, firstName: string) {
    this._id = id;
    this._firstName = firstName;
  }

  get id(): bigint {
    return this._id;
  }

  set id(value: bigint) {
    this._id = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }
}
