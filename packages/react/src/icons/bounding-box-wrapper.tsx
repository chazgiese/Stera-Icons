import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BoundingBoxIcon as RegularBoundingBoxIcon } from './bounding-box';
import { BoundingBoxIconDuotone as BoundingBoxIconDuotone } from './bounding-box-duotone';
import { BoundingBoxIconBold as BoundingBoxIconBold } from './bounding-box-bold';
import { BoundingBoxIconBoldDuotone as BoundingBoxIconBoldDuotone } from './bounding-box-bold-duotone';
import { BoundingBoxIconFill as BoundingBoxIconFill } from './bounding-box-fill';
import { BoundingBoxIconFillDuotone as BoundingBoxIconFillDuotone } from './bounding-box-fill-duotone';

export interface BoundingBoxIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BoundingBoxIcon = memo(forwardRef<SVGSVGElement, BoundingBoxIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BoundingBoxIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BoundingBoxIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BoundingBoxIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BoundingBoxIconFill ref={ref} {...props} />;
  if (duotone) return <BoundingBoxIconDuotone ref={ref} {...props} />;
  return <RegularBoundingBoxIcon ref={ref} {...props} />;
}));

BoundingBoxIcon.displayName = 'BoundingBoxIcon';

export { BoundingBoxIcon };
