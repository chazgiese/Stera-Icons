import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ToolboxRegular } from './ToolboxRegular';
import { ToolboxRegularDuotone } from './ToolboxRegularDuotone';
import { ToolboxBold } from './ToolboxBold';
import { ToolboxBoldDuotone } from './ToolboxBoldDuotone';
import { ToolboxFill } from './ToolboxFill';
import { ToolboxFillDuotone } from './ToolboxFillDuotone';

export interface ToolboxProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Toolbox - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ToolboxRegular } from 'stera-icons/ToolboxRegular';
 */
const Toolbox = memo(forwardRef<SVGSVGElement, ToolboxProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ToolboxBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ToolboxBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ToolboxFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ToolboxFill ref={ref} {...rest} />;
  if (duotone) return <ToolboxRegularDuotone ref={ref} {...rest} />;
  return <ToolboxRegular ref={ref} {...rest} />;
}));

Toolbox.displayName = 'Toolbox';

// Triple export pattern (lucide-react style)
export { Toolbox, Toolbox as ToolboxIcon, Toolbox as SiToolbox };
