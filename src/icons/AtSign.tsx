import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AtSignRegular } from './AtSignRegular';
import { AtSignRegularDuotone } from './AtSignRegularDuotone';
import { AtSignBold } from './AtSignBold';
import { AtSignBoldDuotone } from './AtSignBoldDuotone';
import { AtSignFill } from './AtSignFill';
import { AtSignFillDuotone } from './AtSignFillDuotone';

export interface AtSignProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AtSign - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AtSignRegular } from 'stera-icons/icons/AtSignRegular';
 */
const AtSign = memo(forwardRef<SVGSVGElement, AtSignProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AtSignBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AtSignBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AtSignFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AtSignFill ref={ref} {...rest} />;
  if (duotone) return <AtSignRegularDuotone ref={ref} {...rest} />;
  return <AtSignRegular ref={ref} {...rest} />;
}));

AtSign.displayName = 'AtSign';

// Triple export pattern (lucide-react style)
export { AtSign, AtSign as AtSignIcon, AtSign as SiAtSign };
export default AtSign;
