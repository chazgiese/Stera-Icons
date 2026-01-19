/**
 * SVG Parsing Utilities
 * 
 * Functions for parsing and extracting path data from optimized SVG strings.
 */

/**
 * Parse path attributes string into an object with camelCase keys
 * @param {string} attrsString - Raw SVG path attributes string
 * @returns {Object} - Object with camelCase keys and attribute values
 * @example
 * parsePathAttributes('d="M0 0" fill-rule="evenodd"')
 * // Returns: { d: "M0 0", fillRule: "evenodd" }
 */
export function parsePathAttributes(attrsString) {
  const attrs = {};
  const attrRegex = /(\w+(?:-\w+)?)=["']([^"']*)["']/g;
  let attrMatch;
  while ((attrMatch = attrRegex.exec(attrsString)) !== null) {
    const [, name, value] = attrMatch;
    // Convert kebab-case to camelCase for JSX
    const jsxName = name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    attrs[jsxName] = value;
  }
  return attrs;
}

/**
 * Parse optimized SVG and extract path elements as JSX
 * Handles both direct path opacity and group-level opacity (for duotone icons)
 * @param {string} svgString - Optimized SVG string
 * @returns {Array<Object>} - Array of path objects with parsed attributes
 */
export function extractPathsFromSvg(svgString) {
  const paths = [];
  
  // Track paths we've already processed (to avoid duplicates)
  const processedPathStrings = new Set();
  
  // Handle paths inside opacity groups: <g ... opacity="X" ...><path .../></g>
  // This is used by duotone icons to apply 40% opacity to secondary paths
  // Note: opacity attribute can appear anywhere in the <g> tag attributes
  const groupRegex = /<g\s+([^>]*)>([\s\S]*?)<\/g>/g;
  let groupMatch;
  
  while ((groupMatch = groupRegex.exec(svgString)) !== null) {
    const groupAttrs = groupMatch[1];
    const groupContent = groupMatch[2];
    
    // Check if this group has an opacity attribute
    const opacityMatch = groupAttrs.match(/opacity=["']([^"']*)["']/);
    if (opacityMatch) {
      const groupOpacity = opacityMatch[1];
      
      // Extract paths within this opacity group
      const pathRegex = /<path\s+([^>]*)\/>/g;
      let pathMatch;
      while ((pathMatch = pathRegex.exec(groupContent)) !== null) {
        const attrs = parsePathAttributes(pathMatch[1]);
        // Apply group opacity (multiply if path has its own opacity)
        const pathOpacity = attrs.opacity ? parseFloat(attrs.opacity) : 1;
        attrs.opacity = String(parseFloat(groupOpacity) * pathOpacity);
        paths.push(attrs);
        processedPathStrings.add(pathMatch[0]); // Track to avoid duplicates
      }
    }
  }
  
  // Extract remaining paths not inside opacity groups
  const pathRegex = /<path\s+([^>]*)\/>/g;
  let match;
  while ((match = pathRegex.exec(svgString)) !== null) {
    if (!processedPathStrings.has(match[0])) {
      paths.push(parsePathAttributes(match[1]));
    }
  }
  
  return paths;
}
