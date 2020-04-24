import isEmail from "isemail";
import { getStore } from "./utils";

const store = getStore();
// Context passed to all resolvers (third argument)
// req => Query
// connection => Subscription
// eslint-disable-next-line no-unused-vars
export default async ({ req, connection }) => {
  // simple auth check on every request
  const auth = (req.headers && req.headers.authorization) || "";
  const email = new Buffer(auth, "base64").toString("ascii");

  // if the email isn't formatted validly, return null for user
  if (!isEmail.validate(email)) return { user: null };
  // find a user by their email
  const users = await store.users.findOrCreate({ where: { email } });
  const user = users && users[0] ? users[0] : null;

  return { user };
};
