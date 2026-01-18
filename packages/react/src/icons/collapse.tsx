import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CollapseRegular } from './CollapseRegular';
import { CollapseRegularDuotone } from './CollapseRegularDuotone';
import { CollapseBold } from './CollapseBold';
import { CollapseBoldDuotone } from './CollapseBoldDuotone';
import { CollapseFill } from './CollapseFill';
import { CollapseFillDuotone } from './CollapseFillDuotone';

export interface CollapseProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Collapse with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CollapseRegular } from 'stera-icons/CollapseRegular';
 */
const Collapse = memo(forwardRef<SVGSVGElement, CollapseProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CollapseBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CollapseBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CollapseFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CollapseFill ref={ref} {...rest} />;
  if (duotone) return <CollapseRegularDuotone ref={ref} {...rest} />;
  return <CollapseRegular ref={ref} {...rest} />;
}));

Collapse.displayName = 'Collapse';

export { Collapse };
