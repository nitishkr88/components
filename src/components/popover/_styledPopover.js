import styled from 'styled-components'

const StyledPopover = styled.div`
  box-sizing: border-box;
  background: white;
  color: black;
  border: none;
  box-shadow: 0 6px 8px rgba(22, 22, 22, 0.15);
  border-radius: 2px;
  width: ${props => (props.fullWidth ? '100%' : 'max-content')};
  padding: 4px;
  z-index: 2;
`

export default StyledPopover
