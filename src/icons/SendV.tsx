import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SendVRegular } from './SendVRegular.js';
import { SendVRegularDuotone } from './SendVRegularDuotone.js';
import { SendVBold } from './SendVBold.js';
import { SendVBoldDuotone } from './SendVBoldDuotone.js';
import { SendVFill } from './SendVFill.js';
import { SendVFillDuotone } from './SendVFillDuotone.js';

export interface SendVProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SendV - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SendVRegular } from 'stera-icons/icons/SendVRegular';
 */
const SendV = memo(forwardRef<SVGSVGElement, SendVProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SendVBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SendVBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SendVFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SendVFill ref={ref} {...rest} />;
  if (duotone) return <SendVRegularDuotone ref={ref} {...rest} />;
  return <SendVRegular ref={ref} {...rest} />;
}));

SendV.displayName = 'SendV';

// Triple export pattern (lucide-react style)
export { SendV, SendV as SendVIcon, SendV as SiSendV };
export default SendV;
