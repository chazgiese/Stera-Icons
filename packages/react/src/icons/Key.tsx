import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { KeyRegular } from './KeyRegular';
import { KeyRegularDuotone } from './KeyRegularDuotone';
import { KeyBold } from './KeyBold';
import { KeyBoldDuotone } from './KeyBoldDuotone';
import { KeyFill } from './KeyFill';
import { KeyFillDuotone } from './KeyFillDuotone';

export interface KeyProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Key with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { KeyRegular } from 'stera-icons/KeyRegular';
 */
const Key = memo(forwardRef<SVGSVGElement, KeyProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <KeyBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <KeyBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <KeyFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <KeyFill ref={ref} {...rest} />;
  if (duotone) return <KeyRegularDuotone ref={ref} {...rest} />;
  return <KeyRegular ref={ref} {...rest} />;
}));

Key.displayName = 'Key';

export { Key };
