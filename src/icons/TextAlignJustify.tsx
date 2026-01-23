import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { TextAlignJustifyRegular } from './TextAlignJustifyRegular.js';
import { TextAlignJustifyRegularDuotone } from './TextAlignJustifyRegularDuotone.js';
import { TextAlignJustifyBold } from './TextAlignJustifyBold.js';
import { TextAlignJustifyBoldDuotone } from './TextAlignJustifyBoldDuotone.js';
import { TextAlignJustifyFill } from './TextAlignJustifyFill.js';
import { TextAlignJustifyFillDuotone } from './TextAlignJustifyFillDuotone.js';

export interface TextAlignJustifyProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TextAlignJustify - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TextAlignJustifyRegular } from 'stera-icons/icons/TextAlignJustifyRegular';
 */
const TextAlignJustify = memo(forwardRef<SVGSVGElement, TextAlignJustifyProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextAlignJustifyBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TextAlignJustifyBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TextAlignJustifyFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TextAlignJustifyFill ref={ref} {...rest} />;
  if (duotone) return <TextAlignJustifyRegularDuotone ref={ref} {...rest} />;
  return <TextAlignJustifyRegular ref={ref} {...rest} />;
}));

TextAlignJustify.displayName = 'TextAlignJustify';

// Triple export pattern (lucide-react style)
export { TextAlignJustify, TextAlignJustify as TextAlignJustifyIcon, TextAlignJustify as SiTextAlignJustify };
export default TextAlignJustify;
