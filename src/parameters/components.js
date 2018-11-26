import colors, { THEMES } from './colors'

const avatar = {
  [THEMES.light]: {
    text: colors.black,
    background: colors.lightGrey,
    border: colors.transparent
  },
  [THEMES.dark]: {
    text: colors.white,
    background: colors.lighterBlack,
    border: colors.lighterBlack
  }
}

const button = {
  [THEMES.light]: {
    primary: {
      background: colors.lightBlue,
      backgroundHover: colors.blue,
      backgroundFocus: colors.blue,
      backgroundActive: colors.blue,
      text: colors.white,
      icon: colors.white,
      border: colors.lightBlue,
      borderHover: colors.blue,
      borderFocus: colors.blue,
      borderActive: colors.blue
    },
    secondary: {
      background: colors.transparent,
      backgroundHover: colors.transparent,
      backgroundFocus: colors.transparent,
      backgroundActive: colors.transparent,
      text: colors.black,
      icon: colors.lightBlack,
      border: colors.ashGrey,
      borderHover: colors.blue,
      borderFocus: colors.blue,
      borderActive: colors.blue
    },
    link: {
      background: colors.transparent,
      backgroundHover: colors.transparent,
      backgroundFocus: colors.transparent,
      text: colors.lightBlue,
      icon: colors.blue,
      border: colors.transparent,
      borderHover: colors.transparent,
      borderFocus: colors.transparent
    }
  },
  [THEMES.dark]: {}
}

const checkbox = {
  [THEMES.light]: {
    text: colors.black,
    background: colors.white,
    backgroundDisabled: colors.lighterGrey,
    backgroundSelected: colors.lightBlue,
    border: colors.ashGrey,
    borderSelected: colors.lightBlue,
    shadow: 'rgba(0,0,0,0.20)',
    shadowDisabled: 'rgba(0,0,0,0.10)'
  },
  [THEMES.dark]: {
    text: colors.white,
    background: colors.white,
    backgroundDisabled: colors.lighterGrey,
    backgroundSelected: colors.lightBlue,
    border: colors.ashGrey,
    borderSelected: colors.lightBlue,
    shadow: 'rgba(0,0,0,0.20)',
    shadowDisabled: 'rgba(0,0,0,0.10)'
  }
}

const icon = {
  [THEMES.light]: {
    color: colors.lightBlack
  },
  [THEMES.dark]: {
    color: colors.ashGrey
  }
}

const input = {
  [THEMES.light]: {
    background: colors.transparent,
    backgroundReadOnly: colors.lighterGrey,
    border: colors.ashGrey,
    borderHover: colors.lightBlue,
    borderFocus: colors.lightBlue,
    borderError: colors.red,
    icon: colors.lightBlack,
    label: colors.lighterBlack,
    labelReadOnly: colors.ashGrey,
    placeholder: colors.ashGrey,
    placeholderReadOnly: colors.ashGrey,
    text: colors.black
  },
  [THEMES.dark]: {
    background: colors.lighterBlack,
    backgroundReadOnly: colors.lighterBlack,
    border: colors.lightBlack,
    borderHover: colors.black,
    borderFocus: colors.black,
    borderError: colors.red,
    icon: colors.ashGrey,
    label: colors.white,
    labelReadOnly: colors.ashGrey,
    placeholder: colors.lighterGrey,
    placeholderReadOnly: colors.lighterGrey,
    text: colors.black
  }
}

const spinner = {
  [THEMES.light]: {
    color: colors.grey,
    highlight: colors.lighterBlack
  },
  [THEMES.dark]: {
    color: colors.ashGrey,
    highlight: colors.white
  }
}

export { avatar, button, checkbox, icon, input, spinner }
