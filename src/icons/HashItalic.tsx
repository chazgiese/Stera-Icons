import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { HashItalicRegular } from './HashItalicRegular.js';
import { HashItalicRegularDuotone } from './HashItalicRegularDuotone.js';
import { HashItalicBold } from './HashItalicBold.js';
import { HashItalicBoldDuotone } from './HashItalicBoldDuotone.js';
import { HashItalicFill } from './HashItalicFill.js';
import { HashItalicFillDuotone } from './HashItalicFillDuotone.js';

export interface HashItalicProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * HashItalic - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { HashItalicRegular } from 'stera-icons/icons/HashItalicRegular';
 */
const HashItalic = memo(forwardRef<SVGSVGElement, HashItalicProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HashItalicBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HashItalicBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HashItalicFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HashItalicFill ref={ref} {...rest} />;
  if (duotone) return <HashItalicRegularDuotone ref={ref} {...rest} />;
  return <HashItalicRegular ref={ref} {...rest} />;
}));

HashItalic.displayName = 'HashItalic';

// Triple export pattern (lucide-react style)
export { HashItalic, HashItalic as HashItalicIcon, HashItalic as SiHashItalic };
export default HashItalic;
