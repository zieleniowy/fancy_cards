# description
fancy-cards exports a React Component.  It renders its children with an overlay. The overlay is hiding on hover. The transition effect is based on cursor position. 
# installation

```
npm install fancy-cards
```


# code example

```
function App() {
  return (
      <FancyCard
        style={{
          background: '#77c98d',
          minWidth: 150,
          padding: 16,
        }}
        overlay={
          <div 
            style={{ 
              background: 'rgba(255,255,255,.95)', 
              padding: 16 
            }}
          >
            VISIBLE ON HOVER
          </div>
        }
      >

        ALWAYS VISIBLE

      </FancyCard>
  );
}
```

![example of FancyCard usage](./readme/example.gif)