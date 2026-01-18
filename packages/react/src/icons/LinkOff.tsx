import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LinkOffRegular } from './LinkOffRegular';
import { LinkOffRegularDuotone } from './LinkOffRegularDuotone';
import { LinkOffBold } from './LinkOffBold';
import { LinkOffBoldDuotone } from './LinkOffBoldDuotone';
import { LinkOffFill } from './LinkOffFill';
import { LinkOffFillDuotone } from './LinkOffFillDuotone';

export interface LinkOffProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LinkOff with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { LinkOffRegular } from 'stera-icons/LinkOffRegular';
 */
const LinkOff = memo(forwardRef<SVGSVGElement, LinkOffProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LinkOffBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LinkOffBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LinkOffFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LinkOffFill ref={ref} {...rest} />;
  if (duotone) return <LinkOffRegularDuotone ref={ref} {...rest} />;
  return <LinkOffRegular ref={ref} {...rest} />;
}));

LinkOff.displayName = 'LinkOff';

export { LinkOff };
