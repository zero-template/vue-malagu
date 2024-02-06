// Zh: 你不应该在这里改变unocss的配置，应该在src/hooks/webpack.ts中修改
// 这个文件纯粹就是让unocss的vscode插件生效

// En: You should not change the unocss configuration here, you should change it in src/hooks/webpack.ts
// This file is just for the unocss vscode plugin to take effect
import { defineConfig } from "unocss";
import presetUno from "@unocss/preset-uno";

export default defineConfig({
  presets: [presetUno()],
});
