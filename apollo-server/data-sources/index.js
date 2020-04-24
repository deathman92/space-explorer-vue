import LaunchAPI from "./launch";
import UserAPI from "./user";
import { getStore } from "../utils";

export default function() {
  return {
    launchAPI: new LaunchAPI(),
    userAPI: new UserAPI({ store: getStore() })
  };
}
