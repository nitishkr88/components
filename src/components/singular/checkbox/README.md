```jsx
<Checkbox name="one" value="one">
  Option
</Checkbox>
```

### Read-Only

```jsx
<Checkbox name="one" value="one" readOnly>
  Option
</Checkbox>
```

### Grouped and aligned vertically

```jsx
<Checkbox.Group name="example" selected={['one', 'two']}>
  <Checkbox name="one" value="one">
    Option 1
  </Checkbox>
  <Checkbox name="two" value="two">
    Option 2
  </Checkbox>
  <Checkbox name="three" value="three">
    Option 3
  </Checkbox>
  <Checkbox name="four" value="four">
    Option 4
  </Checkbox>
</Checkbox.Group>
```

### Grouped and aligned horizontally

```jsx
<Checkbox.Group name="example" selected={['one', 'two']} align="horizontal">
  <Checkbox name="one" value="one">
    Option 1
  </Checkbox>
  <Checkbox name="two" value="two">
    Option 2
  </Checkbox>
  <Checkbox name="three" value="three">
    Option 3
  </Checkbox>
  <Checkbox name="four" value="four">
    Option 4
  </Checkbox>
</Checkbox.Group>
```

### Grouped and read-only

```jsx
<Checkbox.Group
  name="example"
  selected={['one', 'two']}
  align="horizontal"
  readOnly
>
  <Checkbox name="one" value="one">
    Option 1
  </Checkbox>
  <Checkbox name="two" value="two">
    Option 2
  </Checkbox>
  <Checkbox name="three" value="three">
    Option 3
  </Checkbox>
  <Checkbox name="four" value="four">
    Option 4
  </Checkbox>
</Checkbox.Group>
```

### Grouped and selective read-only

```jsx
<Checkbox.Group name="example" selected={['one', 'two']} align="horizontal">
  <Checkbox name="one" value="one" readOnly>
    Option 1
  </Checkbox>
  <Checkbox name="two" value="two" readOnly>
    Option 2
  </Checkbox>
  <Checkbox name="three" value="three">
    Option 3
  </Checkbox>
  <Checkbox name="four" value="four">
    Option 4
  </Checkbox>
</Checkbox.Group>
```
