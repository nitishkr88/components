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
      background: '#F1F1F1',
      backgroundHover: '#E9E8E8',
      backgroundFocus: '#E9E8E8',
      backgroundActive: '#DADADA',
      text: '#333',
      icon: 'default',
      border: '#F1F1F1',
      borderHover: '#E9E8E8',
      borderFocus: '#E9E8E8',
      borderActive: '#DADADA'
    },
    secondary: {
      background: '#44C7F4',
      backgroundHover: '#13B7ED',
      backgroundFocus: '#13B7ED',
      backgroundActive: '#11A7D9',
      text: '#FAFAFA',
      icon: 'white',
      border: '#44C7F4',
      borderHover: '#13B7ED',
      borderFocus: '#13B7ED',
      borderActive: '#11A7D9'
    },
    transparent: {
      background: 'transparent',
      backgroundHover: 'rgba(0,0,0,0.05)',
      backgroundFocus: 'rgba(0,0,0,0.05)',
      backgroundActive: '#DADADA',
      text: '#333',
      icon: 'default',
      border: '#D0D2D3',
      borderHover: '#B5B7B8',
      borderFocus: '#B5B7B8',
      borderActive: '#DADADA'
    },
    link: {
      background: 'transparent',
      backgroundHover: 'transparent',
      backgroundFocus: 'transparent',
      text: '#0a84ae',
      icon: 'blue',
      border: 'transparent',
      borderHover: 'transparent',
      borderFocus: 'transparent'
    }
  },
  [THEMES.dark]: {}
}

const checkbox = {
  [THEMES.light]: {
    background: colors.white,
    backgroundDisabled: colors.lighterGrey,
    backgroundSelected: colors.blue,
    border: colors.ashGrey,
    borderSelected: colors.blue,
    shadow: 'rgba(0,0,0,0.20)',
    shadowDisabled: 'rgba(0,0,0,0.10)'
  },
  [THEMES.dark]: {}
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

export { avatar, button, checkbox, icon, input }
