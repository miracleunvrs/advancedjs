import ConfigManager from "./singleton.js";
import configModule from "./config.js";

// Test class-based Singleton
const instance1 = ConfigManager.getInstance();
const instance2 = ConfigManager.getInstance();

console.log("Same instance (getInstance):", instance1 === instance2);

const instance3 = new ConfigManager();
console.log("Same instance (new):", instance1 === instance3);

instance1.set("appName", "MyApp");
console.log("From instance2:", instance2.get("appName"));

// Test module-based singleton
configModule.set("version", "1.0.0");
console.log("Module version:", configModule.get("version"));