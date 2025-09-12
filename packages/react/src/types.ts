import { SVGProps } from 'react';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  size?: number | string;
  color?: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
}

export interface IconMetadata {
  name: string;
  variant: 'outline' | 'filled';
  tags: string[];
  componentName: string;
  fileName: string;
}

export interface IconsExport {
  exportedAt: string;
  totalIcons: number;
  icons: Array<{
    name: string;
    tags: string;
    variants: Array<{
      variant: 'Outline' | 'Fill' | 'Stroke';
      svg: string;
    }>;
  }>;
}

export interface NameMapping {
  [originalName: string]: string;
}
