# Dev Design System

Example design system in React.

![Design System Demo](https://github.com/khwilo/project-demos/blob/master/dev-design-system/dev-design-sytem-demo-v2.gif)

Visit the website at <https://design-system-ex.vercel.app/>

## Getting started

1. Clone this repository

```bash
git clone https://github.com/khwilo/design-system.git
```

2. Run `yarn` to install project dependencies

3. Run `yarn dev` to run a local development server

## Button

### Properties

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
      <th>Type</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>title</td>
      <td>The button text</td>
      <td>string</td>
      <td>true</td>
    </tr>
    <tr>
      <td>variant</td>
      <td>The button variant</td>
      <td>ButtonVariants</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabledShadow</td>
      <td>Removes box shadow from the button</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Sets the button to a disabled state</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>startIcon</td>
      <td>Displays an icon to the left of the button title</td>
      <td>ButtonIcons</td>
      <td>false</td>
    </tr>
    <tr>
      <td>endIcon</td>
      <td>Displays an icon to the right of the button title</td>
      <td>ButtonIcons</td>
      <td>false</td>
    </tr>
    <tr>
      <td>size</td>
      <td>The size of the button</td>
      <td>ButtonSizes</td>
      <td>false</td>
    </tr>
    <tr>
      <td>color</td>
      <td>The color of the button</td>
      <td>ButtonColors</td>
      <td>false</td>
    </tr>
    <tr>
      <td>onClickHandler</td>
      <td>The button onClick handler function</td>
      <td>function</td>
      <td>false</td>
    </tr>
  </tbody>
</table>


### Types

<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Values</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ButtonColors</td>
      <td>PRIMARY SECONDARY DANGER</td>
      <td>DEFAULT</td>
    </tr>
    <tr>
      <td>ButtonSizes</td>
      <td>SMALL MEDIUM LARGE</td>
      <td>MEDIUM</td>
    </tr>
    <tr>
      <td>ButtonOutlines</td>
      <td>OUTLINE TEXT</td>
      <td>NONE</td>
    </tr>
    <tr>
      <td>ButtonIcons</td>
      <td>LOCAL_GROCERY_STORE</td>
      <td>NONE</td>
    </tr>
  </tbody>
</table>

## Input

### Properties

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
      <th>Type</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>The input unique id</td>
      <td>string</td>
      <td>true</td>
    </tr>
    <tr>
      <td>name</td>
      <td>The input name</td>
      <td>string</td>
      <td>true</td>
    </tr>
    <tr>
      <td>error</td>
      <td>The input error</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>helperText</td>
      <td>The input hint</td>
      <td>string</td>
      <td>false</td>
    </tr>
    <tr>
      <td>iconSrc</td>
      <td>The input icon source</td>
      <td>string</td>
      <td>false</td>
    </tr>
    <tr>
      <td>startIcon</td>
      <td>Absolute position an icon to the left of the input</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>endIcon</td>
      <td>Absolute position an icon to the right of the input</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>value</td>
      <td>The input value</td>
      <td>string</td>
      <td>true</td>
    </tr>
    <tr>
      <td>size</td>
      <td>The input field size</td>
      <td>InputSizes</td>
      <td>false</td>
    </tr>
    <tr>
      <td>fullWidth</td>
      <td>Make input take the allowed full screen width</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Sets the input to a disabled state</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>type</td>
      <td>The input type</td>
      <td>string</td>
      <td>true</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>The input placeholder</td>
      <td>string</td>
      <td>false</td>
    </tr>
    <tr>
      <td>onChangeInputHandler</td>
      <td>The input onChange input handler</td>
      <td>function</td>
      <td>true</td>
    </tr>
    <tr>
      <td>multiline</td>
      <td>Display a textarea</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>rows</td>
      <td>The textarea row number</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
  </tbody>
</table>

### Types

<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Values</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>InputSizes</td>
      <td>SMALL MEDIUM</td>
      <td>MEDIUM</td>
    </tr>
  </tbody>
</table>
