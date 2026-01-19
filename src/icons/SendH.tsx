import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SendHRegular } from './SendHRegular';
import { SendHRegularDuotone } from './SendHRegularDuotone';
import { SendHBold } from './SendHBold';
import { SendHBoldDuotone } from './SendHBoldDuotone';
import { SendHFill } from './SendHFill';
import { SendHFillDuotone } from './SendHFillDuotone';

export interface SendHProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SendH - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SendHRegular } from 'stera-icons/icons/SendHRegular';
 */
const SendH = memo(forwardRef<SVGSVGElement, SendHProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SendHBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SendHBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SendHFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SendHFill ref={ref} {...rest} />;
  if (duotone) return <SendHRegularDuotone ref={ref} {...rest} />;
  return <SendHRegular ref={ref} {...rest} />;
}));

SendH.displayName = 'SendH';

// Triple export pattern (lucide-react style)
export { SendH, SendH as SendHIcon, SendH as SiSendH };
export default SendH;
