import UNOCSS from "@unocss/webpack";
import presetUno from "@unocss/preset-uno";
import { ConfigurationContext, type WebpackContext } from "@malagu/cli-service/lib/context/context-protocol";

export default async (ctx: WebpackContext) => {
  const { configurations } = ctx;
  const webpackConfig = ConfigurationContext.getFrontendConfiguration(configurations);

  if (!webpackConfig) return;
  // En: Change your unocss options here
  // Zh: 可以在这里修改你的 unocss 配置 比如添加presets等
  webpackConfig.plugin("unocss").use(
    UNOCSS({
      presets: [presetUno()],
    })
  );
  webpackConfig.optimization.set("realContentHash", true);
};
