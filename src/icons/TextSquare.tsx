import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { TextSquareRegular } from './TextSquareRegular.js';
import { TextSquareRegularDuotone } from './TextSquareRegularDuotone.js';
import { TextSquareBold } from './TextSquareBold.js';
import { TextSquareBoldDuotone } from './TextSquareBoldDuotone.js';
import { TextSquareFill } from './TextSquareFill.js';
import { TextSquareFillDuotone } from './TextSquareFillDuotone.js';

export interface TextSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TextSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TextSquareRegular } from 'stera-icons/icons/TextSquareRegular';
 */
const TextSquare = memo(forwardRef<SVGSVGElement, TextSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TextSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TextSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TextSquareFill ref={ref} {...rest} />;
  if (duotone) return <TextSquareRegularDuotone ref={ref} {...rest} />;
  return <TextSquareRegular ref={ref} {...rest} />;
}));

TextSquare.displayName = 'TextSquare';

// Triple export pattern (lucide-react style)
export { TextSquare, TextSquare as TextSquareIcon, TextSquare as SiTextSquare };
export default TextSquare;
