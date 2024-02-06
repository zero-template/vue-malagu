import "uno.css";
import "./assets/global.less";
import { createApp } from "vue";
import { App } from "@malagu/vue";
import { router } from "./router";
import { createPinia } from "pinia";
import RootView from "./Root.view";

@App(createApp(RootView).use(router).use(createPinia()))
export default class {}
