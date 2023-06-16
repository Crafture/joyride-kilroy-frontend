module.exports = {
    darkMode: 'media',
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./node_modules/flowbite.{js,ts}",
    ],
    theme: {
        extend: {
            colors: {
                'prim': '#5A1A4E',
                'input': '#CF94C7',
                'btn': '#23B3DA'
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}