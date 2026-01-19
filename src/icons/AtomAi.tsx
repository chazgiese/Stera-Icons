import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AtomAiRegular } from './AtomAiRegular';
import { AtomAiRegularDuotone } from './AtomAiRegularDuotone';
import { AtomAiBold } from './AtomAiBold';
import { AtomAiBoldDuotone } from './AtomAiBoldDuotone';
import { AtomAiFill } from './AtomAiFill';
import { AtomAiFillDuotone } from './AtomAiFillDuotone';

export interface AtomAiProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AtomAi - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AtomAiRegular } from 'stera-icons/icons/AtomAiRegular';
 */
const AtomAi = memo(forwardRef<SVGSVGElement, AtomAiProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AtomAiBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AtomAiBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AtomAiFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AtomAiFill ref={ref} {...rest} />;
  if (duotone) return <AtomAiRegularDuotone ref={ref} {...rest} />;
  return <AtomAiRegular ref={ref} {...rest} />;
}));

AtomAi.displayName = 'AtomAi';

// Triple export pattern (lucide-react style)
export { AtomAi, AtomAi as AtomAiIcon, AtomAi as SiAtomAi };
export default AtomAi;
