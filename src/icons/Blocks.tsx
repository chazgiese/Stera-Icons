import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BlocksRegular } from './BlocksRegular.js';
import { BlocksRegularDuotone } from './BlocksRegularDuotone.js';
import { BlocksBold } from './BlocksBold.js';
import { BlocksBoldDuotone } from './BlocksBoldDuotone.js';
import { BlocksFill } from './BlocksFill.js';
import { BlocksFillDuotone } from './BlocksFillDuotone.js';

export interface BlocksProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Blocks - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BlocksRegular } from 'stera-icons/icons/BlocksRegular';
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
export default Blocks;
