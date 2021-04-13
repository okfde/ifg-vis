import * as d3 from 'd3';
import config from './config.json';
import { data, groupData } from './data';
import dimensions from './dimensions';
import { transitionIn, transitionOut } from './transitionLine';

const { colors, labels } = config;

export default function (selector) {
  const root = d3.select(selector);
  const parent = root.select('.vis-canvas');

  const groups = {};
  const activeGroups = new Set();

  const groupSelectors = root.select('.selectors');

  const {
    margin,
    width,
    height,
    innerX,
    innerY,
    innerXWidth,
    innerYHeight,
    translate
  } = dimensions(root.node());

  const x = d3
    .scaleLinear()
    .range([0, innerXWidth])
    .domain(d3.extent(data, d => d.year));
  const y = d3.scaleLinear().domain([0, 100]).range([innerYHeight, 0]);

  const yAxis = (g, y) =>
    g
      .attr('class', 'y axis')
      .attr('transform', `translate(${innerY.left}, ${innerY.top})`)
      .call(
        d3
          .axisLeft(y)
          .tickSize(-width, 0, 0)
          .ticks(5)
          .tickFormat(d => `${d} %`)
      );

  const xAxis = d3
    .axisBottom(x)
    .tickSize(-height + innerY.bottom, 0, 0)
    .tickPadding(6)
    .tickFormat(d => d.toString());

  const circleRadius = d3
    .scaleSqrt()
    .rangeRound([1, config.maxDotSize])
    .domain(d3.extent(data, d => d.count));

  const body = parent.append('div').attr('class', 'y-container');

  const pinnedSvg = parent
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('class', 'pinned')
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  pinnedSvg
    .append('g')
    .append('rect')
    .attr('fill', '#fff')
    .attr('x', margin.left)
    .attr('y', margin.top)
    .attr('width', innerXWidth)
    .attr('height', innerYHeight);
  pinnedSvg.append('g').call(yAxis, y);

  const svg = body
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  svg
    .append('g')
    .attr('class', 'x axis')
    .attr(
      'transform',
      `translate(${innerX.left}, ${innerYHeight + margin.top + margin.bottom})`
    )
    .call(xAxis);

  for (const [key, group] of Object.entries(groupData)) {
    groups[key] = makeGroup(key, group);

    if (config.defaultInstitutions.includes(key)) {
      toggleGroup(key);
    }

    // reload bootstrap tooltips
    window.addEventListener('load', () => BSN.initCallback(root.node()));
  }

  function makeGroup(key, groupData) {
    const group = svg
      .append('g')
      .attr('transform', translate)
      .attr('class', 'group')
      .attr('data-group', key);

    const connectionLine = d3
      .line(
        d => x(d.year),
        d => y(d.transparency)
      )
      .curve(d3.curveCatmullRom);

    const line = group
      .append('svg:path')
      .attr('class', 'line')
      .style('stroke', colors[key])
      .classed('hidden', true)
      .attr('d', connectionLine(groupData));

    const selector = groupSelectors
      .append('span')
      .attr(
        'class',
        'badge badge-pill badge-light mb-1 mr-1 font-weight-normal'
      )
      .attr('type', 'button')
      .attr('aria-role', 'button')
      .text(key)
      .attr('title', labels[key])
      .attr('data-toggle', 'tooltip')
      .on('click', () => toggleGroup(key));

    return { group, selector, groupData, line };
  }

  function activateGroup(key) {
    const obj = groups[key];

    obj.selector.classed('badge-dark', true);
    obj.line.classed('hidden', false);

    if (!obj.circles) {
      obj.circles = obj.group.append('g').attr('class', 'circles hidden');

      obj.circles
        .selectAll('circle.dot')
        .data(obj.groupData)
        .join('circle')
        .attr('class', 'dot circle')
        .attr('r', d => circleRadius(d.count))
        .attr('cx', d => x(d.year))
        .attr('cy', d => y(d.transparency))
        .attr('data-group', key)
        .attr(
          'title',
          d =>
            `${labels[d.name]} beantwortete ${d.year} ${d.transparency} % von ${
              d.count
            } Anfragen`
        )
        .attr('data-toggle', 'tooltip');

      BSN.initCallback(root.node());
    }

    window.requestAnimationFrame(() => obj.circles.classed('hidden', false));
  }

  function deactivateGroup(key) {
    const obj = groups[key];

    obj.selector.classed('badge-dark', false);
    obj.circles.classed('hidden', true);
    transitionOut(obj.line).on('end', () => obj.line.classed('hidden', true));
  }

  function toggleGroup(key) {
    const line = groups[key].group.select('.line');

    if (activeGroups.has(key)) {
      activeGroups.delete(key);
      deactivateGroup(key, false);
    } else {
      activeGroups.add(key);
      activateGroup(key);
      transitionIn(line);
    }
  }
}
