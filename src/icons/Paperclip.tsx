import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PaperclipRegular } from './PaperclipRegular';
import { PaperclipRegularDuotone } from './PaperclipRegularDuotone';
import { PaperclipBold } from './PaperclipBold';
import { PaperclipBoldDuotone } from './PaperclipBoldDuotone';
import { PaperclipFill } from './PaperclipFill';
import { PaperclipFillDuotone } from './PaperclipFillDuotone';

export interface PaperclipProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Paperclip - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PaperclipRegular } from 'stera-icons/icons/PaperclipRegular';
 */
const Paperclip = memo(forwardRef<SVGSVGElement, PaperclipProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PaperclipBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PaperclipBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PaperclipFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PaperclipFill ref={ref} {...rest} />;
  if (duotone) return <PaperclipRegularDuotone ref={ref} {...rest} />;
  return <PaperclipRegular ref={ref} {...rest} />;
}));

Paperclip.displayName = 'Paperclip';

// Triple export pattern (lucide-react style)
export { Paperclip, Paperclip as PaperclipIcon, Paperclip as SiPaperclip };
export default Paperclip;
