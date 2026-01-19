import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextUnderlineRegular } from './TextUnderlineRegular';
import { TextUnderlineRegularDuotone } from './TextUnderlineRegularDuotone';
import { TextUnderlineBold } from './TextUnderlineBold';
import { TextUnderlineBoldDuotone } from './TextUnderlineBoldDuotone';
import { TextUnderlineFill } from './TextUnderlineFill';
import { TextUnderlineFillDuotone } from './TextUnderlineFillDuotone';

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
