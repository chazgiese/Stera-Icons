import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { TextUnderlineRegular } from './TextUnderlineRegular.js';
import { TextUnderlineRegularDuotone } from './TextUnderlineRegularDuotone.js';
import { TextUnderlineBold } from './TextUnderlineBold.js';
import { TextUnderlineBoldDuotone } from './TextUnderlineBoldDuotone.js';
import { TextUnderlineFill } from './TextUnderlineFill.js';
import { TextUnderlineFillDuotone } from './TextUnderlineFillDuotone.js';

export interface TextUnderlineProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TextUnderline - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TextUnderlineRegular } from 'stera-icons/icons/TextUnderlineRegular';
 */
const TextUnderline = memo(forwardRef<SVGSVGElement, TextUnderlineProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextUnderlineBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TextUnderlineBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TextUnderlineFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TextUnderlineFill ref={ref} {...rest} />;
  if (duotone) return <TextUnderlineRegularDuotone ref={ref} {...rest} />;
  return <TextUnderlineRegular ref={ref} {...rest} />;
}));

TextUnderline.displayName = 'TextUnderline';

// Triple export pattern (lucide-react style)
export { TextUnderline, TextUnderline as TextUnderlineIcon, TextUnderline as SiTextUnderline };
export default TextUnderline;
