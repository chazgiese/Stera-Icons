import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BriefcaseIcon as RegularBriefcaseIcon } from './briefcase';
import { BriefcaseIconDuotone as BriefcaseIconDuotone } from './briefcase-duotone';
import { BriefcaseIconBold as BriefcaseIconBold } from './briefcase-bold';
import { BriefcaseIconBoldDuotone as BriefcaseIconBoldDuotone } from './briefcase-bold-duotone';
import { BriefcaseIconFill as BriefcaseIconFill } from './briefcase-fill';
import { BriefcaseIconFillDuotone as BriefcaseIconFillDuotone } from './briefcase-fill-duotone';

export interface BriefcaseIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BriefcaseIcon = memo(forwardRef<SVGSVGElement, BriefcaseIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BriefcaseIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BriefcaseIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BriefcaseIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BriefcaseIconFill ref={ref} {...props} />;
  if (duotone) return <BriefcaseIconDuotone ref={ref} {...props} />;
  return <RegularBriefcaseIcon ref={ref} {...props} />;
}));

BriefcaseIcon.displayName = 'BriefcaseIcon';

export { BriefcaseIcon };
