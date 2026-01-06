import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BoltIcon as RegularBoltIcon } from './bolt';
import { BoltIconDuotone as BoltIconDuotone } from './bolt-duotone';
import { BoltIconBold as BoltIconBold } from './bolt-bold';
import { BoltIconBoldDuotone as BoltIconBoldDuotone } from './bolt-bold-duotone';
import { BoltIconFill as BoltIconFill } from './bolt-fill';
import { BoltIconFillDuotone as BoltIconFillDuotone } from './bolt-fill-duotone';

export interface BoltIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BoltIcon = memo(forwardRef<SVGSVGElement, BoltIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BoltIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BoltIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BoltIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BoltIconFill ref={ref} {...props} />;
  if (duotone) return <BoltIconDuotone ref={ref} {...props} />;
  return <RegularBoltIcon ref={ref} {...props} />;
}));

BoltIcon.displayName = 'BoltIcon';

export { BoltIcon };
