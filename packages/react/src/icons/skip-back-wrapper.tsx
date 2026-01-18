import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SkipBackIcon as RegularSkipBackIcon } from './skip-back';
import { SkipBackIconDuotone as SkipBackIconDuotone } from './skip-back-duotone';
import { SkipBackIconBold as SkipBackIconBold } from './skip-back-bold';
import { SkipBackIconBoldDuotone as SkipBackIconBoldDuotone } from './skip-back-bold-duotone';
import { SkipBackIconFill as SkipBackIconFill } from './skip-back-fill';
import { SkipBackIconFillDuotone as SkipBackIconFillDuotone } from './skip-back-fill-duotone';

export interface SkipBackIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SkipBackIcon = memo(forwardRef<SVGSVGElement, SkipBackIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SkipBackIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SkipBackIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SkipBackIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SkipBackIconFill ref={ref} {...props} />;
  if (duotone) return <SkipBackIconDuotone ref={ref} {...props} />;
  return <RegularSkipBackIcon ref={ref} {...props} />;
}));

SkipBackIcon.displayName = 'SkipBackIcon';

export { SkipBackIcon };
