const plugins = []

if (process.env.NODE_ENV !== "production") {
  plugins.push("react-refresh/babel")
}

export default {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  plugins: plugins
};
