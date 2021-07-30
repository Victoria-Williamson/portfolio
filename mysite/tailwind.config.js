module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkPink: "#C53A57",
        darkOrange:"#FF7A00",
        darkGreen:"#A9B947",
        lightBlue: "#1DA1F2",
        darkBlue: "#4169E1",
        violet:"#A749BC",
        themePink:"#D12784",
        darkBlack:"#272727",
        lightOrange:"#FA973B",
        lightPink:"#E65971",
        lightGreen:"#E1E619",


      },
      backgroundImage: theme => ({
        'heropattern': "url('./AboutMe/Filler.png')",
      })
      
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
