import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BackslashIcon as RegularBackslashIcon } from './backslash';
import { BackslashIconDuotone as BackslashIconDuotone } from './backslash-duotone';
import { BackslashIconBold as BackslashIconBold } from './backslash-bold';
import { BackslashIconBoldDuotone as BackslashIconBoldDuotone } from './backslash-bold-duotone';
import { BackslashIconFill as BackslashIconFill } from './backslash-fill';
import { BackslashIconFillDuotone as BackslashIconFillDuotone } from './backslash-fill-duotone';

export interface BackslashIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BackslashIcon = memo(forwardRef<SVGSVGElement, BackslashIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BackslashIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BackslashIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BackslashIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BackslashIconFill ref={ref} {...props} />;
  if (duotone) return <BackslashIconDuotone ref={ref} {...props} />;
  return <RegularBackslashIcon ref={ref} {...props} />;
}));

BackslashIcon.displayName = 'BackslashIcon';

export { BackslashIcon };
