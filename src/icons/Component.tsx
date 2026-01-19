import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ComponentRegular } from './ComponentRegular';
import { ComponentRegularDuotone } from './ComponentRegularDuotone';
import { ComponentBold } from './ComponentBold';
import { ComponentBoldDuotone } from './ComponentBoldDuotone';
import { ComponentFill } from './ComponentFill';
import { ComponentFillDuotone } from './ComponentFillDuotone';

export interface ComponentProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Component - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ComponentRegular } from 'stera-icons/icons/ComponentRegular';
 */
const Component = memo(forwardRef<SVGSVGElement, ComponentProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ComponentBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ComponentBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ComponentFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ComponentFill ref={ref} {...rest} />;
  if (duotone) return <ComponentRegularDuotone ref={ref} {...rest} />;
  return <ComponentRegular ref={ref} {...rest} />;
}));

Component.displayName = 'Component';

// Triple export pattern (lucide-react style)
export { Component, Component as ComponentIcon, Component as SiComponent };
export default Component;
