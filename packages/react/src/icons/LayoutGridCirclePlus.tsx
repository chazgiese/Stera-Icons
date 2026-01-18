import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LayoutGridCirclePlusRegular } from './LayoutGridCirclePlusRegular';
import { LayoutGridCirclePlusRegularDuotone } from './LayoutGridCirclePlusRegularDuotone';
import { LayoutGridCirclePlusBold } from './LayoutGridCirclePlusBold';
import { LayoutGridCirclePlusBoldDuotone } from './LayoutGridCirclePlusBoldDuotone';
import { LayoutGridCirclePlusFill } from './LayoutGridCirclePlusFill';
import { LayoutGridCirclePlusFillDuotone } from './LayoutGridCirclePlusFillDuotone';

export interface LayoutGridCirclePlusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LayoutGridCirclePlus with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { LayoutGridCirclePlusRegular } from 'stera-icons/LayoutGridCirclePlusRegular';
 */
const LayoutGridCirclePlus = memo(forwardRef<SVGSVGElement, LayoutGridCirclePlusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LayoutGridCirclePlusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LayoutGridCirclePlusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LayoutGridCirclePlusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LayoutGridCirclePlusFill ref={ref} {...rest} />;
  if (duotone) return <LayoutGridCirclePlusRegularDuotone ref={ref} {...rest} />;
  return <LayoutGridCirclePlusRegular ref={ref} {...rest} />;
}));

LayoutGridCirclePlus.displayName = 'LayoutGridCirclePlus';

export { LayoutGridCirclePlus };
