interface MyUser {
  name: string;
  id: number;
  email?: string;
}

type MyUserOptionals = Partial<MyUser>;
type MyUserRequired = Required<MyUser>;
type EmailAndName = Pick<MyUser, "email" | "name">;
type UserWithoutID = Omit<MyUser, "id">;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge({ name: "natalia", id: 1, email: "nata@gmail.com" }, { name: "Nata" })
);

const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutID> => {
  return users.reduce((a, v) => {
    const { id, ...other } = v;
    return {
      ...a,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById([
    { name: "Nata", id: 1 },
    { name: "Iryna", id: 2 },
  ])
);
