import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ClipboardTextRegular } from './ClipboardTextRegular';
import { ClipboardTextRegularDuotone } from './ClipboardTextRegularDuotone';
import { ClipboardTextBold } from './ClipboardTextBold';
import { ClipboardTextBoldDuotone } from './ClipboardTextBoldDuotone';
import { ClipboardTextFill } from './ClipboardTextFill';
import { ClipboardTextFillDuotone } from './ClipboardTextFillDuotone';

export interface ClipboardTextProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ClipboardText - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ClipboardTextRegular } from 'stera-icons/ClipboardTextRegular';
 */
const ClipboardText = memo(forwardRef<SVGSVGElement, ClipboardTextProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ClipboardTextBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ClipboardTextBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ClipboardTextFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ClipboardTextFill ref={ref} {...rest} />;
  if (duotone) return <ClipboardTextRegularDuotone ref={ref} {...rest} />;
  return <ClipboardTextRegular ref={ref} {...rest} />;
}));

ClipboardText.displayName = 'ClipboardText';

// Triple export pattern (lucide-react style)
export { ClipboardText, ClipboardText as ClipboardTextIcon, ClipboardText as SiClipboardText };
