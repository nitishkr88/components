```jsx
import Button from '../button'

class SimplePopover extends React.Component {
  constructor() {
    super()
    this.state = {
      anchorEl: null
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClick(event) {
    this.setState({
      anchorEl: event.currentTarget
    })
  }

  handleClose() {
    this.setState({
      anchorEl: null
    })
  }

  render() {
    const { anchorEl } = this.state
    const isOpen = Boolean(anchorEl)

    return (
      <div>
        <Button onClick={this.handleClick}>Open Popover</Button>
        <Popover anchorEl={anchorEl} isOpen={isOpen} onClose={this.handleClose}>
          <div>
            <div>Popover content</div>
            <div>Popover content</div>
            <div>Popover content</div>
            <div>Popover content</div>
            <div>Popover content</div>
          </div>
        </Popover>
      </div>
    )
  }
}
;<SimplePopover />
```
