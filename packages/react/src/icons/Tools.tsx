import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ToolsRegular } from './ToolsRegular';
import { ToolsRegularDuotone } from './ToolsRegularDuotone';
import { ToolsBold } from './ToolsBold';
import { ToolsBoldDuotone } from './ToolsBoldDuotone';
import { ToolsFill } from './ToolsFill';
import { ToolsFillDuotone } from './ToolsFillDuotone';

export interface ToolsProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Tools - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ToolsRegular } from 'stera-icons/ToolsRegular';
 */
const Tools = memo(forwardRef<SVGSVGElement, ToolsProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ToolsBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ToolsBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ToolsFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ToolsFill ref={ref} {...rest} />;
  if (duotone) return <ToolsRegularDuotone ref={ref} {...rest} />;
  return <ToolsRegular ref={ref} {...rest} />;
}));

Tools.displayName = 'Tools';

// Triple export pattern (lucide-react style)
export { Tools, Tools as ToolsIcon, Tools as SiTools };
