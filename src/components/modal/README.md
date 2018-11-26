```jsx
class ModalExample extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
    this.toggleOpen = this.toggleOpen.bind(this)
  }
  toggleOpen() {
    this.setState((prevState, props) => ({
      isOpen: !prevState.isOpen
    }))
  }
  render() {
    return (
      <div>
        <Button onClick={this.toggleOpen}>Show Modal</Button>
        <Modal open={this.state.isOpen} onClose={this.toggleOpen}>
          <div
            style={{
              background: 'white',
              width: '500px',
              textAlign: 'center',
              padding: '40px'
            }}
          >
            A Modal is a component that can contain any content.
            <br />
            To close the modal, click anywhere outside of it, or press ESC.
          </div>
        </Modal>
      </div>
    )
  }
}
;<ModalExample />
```
