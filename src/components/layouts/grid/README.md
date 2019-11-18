```jsx
import styled from 'styled-components'

const GridExample = () => {
  const Box = styled.div`
    background-color: #444;
    color: #fff;
    border-radius: 5px;
    padding: 20px;
    font-size: 150%;
  `
  return (
    <Grid gap="10px" width="240px">
      <Box>A</Box>
      <Box>B</Box>
      <Box>C</Box>
      <Box>D</Box>
      <Box>E</Box>
      <Box>F</Box>
    </Grid>
  )
}
;<GridExample />
```
