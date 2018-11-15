### Avatar with name and without image

```js
<div>
  <Avatar size="small" name="John Doe" />
  <br />
  <Avatar size="medium" name="John Doe" />
  <br />
  <Avatar size="large" name="John Doe" />
</div>
```

### Avatar without label

```js
<div>
  <Avatar size="small" showName={false} name="John Doe" />
  <br />
  <Avatar size="medium" showName={false} name="John Doe" />
  <br />
  <Avatar size="large" showName={false} name="John Doe" />
</div>
```

### Avatar with only image

```js
<div>
  <Avatar image="https://picsum.photos/200/300?random" size="small" />
  <br />
  <Avatar image="https://picsum.photos/200/300?random" size="medium" />
  <br />
  <Avatar image="https://picsum.photos/200/300?random" size="large" />
</div>
```

### Avatar with image and username

```js
<div>
  <Avatar
    image="https://picsum.photos/200/300?random"
    size="small"
    name="John Doe"
  />
  <br />
  <Avatar
    image="https://picsum.photos/200/300?random"
    size="medium"
    name="John Doe"
  />
  <br />
  <Avatar
    image="https://picsum.photos/200/300?random"
    size="large"
    name="John Doe"
  />
</div>
```

### Invalid URl

```jsx
<Avatar image="http://invalid.url.com" />
```
