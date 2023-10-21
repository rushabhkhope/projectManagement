import styles from "../public/stylesheets/button.module.css";
import Buttons from "../components/Buttons/Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

export default {
  title: "Components/Buttons",
  component: Buttons,
  tags: ["autodocs"],
  argTypes: {
    color: {
      options: ["primary", "secondary", "success", "dark"],
      control: { type: "select", defaultValue: "primary" },
    },
    variant: {
      options: ["contain", "text", "outline"],
      control: { type: "select", selected: "contain" },
    },
    className: {
      type: "string",
    },
    rounded: {
      type: "boolean",
    },
    loading: {
      type: "boolean",
    },
  },
};

export const Primary = {
  args: {
    children: "Button",
    color: "primary",
    variant: "contain",
  },
};

export const Secondary = {
  args: {
    children: "Button",
    color: "secondary",
    variant: "contain",
  },
};

export const Success = {
  args: {
    children: "Button",
    color: "success",
    variant: "contain",
  },
};

export const Dark = {
  args: {
    children: "Button",
    color: "dark",
    variant: "contain",
  },
};
