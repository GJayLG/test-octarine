import { Menu } from "github.com/octarine-public/wrapper/index"

const section = Menu.AddEntryDeep(["Examples", "Utility", "Safe to leave"])
const State = section.AddToggle("Enable")