import { Component, TSX, Vue } from "vue-facing-decorator";

@Component({
  render() {
    return (
      <div class="h-screen w-screen flex flex-col justify-center items-center text-center">
        <h1>Malagu Rpc + Vue 3 + Vue Router + Pinia + Vue Decorator + TSX + UNOCSS + Less</h1>
        <hr />
        <p>
          Powered by <a href="">Zero</a>
        </p>
        <p>Notice: This template support bun, but malagu isn't support pnpm, so recommend use bun in project.</p>
      </div>
    );
  },
})
export default class RootView extends TSX()(Vue) {}
