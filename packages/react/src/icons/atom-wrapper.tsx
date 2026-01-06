import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AtomIcon as RegularAtomIcon } from './atom';
import { AtomIconDuotone as AtomIconDuotone } from './atom-duotone';
import { AtomIconBold as AtomIconBold } from './atom-bold';
import { AtomIconBoldDuotone as AtomIconBoldDuotone } from './atom-bold-duotone';
import { AtomIconFill as AtomIconFill } from './atom-fill';
import { AtomIconFillDuotone as AtomIconFillDuotone } from './atom-fill-duotone';

export interface AtomIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AtomIcon = memo(forwardRef<SVGSVGElement, AtomIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AtomIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AtomIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AtomIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AtomIconFill ref={ref} {...props} />;
  if (duotone) return <AtomIconDuotone ref={ref} {...props} />;
  return <RegularAtomIcon ref={ref} {...props} />;
}));

AtomIcon.displayName = 'AtomIcon';

export { AtomIcon };
