import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ThumbsDownIcon as RegularThumbsDownIcon } from './thumbs-down';
import { ThumbsDownIconDuotone as ThumbsDownIconDuotone } from './thumbs-down-duotone';
import { ThumbsDownIconBold as ThumbsDownIconBold } from './thumbs-down-bold';
import { ThumbsDownIconBoldDuotone as ThumbsDownIconBoldDuotone } from './thumbs-down-bold-duotone';
import { ThumbsDownIconFill as ThumbsDownIconFill } from './thumbs-down-fill';
import { ThumbsDownIconFillDuotone as ThumbsDownIconFillDuotone } from './thumbs-down-fill-duotone';

export interface ThumbsDownIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ThumbsDownIcon = memo(forwardRef<SVGSVGElement, ThumbsDownIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ThumbsDownIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ThumbsDownIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ThumbsDownIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ThumbsDownIconFill ref={ref} {...props} />;
  if (duotone) return <ThumbsDownIconDuotone ref={ref} {...props} />;
  return <RegularThumbsDownIcon ref={ref} {...props} />;
}));

ThumbsDownIcon.displayName = 'ThumbsDownIcon';

export { ThumbsDownIcon };
