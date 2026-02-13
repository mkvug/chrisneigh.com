import plugin from 'tailwindcss/plugin'

export default {
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        'button:not(:disabled), [role="button"]:not(:disabled), a': {
          cursor: 'pointer',
        },
      })
    }),
  ],
}
