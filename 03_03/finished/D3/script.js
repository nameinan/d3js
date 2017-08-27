d3.select('#chart')
  .append('svg')
    .attr('width', 600)
    .attr('height', 400)
    .style('background', "#93A1A1")
  .append("rect")
    .attr('x', 200)
    .attr('y', 100)
    .attr('height', 200)
    .attr('width', 200)
    .style('fill', '#CB4B19')
  d3.select('svg')
    .append('circle')
    .attr('cx','300')
    .attr('cy','200')
    .attr('r','150')
    .style('fill', '#840043')