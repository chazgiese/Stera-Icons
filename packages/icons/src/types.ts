import { SVGProps, RefAttributes, ForwardRefExoticComponent } from 'react';

/**
 * Supported SVG element types for icon rendering.
 * A reduced version compatible with React 16+.
 */
export type SVGElementType = 
  | 'circle' 
  | 'ellipse' 
  | 'g' 
  | 'line' 
  | 'path' 
  | 'polygon' 
  | 'polyline' 
  | 'rect';

/**
 * Icon node data structure for advanced use cases.
 * Represents SVG elements as data that can be passed to rendering functions.
 * 
 * @example
 * const iconNode: IconNode = [
 *   ['path', { d: 'M10 10 L20 20', fill: 'currentColor' }],
 *   ['circle', { cx: '12', cy: '12', r: '8' }]
 * ];
 */
export type IconNode = Array<[elementName: SVGElementType, attrs: Record<string, string>]>;

/**
 * Icon weight variants available in Stera Icons.
 */
export type IconWeight = 'regular' | 'bold' | 'fill';

/**
 * SVG element attributes type helper.
 */
export type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;

/**
 * Combined element attributes including ref forwarding.
 */
export type ElementAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;

/**
 * Base props interface for all Stera Icon components.
 * Extends standard SVG props with icon-specific properties.
 * 
 * @property size - Sets SVG width and height, in pixels or any CSS unit. No default: omit to size with CSS
 * @property color - Icon color, any valid CSS color (default: 'currentColor')
 * @property weight - Icon weight variant (wrapper components only)
 * @property duotone - Enable duotone variant (wrapper components only)
 * @property title - Accessible name, rendered as a <title> element inside the svg
 */
export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  size?: number | string;
  color?: string;
  weight?: IconWeight;
  duotone?: boolean;
  'aria-label'?: string;
  title?: string;
}

/**
 * Type for icon components (without ref).
 */
export type SteraIcon = ForwardRefExoticComponent<
  Omit<IconProps, 'ref'> & RefAttributes<SVGSVGElement>
>;

export interface IconMetadata {
  /** Stable icon id: the Figma component set key. It survives renames; the name is the public API */
  id: string;
  name: string;
  weight: 'regular' | 'bold' | 'fill';
  duotone: boolean;
  tags: string[];
  /** Category ids from categories.json, primary first */
  categories: string[];
  componentName: string;
  fileName: string;
  versionAdded: string;
  dateAdded: string;
  lastModified: string;
  svgHash: string;
}

export interface IconsExport {
  schemaVersion: string;
  exportedAt: string;
  totalIcons: number;
  icons: Array<{
    /** Stable icon id: the Figma component set key */
    id: string;
    name: string;
    tags: string[];
    categories: string[];
    variants: Array<{
      variant: {
        weight: 'Regular' | 'Bold' | 'Fill';
        duotone: boolean;
      };
      svg: string;
      hash: string;
    }>;
  }>;
}

export interface NameMapping {
  [originalName: string]: string;
}

/**
 * Path data for a single icon variant.
 * Can be a simple string for single-path icons,
 * or an array of path objects for multi-path icons (e.g., duotone).
 */
export interface PathElement {
  d: string;
  opacity?: number;
  fillRule?: 'nonzero' | 'evenodd';
  clipRule?: 'nonzero' | 'evenodd';
}

export type PathData = string | PathElement | PathElement[];

/**
 * All path variants for a single icon.
 */
export interface IconPathData {
  regular?: PathData;
  regularDuotone?: PathData;
  bold?: PathData;
  boldDuotone?: PathData;
  fill?: PathData;
  fillDuotone?: PathData;
}
