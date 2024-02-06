import { Component, TSX, Vue } from "vue-facing-decorator";
import Logo from "./images/logo.png";

@Component({
  render() {
    return (
      <div class="h-screen w-screen flex flex-col justify-center items-center text-center gap2">
        <img src={Logo} />
        <hr />
        <h1>Malagu Rpc + Vue 3 + Vue Router + Pinia + Vue Decorator + TSX</h1>
        <h2>UNOCSS + Less</h2>
        <h3>ESLint + Prettier + CommitLint + Husky + Link Staged</h3>
        <hr />
        <p>
          Powered by <a href="https://github.com/Groupguanfang">Zero</a>
        </p>
        <p>Notice: This template support bun, but malagu isn't support pnpm, so recommend use bun in project.</p>
      </div>
    );
  },
})
export default class RootView extends TSX()(Vue) {
  mounted() {
    console.log("RootView mounted");
  }
}
