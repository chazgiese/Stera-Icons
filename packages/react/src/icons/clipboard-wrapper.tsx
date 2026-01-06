import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ClipboardIcon as RegularClipboardIcon } from './clipboard';
import { ClipboardIconDuotone as ClipboardIconDuotone } from './clipboard-duotone';
import { ClipboardIconBold as ClipboardIconBold } from './clipboard-bold';
import { ClipboardIconBoldDuotone as ClipboardIconBoldDuotone } from './clipboard-bold-duotone';
import { ClipboardIconFill as ClipboardIconFill } from './clipboard-fill';
import { ClipboardIconFillDuotone as ClipboardIconFillDuotone } from './clipboard-fill-duotone';

export interface ClipboardIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ClipboardIcon = memo(forwardRef<SVGSVGElement, ClipboardIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ClipboardIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ClipboardIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ClipboardIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ClipboardIconFill ref={ref} {...props} />;
  if (duotone) return <ClipboardIconDuotone ref={ref} {...props} />;
  return <RegularClipboardIcon ref={ref} {...props} />;
}));

ClipboardIcon.displayName = 'ClipboardIcon';

export { ClipboardIcon };
