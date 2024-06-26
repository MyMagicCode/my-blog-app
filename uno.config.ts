import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno({
      dark: {
        dark: ".dark",
        light: ".light",
      },
    }),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
  shortcuts: {
    "switch-animation": "transition duration-300",
    "bg-base": "bg-[#f0f0f0] dark:bg-[#20202a] switch-animation",
    "card-base": "bg-[#ffffff] dark:bg-[#10101a] switch-animation",
    "text-base": "text-[#20202a] dark:text-[#f0f0f0] switch-animation",
    "switch-label-base": "bg-gray-200 dark:bg-gray-800 switch-animation",
    "switch-span-base": "bg-white dark:bg-gray-300 switch-animation",
  },
});
