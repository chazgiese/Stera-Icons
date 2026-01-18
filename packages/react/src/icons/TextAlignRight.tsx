import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextAlignRightRegular } from './TextAlignRightRegular';
import { TextAlignRightRegularDuotone } from './TextAlignRightRegularDuotone';
import { TextAlignRightBold } from './TextAlignRightBold';
import { TextAlignRightBoldDuotone } from './TextAlignRightBoldDuotone';
import { TextAlignRightFill } from './TextAlignRightFill';
import { TextAlignRightFillDuotone } from './TextAlignRightFillDuotone';

export interface TextAlignRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TextAlignRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TextAlignRightRegular } from 'stera-icons/TextAlignRightRegular';
 */
const TextAlignRight = memo(forwardRef<SVGSVGElement, TextAlignRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextAlignRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TextAlignRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TextAlignRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TextAlignRightFill ref={ref} {...rest} />;
  if (duotone) return <TextAlignRightRegularDuotone ref={ref} {...rest} />;
  return <TextAlignRightRegular ref={ref} {...rest} />;
}));

TextAlignRight.displayName = 'TextAlignRight';

// Triple export pattern (lucide-react style)
export { TextAlignRight, TextAlignRight as TextAlignRightIcon, TextAlignRight as SiTextAlignRight };
