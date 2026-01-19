import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MailOpenRegular } from './MailOpenRegular';
import { MailOpenRegularDuotone } from './MailOpenRegularDuotone';
import { MailOpenBold } from './MailOpenBold';
import { MailOpenBoldDuotone } from './MailOpenBoldDuotone';
import { MailOpenFill } from './MailOpenFill';
import { MailOpenFillDuotone } from './MailOpenFillDuotone';

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
