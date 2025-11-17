import * as fs from "fs";
import * as path from "path";
import fetch from "node-fetch";
import {execSync} from "child_process";

const OPENAPI_URL = "http://localhost:8080/v3/api-docs"; // <-- change this
const LOCAL_SPEC_PATH = path.resolve("src/api/openapi.json");

async function downloadSpec() {
    console.log("🔄 Downloading OpenAPI spec...");

    const res = await fetch(OPENAPI_URL);
    if (!res.ok) {
        throw new Error(`Failed to fetch OpenAPI spec: ${res.statusText}`);
    }

    const data = await res.json();

    fs.mkdirSync(path.dirname(LOCAL_SPEC_PATH), {recursive: true});
    fs.writeFileSync(LOCAL_SPEC_PATH, JSON.stringify(data, null, 2));
    console.log(`✅ Saved OpenAPI spec to ${LOCAL_SPEC_PATH}`);
}

async function generate() {
    console.log("⚙️ Generating RTK Query API from OpenAPI config...");

    // Run the generator using your existing openapi.config.js
    execSync("npx @rtk-query/codegen-openapi openapi.config.js", {stdio: "inherit"});

    console.log("🎉 API generation complete!");
}

(async function main() {
    try {
        await downloadSpec();
        await generate();
    } catch (err) {
        console.error("❌ Error generating API:", err);
        process.exit(1);
    }
})();
