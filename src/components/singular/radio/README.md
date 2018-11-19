```jsx
class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: 'one' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    this.setState({ selected: evt.target.value })
  }

  render() {
    return (
      <Radio.Group
        name="example"
        selected={this.state.selected}
        onChange={this.handleChange}
      >
        <Radio value="one">Option 1</Radio>
        <Radio value="two">Option 2</Radio>
      </Radio.Group>
    )
  }
}
;<Example />
```
