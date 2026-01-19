import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CursorTextRegular } from './CursorTextRegular';
import { CursorTextRegularDuotone } from './CursorTextRegularDuotone';
import { CursorTextBold } from './CursorTextBold';
import { CursorTextBoldDuotone } from './CursorTextBoldDuotone';
import { CursorTextFill } from './CursorTextFill';
import { CursorTextFillDuotone } from './CursorTextFillDuotone';

export interface CursorTextProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CursorText - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CursorTextRegular } from 'stera-icons/icons/CursorTextRegular';
 */
const CursorText = memo(forwardRef<SVGSVGElement, CursorTextProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CursorTextBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CursorTextBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CursorTextFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CursorTextFill ref={ref} {...rest} />;
  if (duotone) return <CursorTextRegularDuotone ref={ref} {...rest} />;
  return <CursorTextRegular ref={ref} {...rest} />;
}));

CursorText.displayName = 'CursorText';

// Triple export pattern (lucide-react style)
export { CursorText, CursorText as CursorTextIcon, CursorText as SiCursorText };
export default CursorText;
