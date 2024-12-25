1. What is a React component?
<dl>
<dd>A function that returns React elements.</dd>
</dl>
<hr />  

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
<dl>
<dd>大写MyComponent。</dd>
<dd>When defining components in React, we need to use pascal case, that is where the first letter is capitalized. The rest of it follows the regular rules of camel casing.</dd>
</dl>
<hr />

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```
<dl>
<dd>推荐使用&lt;Header />这样的写法来调用React component. Surrounding it in the angle brackets</dd>
<dd></dd>
</dl>