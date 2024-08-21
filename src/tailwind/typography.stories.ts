import { html } from "@/lib/tags";
import { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<never> = {
  tags: ["autodocs"],
};

export default meta;

export const Title: StoryObj<typeof meta> = {
  render: () => ({
    setup() {},
    template: html`<div class="ris-title-regular">Title</div>`,
  }),
};

export const Heading1: StoryObj<typeof meta> = {
  render: () => ({
    setup() {},
    template: html`<div class="ris-heading1-regular">Heading 1</div>
      <div class="ris-heading1-bold">Heading 1</div>`,
  }),
};

export const Heading2: StoryObj<typeof meta> = {
  render: () => ({
    setup() {},
    template: html`<div class="ris-heading2-regular">Heading 2</div>
      <div class="ris-heading2-bold">Heading 2</div>`,
  }),
};

export const Heading3: StoryObj<typeof meta> = {
  render: () => ({
    setup() {},
    template: html`<div class="ris-heading3-regular">Heading 3</div>
      <div class="ris-heading3-bold">Heading 3</div>`,
  }),
};

export const Subhead: StoryObj<typeof meta> = {
  render: () => ({
    setup() {},
    template: html`<div class="ris-subhead-regular">Subhead</div>`,
  }),
};

export const Body1: StoryObj<typeof meta> = {
  render: () => ({
    setup() {},
    template: html`<div class="ris-body1-regular">Body 1</div>
      <div class="ris-body1-bold">Body 1</div>`,
  }),
};

export const Body2: StoryObj<typeof meta> = {
  render: () => ({
    setup() {},
    template: html`<div class="ris-body2-regular">Body 2</div>
      <div class="ris-body2-bold">Body 2</div>`,
  }),
};

export const Body3: StoryObj<typeof meta> = {
  render: () => ({
    setup() {},
    template: html`<div class="ris-body3-regular">Body 3</div>
      <div class="ris-body3-bold">Body 3</div>`,
  }),
};

export const Label1: StoryObj<typeof meta> = {
  render: () => ({
    setup() {},
    template: html`<div class="ris-label1-regular">Label 1</div>
      <div class="ris-label1-bold">Label 1</div>`,
  }),
};

export const Label2: StoryObj<typeof meta> = {
  render: () => ({
    setup() {},
    template: html`<div class="ris-label2-regular">Label 2</div>
      <div class="ris-label2-bold">Label 2</div>`,
  }),
};

export const Label3: StoryObj<typeof meta> = {
  render: () => ({
    setup() {},
    template: html`<div class="ris-label3-regular">Label 3</div>
      <div class="ris-label3-bold">Label 3</div>`,
  }),
};

export const Link1: StoryObj<typeof meta> = {
  render: () => ({
    setup() {},
    template: html`<div><a href="#" class="ris-link1-regular">Link 1</a></div>
      <div><a href="#" class="ris-link1-bold">Link 1</a></div>`,
  }),
};

export const Link2: StoryObj<typeof meta> = {
  render: () => ({
    setup() {},
    template: html`<div><a href="#" class="ris-link2-regular">Link 2</a></div>
      <div><a href="#" class="ris-link2-bold">Link 2</a></div>`,
  }),
};

export const Link3: StoryObj<typeof meta> = {
  render: () => ({
    setup() {},
    template: html`<div><a href="#" class="ris-link3-regular">Link 3</a></div>
      <div><a href="#" class="ris-link3-bold">Link 3</a></div>`,
  }),
};
