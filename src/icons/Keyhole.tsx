import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { KeyholeRegular } from './KeyholeRegular';
import { KeyholeRegularDuotone } from './KeyholeRegularDuotone';
import { KeyholeBold } from './KeyholeBold';
import { KeyholeBoldDuotone } from './KeyholeBoldDuotone';
import { KeyholeFill } from './KeyholeFill';
import { KeyholeFillDuotone } from './KeyholeFillDuotone';

export interface KeyholeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Keyhole - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { KeyholeRegular } from 'stera-icons/icons/KeyholeRegular';
 */
const Keyhole = memo(forwardRef<SVGSVGElement, KeyholeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <KeyholeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <KeyholeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <KeyholeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <KeyholeFill ref={ref} {...rest} />;
  if (duotone) return <KeyholeRegularDuotone ref={ref} {...rest} />;
  return <KeyholeRegular ref={ref} {...rest} />;
}));

Keyhole.displayName = 'Keyhole';

// Triple export pattern (lucide-react style)
export { Keyhole, Keyhole as KeyholeIcon, Keyhole as SiKeyhole };
