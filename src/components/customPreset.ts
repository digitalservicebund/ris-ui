const customPreset = {
  button: {
    root(ctx) {
      console.log(ctx);
      return "bg-red-500 text-white font-bold rounded";
    },
    label: "text-lg",
  },
};

export default customPreset;
