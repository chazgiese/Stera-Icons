import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MailOpenRegular } from './MailOpenRegular.js';
import { MailOpenRegularDuotone } from './MailOpenRegularDuotone.js';
import { MailOpenBold } from './MailOpenBold.js';
import { MailOpenBoldDuotone } from './MailOpenBoldDuotone.js';
import { MailOpenFill } from './MailOpenFill.js';
import { MailOpenFillDuotone } from './MailOpenFillDuotone.js';

export interface MailOpenProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MailOpen - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MailOpenRegular } from 'stera-icons/icons/MailOpenRegular';
 */
const MailOpen = memo(forwardRef<SVGSVGElement, MailOpenProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MailOpenBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MailOpenBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MailOpenFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MailOpenFill ref={ref} {...rest} />;
  if (duotone) return <MailOpenRegularDuotone ref={ref} {...rest} />;
  return <MailOpenRegular ref={ref} {...rest} />;
}));

MailOpen.displayName = 'MailOpen';

// Triple export pattern (lucide-react style)
export { MailOpen, MailOpen as MailOpenIcon, MailOpen as SiMailOpen };
export default MailOpen;
