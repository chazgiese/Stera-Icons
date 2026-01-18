import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BlocksRegular } from './BlocksRegular';
import { BlocksRegularDuotone } from './BlocksRegularDuotone';
import { BlocksBold } from './BlocksBold';
import { BlocksBoldDuotone } from './BlocksBoldDuotone';
import { BlocksFill } from './BlocksFill';
import { BlocksFillDuotone } from './BlocksFillDuotone';

export interface BlocksProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Blocks - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BlocksRegular } from 'stera-icons/BlocksRegular';
 */
const Blocks = memo(forwardRef<SVGSVGElement, BlocksProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BlocksBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BlocksBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BlocksFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BlocksFill ref={ref} {...rest} />;
  if (duotone) return <BlocksRegularDuotone ref={ref} {...rest} />;
  return <BlocksRegular ref={ref} {...rest} />;
}));

Blocks.displayName = 'Blocks';

// Triple export pattern (lucide-react style)
export { Blocks, Blocks as BlocksIcon, Blocks as SiBlocks };
