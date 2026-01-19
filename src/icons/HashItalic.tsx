import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HashItalicRegular } from './HashItalicRegular';
import { HashItalicRegularDuotone } from './HashItalicRegularDuotone';
import { HashItalicBold } from './HashItalicBold';
import { HashItalicBoldDuotone } from './HashItalicBoldDuotone';
import { HashItalicFill } from './HashItalicFill';
import { HashItalicFillDuotone } from './HashItalicFillDuotone';

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
