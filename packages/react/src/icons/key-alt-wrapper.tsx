import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { KeyAltIcon as RegularKeyAltIcon } from './key-alt';
import { KeyAltIconDuotone as KeyAltIconDuotone } from './key-alt-duotone';
import { KeyAltIconBold as KeyAltIconBold } from './key-alt-bold';
import { KeyAltIconBoldDuotone as KeyAltIconBoldDuotone } from './key-alt-bold-duotone';
import { KeyAltIconFill as KeyAltIconFill } from './key-alt-fill';
import { KeyAltIconFillDuotone as KeyAltIconFillDuotone } from './key-alt-fill-duotone';

export interface KeyAltIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const KeyAltIcon = memo(forwardRef<SVGSVGElement, KeyAltIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <KeyAltIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <KeyAltIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <KeyAltIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <KeyAltIconFill ref={ref} {...props} />;
  if (duotone) return <KeyAltIconDuotone ref={ref} {...props} />;
  return <RegularKeyAltIcon ref={ref} {...props} />;
}));

KeyAltIcon.displayName = 'KeyAltIcon';

export { KeyAltIcon };
