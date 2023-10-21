import Spinner from "../components/Spinner/Spinner";

export default {
  title: "Components/Spinners",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    color: {
      options: ["primary", "secondary", "success", "dark"],
      control: { type: "select", defaultValue: "primary" },
    },

    className: {
      type: "string",
    },
  },
};

export const Primary = {
  args: {
    color: "primary",
  },
};

export const Secondary = {
  args: {
    color: "secondary",
  },
};

export const Success = {
  args: {
    color: "success",
  },
};

export const Dark = {
  args: {
    color: "dark",
  },
};
