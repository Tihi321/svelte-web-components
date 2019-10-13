
# Swelte web components

This project uses template for [Svelte](https://svelte.dev) from https://github.com/sveltejs/template-webpack.

Components are dynamically loaded, depending whether elements are used. Added polyfills for IE 11 for Custom elements.

## Components

1.  **Scroller** - adds animated progress bar on top of wrapped elements, animated on scroll. 

	*Attributes*

	**color** - color of the loader
	
	*Css Variables*

	**height**:  --ts-scroller-height
	**box-shadow** : --ts-scroller-shadow
	
2.  **PathGrid** - svg element takes path as argument and displays grid with coordinates on side over canvas, for easier path generation.

	*Attributes*
	**path** - svg path 
	**opacity** - opacity of the grid
	**fill**:  fill of the path
	**stroke** : stroke of the path
	**strokewidth** - stroke width
	**vbx** - x coordinate for the viewbox
	**vby**:  y coordinate for the viewbox
	**other** : here you can write any other property for path, as. dash-array, ...
	
	*Css Variables*
	**fill**:  --ts-path-grid-fill - color of the grid
	
3.  **Modal** - simple modal wrapper, dispatches event on close. With close activated when clicked on backdrop.

	*Attributes* 
	**show** - show modal, default is false
	**zindex** - default 1
	**duration**:  duration of transition, default is 350ms
	**background** : backdrop color of the modal