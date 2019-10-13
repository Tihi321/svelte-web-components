<svelte:options tag="ts-path-grid" />

<script>
  export let path = "";
  export let opacity = "1";
  export let fill = "";
  export let stroke = "";
  export let strokewidth = "";
  export let other = "";
  export let vbx = "0";
  export let vby = "0";

  function grid() {

    const valX = parseInt(vbx) + 1;
    const valY = parseInt(vby) + 1;
  
    const elements = [...Array(valX)].map((el, inx) => {
      return [...Array(valY)].map((el, iny) => {
  
        // svg dots for coordinates
        const circle = `<circle cx="${inx}" cy="${iny}" r="0.1"></circle>`;
  
        // svg numbers for row and column
        if (iny === 0 && inx === 0) return `<text x="${inx}" y="${iny - 1}">${inx}</text><text x="${inx - 1}" y="${iny}">${inx}</text>${circle}`;
        if (inx === 0) return `<text x="${inx - 1}" y="${iny}">${iny}</text>${circle}`;
        if (iny === 0) return `<text x="${inx}" y="${iny - 1}">${inx}</text>${circle}`;
  
        return circle;
      }).join('');
    });
    return elements.join('');
  };

  // As svg refuses to add slot tag as a child, we cannot add data from outside as children to svg element.
  $: getSvg = function() {
    return `
    <svg width="100%" viewBox="0 0 ${vbx} ${vbx}" style="overflow: visible;">
      <path class="path" d="${path}" fill="${fill}" stroke="${stroke}" stroke-width="${strokewidth}" ${other} />
      <g style="opacity: ${opacity};">${grid()}</g>
    </svg>
    `;
  }

</script>

<style>
  div {
    fill: var(--ts-path-grid-fill, blue);
    font-size: 0.5px;
    width: 100%;
    height: 100%;
  }
</style>

<div>
  {@html getSvg()}
</div>
