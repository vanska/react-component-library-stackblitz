import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

async function postBuildCommands() {
  console.log("POSTTTT");
  
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    watch: {
      include: 'src/**'
    },
  },
  plugins: [react(),    {
    name: 'postbuild-commands', // the name of your custom plugin. Could be anything.
    closeWatcher: async () => {
      await postBuildCommands() // run during closeBundle hook. https://rollupjs.org/guide/en/#closebundle
    }
  },],
})
