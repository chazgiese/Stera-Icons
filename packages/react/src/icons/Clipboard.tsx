import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ClipboardRegular } from './ClipboardRegular';
import { ClipboardRegularDuotone } from './ClipboardRegularDuotone';
import { ClipboardBold } from './ClipboardBold';
import { ClipboardBoldDuotone } from './ClipboardBoldDuotone';
import { ClipboardFill } from './ClipboardFill';
import { ClipboardFillDuotone } from './ClipboardFillDuotone';

export interface ClipboardProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Clipboard - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ClipboardRegular } from 'stera-icons/ClipboardRegular';
 */
const Clipboard = memo(forwardRef<SVGSVGElement, ClipboardProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ClipboardBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ClipboardBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ClipboardFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ClipboardFill ref={ref} {...rest} />;
  if (duotone) return <ClipboardRegularDuotone ref={ref} {...rest} />;
  return <ClipboardRegular ref={ref} {...rest} />;
}));

Clipboard.displayName = 'Clipboard';

// Triple export pattern (lucide-react style)
export { Clipboard, Clipboard as ClipboardIcon, Clipboard as SiClipboard };
