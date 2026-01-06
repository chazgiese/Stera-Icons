import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { KeyholeIcon as RegularKeyholeIcon } from './keyhole';
import { KeyholeIconDuotone as KeyholeIconDuotone } from './keyhole-duotone';
import { KeyholeIconBold as KeyholeIconBold } from './keyhole-bold';
import { KeyholeIconBoldDuotone as KeyholeIconBoldDuotone } from './keyhole-bold-duotone';
import { KeyholeIconFill as KeyholeIconFill } from './keyhole-fill';
import { KeyholeIconFillDuotone as KeyholeIconFillDuotone } from './keyhole-fill-duotone';

export interface KeyholeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const KeyholeIcon = memo(forwardRef<SVGSVGElement, KeyholeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <KeyholeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <KeyholeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <KeyholeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <KeyholeIconFill ref={ref} {...props} />;
  if (duotone) return <KeyholeIconDuotone ref={ref} {...props} />;
  return <RegularKeyholeIcon ref={ref} {...props} />;
}));

KeyholeIcon.displayName = 'KeyholeIcon';

export { KeyholeIcon };
