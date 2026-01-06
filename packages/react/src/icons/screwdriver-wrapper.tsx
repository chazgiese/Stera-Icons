import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScrewdriverIcon as RegularScrewdriverIcon } from './screwdriver';
import { ScrewdriverIconDuotone as ScrewdriverIconDuotone } from './screwdriver-duotone';
import { ScrewdriverIconBold as ScrewdriverIconBold } from './screwdriver-bold';
import { ScrewdriverIconBoldDuotone as ScrewdriverIconBoldDuotone } from './screwdriver-bold-duotone';
import { ScrewdriverIconFill as ScrewdriverIconFill } from './screwdriver-fill';
import { ScrewdriverIconFillDuotone as ScrewdriverIconFillDuotone } from './screwdriver-fill-duotone';

export interface ScrewdriverIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ScrewdriverIcon = memo(forwardRef<SVGSVGElement, ScrewdriverIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScrewdriverIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ScrewdriverIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ScrewdriverIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ScrewdriverIconFill ref={ref} {...props} />;
  if (duotone) return <ScrewdriverIconDuotone ref={ref} {...props} />;
  return <RegularScrewdriverIcon ref={ref} {...props} />;
}));

ScrewdriverIcon.displayName = 'ScrewdriverIcon';

export { ScrewdriverIcon };
