import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SendHRegular } from './SendHRegular.js';
import { SendHRegularDuotone } from './SendHRegularDuotone.js';
import { SendHBold } from './SendHBold.js';
import { SendHBoldDuotone } from './SendHBoldDuotone.js';
import { SendHFill } from './SendHFill.js';
import { SendHFillDuotone } from './SendHFillDuotone.js';

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
