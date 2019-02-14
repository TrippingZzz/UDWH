---
---

@import "bulma";
@import "discord";

html {
  background: $dark;
}

.section > .columns > .column {
  background: $black;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 5px;
}

.menu-list {
  max-width: 200px;
  margin: 0 auto;
  a {
    color: $blurple;
    &:hover {
      background: $black;
      color: $white;
    }
    border-radius: 5px;
  }
}

#submit, h2.subtitle.is-4 {
  text-align: center;
  color: $white;
}

.button.is-primary {
  background: $black;
  color: darken($white, 20);
  transition: .2s color, .2s background;
  &:hover {
    background: darken($black, 20);
    color: $white;
  }
}

#content, #text {
  display: inline-flex;
  min-height: 100px;
}

#content, #text, input.input {
  background: $black;
  margin: 10px 0;
  color: $white;
  border: 1px solid darken($white, 50);
  text-align: left;
  &:focus {
    border: 1px solid $white;  
  }
}

#youtube {
  margin-top: 20px;
  text-align: center;
  display: block;
}

a {
  padding: 5px;
  color: $white;
  &:hover {
    color: darken($white, 20);
  }
}

#loader {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $black;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

body {
  color: $white;
  font-family: Roboto, sans-serif;
}

nav.navbar {
  font-family: Discord;
  user-select: none;
  background: $black;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    border-radius: 5px;
    color: $white;
    margin: 5px 20px;
    padding: 5px 10px;
    font-size: 1rem;
    &:hover {
      background: $dark;
      color: $blurple;
    }
  }
  a.logo {
    font-size: 1.8rem;
  }
  a:not(.logo) {
    width: 100px;
    display: flex;
    justify-content: center;
  }
}

textarea.textarea.is-primary {
  margin-top: 20px;
  font-family: Roboto;
  background-color: $black;
  color: $white;
  text-align: center;
  border-color: $white;
}

.hero-body {
  text-align: center;
  .title {
    color: $white;
  }
  .subtitle {
    color: darken($white, 20);
    font-family: Roboto, sans-serif;
  }
}

#id {
  text-align: center;
}

#output {
  text-align: center;
}
