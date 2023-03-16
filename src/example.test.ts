// @vitest-environment jsdom

import Vue, {VueConstructor} from "vue";
import Vuetify from "vuetify";
import {createLocalVue, mount} from "@vue/test-utils";
import {VTextField} from "vuetify/lib/components";
import {describe, beforeAll, it} from "vitest";

describe("example", () => {
  let localVue: VueConstructor;
  let vuetify: Vuetify;

  beforeAll(() => {
    localVue = createLocalVue();
    Vue.use(Vuetify);
    vuetify = new Vuetify();
  });

  it("mounts", async () => {
    mount(VTextField, {
      localVue,
      vuetify,
      propsData: {
        label: "Test"
      }
    });
  });
});
