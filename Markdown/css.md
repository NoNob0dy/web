#### vertical and horizontal alignment

```css
/*flex alignment*/
E {
	display: flex;
    align-items: center;
    justify-content: center;
}
/*relative position and transform-translate*/
F {
	position: relative;
}
C {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
/*based on CSS2*/
F {
    display: table-cell;
    vertical-align: middle;
}
C {
    display: block;
    margin: auto;
}
```

#### media query

```css
@media screen and (orientation: landscape) or (min-width: 10px){
    /*css*/
}
```

#### element effects

```css
div {
    width: 64px;
    height: 64px;
    animation: scaling 2s ease-in infinite
    transition: transform 1.5s ease-in-out
    /*
        Normally we need 'transition' in both 
        original state and hover state, so that
        we could make the transition smoothly
    */
}

div:hover {
    transform: rotate(45deg);
	transition: transform 1.5s ease-in-out
}

@keyframes scaling {
    0% {
        width: 64px
    }
    25% {
        width: 100px
    }
    50% {
        width: 200px
    }
    75% {
        width: 100px
    }
    
    100% {
        width: 200px
    }
}

```

