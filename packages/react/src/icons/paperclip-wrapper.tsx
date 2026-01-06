import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PaperclipIcon as RegularPaperclipIcon } from './paperclip';
import { PaperclipIconDuotone as PaperclipIconDuotone } from './paperclip-duotone';
import { PaperclipIconBold as PaperclipIconBold } from './paperclip-bold';
import { PaperclipIconBoldDuotone as PaperclipIconBoldDuotone } from './paperclip-bold-duotone';
import { PaperclipIconFill as PaperclipIconFill } from './paperclip-fill';
import { PaperclipIconFillDuotone as PaperclipIconFillDuotone } from './paperclip-fill-duotone';

export interface PaperclipIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PaperclipIcon = memo(forwardRef<SVGSVGElement, PaperclipIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PaperclipIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PaperclipIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PaperclipIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PaperclipIconFill ref={ref} {...props} />;
  if (duotone) return <PaperclipIconDuotone ref={ref} {...props} />;
  return <RegularPaperclipIcon ref={ref} {...props} />;
}));

PaperclipIcon.displayName = 'PaperclipIcon';

export { PaperclipIcon };
