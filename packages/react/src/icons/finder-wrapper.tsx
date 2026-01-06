import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FinderIcon as RegularFinderIcon } from './finder';
import { FinderIconDuotone as FinderIconDuotone } from './finder-duotone';
import { FinderIconBold as FinderIconBold } from './finder-bold';
import { FinderIconBoldDuotone as FinderIconBoldDuotone } from './finder-bold-duotone';
import { FinderIconFill as FinderIconFill } from './finder-fill';
import { FinderIconFillDuotone as FinderIconFillDuotone } from './finder-fill-duotone';

export interface FinderIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FinderIcon = memo(forwardRef<SVGSVGElement, FinderIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FinderIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FinderIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FinderIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FinderIconFill ref={ref} {...props} />;
  if (duotone) return <FinderIconDuotone ref={ref} {...props} />;
  return <RegularFinderIcon ref={ref} {...props} />;
}));

FinderIcon.displayName = 'FinderIcon';

export { FinderIcon };
