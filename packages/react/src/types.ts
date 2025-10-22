import { SVGProps } from 'react';

export type IconVariant = 'regular' | 'bold' | 'filled' | 'filltone' | 'linetone';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  size?: number | string;
  color?: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
}

export interface IconMetadata {
  name: string;
  variant: 'regular' | 'bold' | 'filled' | 'filltone' | 'linetone';
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
      variant: 'Bold' | 'Fill' | 'Filltone' | 'Linetone' | 'Regular';
      svg: string;
      hash: string;
    }>;
  }>;
}

export interface NameMapping {
  [originalName: string]: string;
}
