import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextItalicRegular } from './TextItalicRegular';
import { TextItalicRegularDuotone } from './TextItalicRegularDuotone';
import { TextItalicBold } from './TextItalicBold';
import { TextItalicBoldDuotone } from './TextItalicBoldDuotone';
import { TextItalicFill } from './TextItalicFill';
import { TextItalicFillDuotone } from './TextItalicFillDuotone';

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
