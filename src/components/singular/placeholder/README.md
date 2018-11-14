```jsx
class MyComponent extends React.Component {
  render() {
    return <div>MyComponent</div>
  }
}
;<Placeholder type="text" ready={false}>
  <MyComponent />
</Placeholder>
```

```jsx
class MyComponent extends React.Component {
  render() {
    return <div>MyComponent</div>
  }
}
;<Placeholder type="rect" ready={false} style={{ width: 100, height: 100 }}>
  <MyComponent />
</Placeholder>
```

```jsx
class MyComponent extends React.Component {
  render() {
    return <div>MyComponent</div>
  }
}
;<Placeholder type="round" ready={false} style={{ width: 50, height: 50 }}>
  <MyComponent />
</Placeholder>
```

### With Custom Placeholder

```jsx
class MyComponent extends React.Component {
  render() {
    return <div>MyComponent</div>
  }
}
class CustomPlaceholder extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Placeholder.Round style={{ width: 60, height: 60 }} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: 400,
            marginLeft: 10
          }}
        >
          <Placeholder.Text />
          <Placeholder.Text />
          <Placeholder.Text />
          <Placeholder.Text />
        </div>
      </div>
    )
  }
}
;<Placeholder customPlaceholder={<CustomPlaceholder />} ready={false}>
  <MyComponent />
</Placeholder>
```

### With Delay

```jsx
class MyComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      ready: true
    }
    this.toggleReady = this.toggleReady.bind(this)
  }

  toggleReady() {
    this.setState(({ ready }) => ({
      ready: !ready
    }))
  }
  render() {
    return (
      <div>
        <button onClick={this.toggleReady}>
          Toggle Ready State: {`${String(this.state.ready)}`}
        </button>
        <Placeholder type="text" delay={2000} ready={this.state.ready}>
          <div style={{ marginTop: 10 }}>Content</div>
        </Placeholder>
      </div>
    )
  }
}
;<MyComponent />
```

### Show Placeholder only on first launch

```jsx
class MyComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      ready: false
    }
    this.toggleReady = this.toggleReady.bind(this)
  }

  toggleReady() {
    this.setState(({ ready }) => ({
      ready: !ready
    }))
  }
  render() {
    return (
      <div>
        <button onClick={this.toggleReady}>
          Toggle Ready State: {`${String(this.state.ready)}`}
        </button>
        <Placeholder type="text" firstLaunchOnly ready={this.state.ready}>
          <div style={{ marginTop: 10 }}>Content</div>
        </Placeholder>
      </div>
    )
  }
}
;<MyComponent />
```

### Mimic fast API

We don't need a short flicker of placeholder in this case

```jsx
class MyComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      content: null,
      ready: false
    }
  }

  componentDidMount() {
    this.sleep(100).then(() =>
      this.setState({ ready: true, content: 'loaded content' })
    )
  }

  sleep(delay) {
    return new Promise((resolve, _) => setTimeout(resolve, delay))
  }

  render() {
    return (
      <div>
        <Placeholder
          type="text"
          delay={2000}
          firstLaunchOnly
          ready={this.state.ready}
        >
          <div style={{ marginTop: 10 }}>{this.state.content}</div>
        </Placeholder>
      </div>
    )
  }
}
;<MyComponent />
```
