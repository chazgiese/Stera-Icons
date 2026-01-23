import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { TextAlignLeftRegular } from './TextAlignLeftRegular.js';
import { TextAlignLeftRegularDuotone } from './TextAlignLeftRegularDuotone.js';
import { TextAlignLeftBold } from './TextAlignLeftBold.js';
import { TextAlignLeftBoldDuotone } from './TextAlignLeftBoldDuotone.js';
import { TextAlignLeftFill } from './TextAlignLeftFill.js';
import { TextAlignLeftFillDuotone } from './TextAlignLeftFillDuotone.js';

export interface TextAlignLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TextAlignLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TextAlignLeftRegular } from 'stera-icons/icons/TextAlignLeftRegular';
 */
const TextAlignLeft = memo(forwardRef<SVGSVGElement, TextAlignLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextAlignLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TextAlignLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TextAlignLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TextAlignLeftFill ref={ref} {...rest} />;
  if (duotone) return <TextAlignLeftRegularDuotone ref={ref} {...rest} />;
  return <TextAlignLeftRegular ref={ref} {...rest} />;
}));

TextAlignLeft.displayName = 'TextAlignLeft';

// Triple export pattern (lucide-react style)
export { TextAlignLeft, TextAlignLeft as TextAlignLeftIcon, TextAlignLeft as SiTextAlignLeft };
export default TextAlignLeft;
