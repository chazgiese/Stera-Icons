import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { TextItalicRegular } from './TextItalicRegular.js';
import { TextItalicRegularDuotone } from './TextItalicRegularDuotone.js';
import { TextItalicBold } from './TextItalicBold.js';
import { TextItalicBoldDuotone } from './TextItalicBoldDuotone.js';
import { TextItalicFill } from './TextItalicFill.js';
import { TextItalicFillDuotone } from './TextItalicFillDuotone.js';

export interface TextItalicProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TextItalic - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TextItalicRegular } from 'stera-icons/icons/TextItalicRegular';
 */
const TextItalic = memo(forwardRef<SVGSVGElement, TextItalicProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextItalicBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TextItalicBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TextItalicFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TextItalicFill ref={ref} {...rest} />;
  if (duotone) return <TextItalicRegularDuotone ref={ref} {...rest} />;
  return <TextItalicRegular ref={ref} {...rest} />;
}));

TextItalic.displayName = 'TextItalic';

// Triple export pattern (lucide-react style)
export { TextItalic, TextItalic as TextItalicIcon, TextItalic as SiTextItalic };
export default TextItalic;
