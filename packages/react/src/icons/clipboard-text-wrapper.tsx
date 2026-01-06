import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ClipboardTextIcon as RegularClipboardTextIcon } from './clipboard-text';
import { ClipboardTextIconDuotone as ClipboardTextIconDuotone } from './clipboard-text-duotone';
import { ClipboardTextIconBold as ClipboardTextIconBold } from './clipboard-text-bold';
import { ClipboardTextIconBoldDuotone as ClipboardTextIconBoldDuotone } from './clipboard-text-bold-duotone';
import { ClipboardTextIconFill as ClipboardTextIconFill } from './clipboard-text-fill';
import { ClipboardTextIconFillDuotone as ClipboardTextIconFillDuotone } from './clipboard-text-fill-duotone';

export interface ClipboardTextIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ClipboardTextIcon = memo(forwardRef<SVGSVGElement, ClipboardTextIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ClipboardTextIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ClipboardTextIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ClipboardTextIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ClipboardTextIconFill ref={ref} {...props} />;
  if (duotone) return <ClipboardTextIconDuotone ref={ref} {...props} />;
  return <RegularClipboardTextIcon ref={ref} {...props} />;
}));

ClipboardTextIcon.displayName = 'ClipboardTextIcon';

export { ClipboardTextIcon };
