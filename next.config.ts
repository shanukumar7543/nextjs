import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  "compilerOptions": {
    "jsx": "preserve",
    "strict": true,
    "moduleResolution": "node",
    "typeRoots": ["./node_modules/@types"],
    "esModuleInterop": true
  }


};


export default nextConfig;
