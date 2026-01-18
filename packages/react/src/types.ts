import { SVGProps } from 'react';

export type IconWeight = 'regular' | 'bold' | 'fill';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  size?: number | string;
  color?: string;
  weight?: IconWeight;
  duotone?: boolean;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
}

export interface IconMetadata {
  name: string;
  weight: 'regular' | 'bold' | 'fill';
  duotone: boolean;
  tags: string[];
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
    name: string;
    tags: string[];
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
