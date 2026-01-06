import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MatchaIcon as RegularMatchaIcon } from './matcha';
import { MatchaIconDuotone as MatchaIconDuotone } from './matcha-duotone';
import { MatchaIconBold as MatchaIconBold } from './matcha-bold';
import { MatchaIconBoldDuotone as MatchaIconBoldDuotone } from './matcha-bold-duotone';
import { MatchaIconFill as MatchaIconFill } from './matcha-fill';
import { MatchaIconFillDuotone as MatchaIconFillDuotone } from './matcha-fill-duotone';

export interface MatchaIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MatchaIcon = memo(forwardRef<SVGSVGElement, MatchaIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MatchaIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MatchaIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MatchaIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MatchaIconFill ref={ref} {...props} />;
  if (duotone) return <MatchaIconDuotone ref={ref} {...props} />;
  return <RegularMatchaIcon ref={ref} {...props} />;
}));

MatchaIcon.displayName = 'MatchaIcon';

export { MatchaIcon };
