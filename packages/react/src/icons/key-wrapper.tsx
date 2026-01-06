import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { KeyIcon as RegularKeyIcon } from './key';
import { KeyIconDuotone as KeyIconDuotone } from './key-duotone';
import { KeyIconBold as KeyIconBold } from './key-bold';
import { KeyIconBoldDuotone as KeyIconBoldDuotone } from './key-bold-duotone';
import { KeyIconFill as KeyIconFill } from './key-fill';
import { KeyIconFillDuotone as KeyIconFillDuotone } from './key-fill-duotone';

export interface KeyIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const KeyIcon = memo(forwardRef<SVGSVGElement, KeyIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <KeyIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <KeyIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <KeyIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <KeyIconFill ref={ref} {...props} />;
  if (duotone) return <KeyIconDuotone ref={ref} {...props} />;
  return <RegularKeyIcon ref={ref} {...props} />;
}));

KeyIcon.displayName = 'KeyIcon';

export { KeyIcon };
