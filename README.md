
# Swelte web components

This project uses template for [Svelte](https://svelte.dev) from https://github.com/sveltejs/template-webpack.

Components are dynamically loaded, depending whether elements are used. Added polyfills for IE 11 for Custom elements.

Preview of the elements is on https://tihi321.github.io/svelte-web-components/

![Preview image of web components](docs/assets/preview.png?raw=true "Swelte components")

## Components

1.  **Scroller** - adds animated progress bar on top of wrapped elements, animated on scroll. 

	*Element*<br/>
  **`<ts-scroller>... html ...</ts-scroller>`**

	*Attributes*<br/>
	**color** - color of the loader
	
	*Css Variables*<br/>
	**height**:  --ts-scroller-height<br/>
	**box-shadow** : --ts-scroller-shadow<br/>
	
2.  **PathGrid** - svg element takes path as argument and displays grid with coordinates on side over canvas, for easier path generation.

	*Element*<br/>
  **`<ts-path-grid></ts-path-grid>`**

	*Attributes*<br/>
	**path** - svg path <br/>
	**opacity** - opacity of the grid<br/>
	**fill**:  fill of the path<br/>
	**stroke** : stroke of the path<br/>
	**strokewidth** - stroke width<br/>
	**vbx** - x coordinate for the viewbox<br/>
	**vby**:  y coordinate for the viewbox<br/>
	**other** : here you can write any other property for path, as. dash-array, ...
	
	*Css Variables*<br/>
	**fill**:  --ts-path-grid-fill - color of the grid<br/>
	
3.  **Modal** - simple modal wrapper, dispatches event on close. With close activated when clicked on backdrop.

	*Element*<br/>
  **`<ts-modal>... html ...</ts-modal>`**

	*Attributes* <br/>
	**show** - show modal, default is false<br/>
	**zindex** - default 1<br/>
	**duration**:  duration of transition, default is 350ms<br/>
	**background** : backdrop color of the modal<br/>
	
4.  **Date** - simple date element, shows a year.

	*Element*<br/>
  **`<ts-date></ts-date>`**
