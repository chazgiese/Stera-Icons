import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextStrikethroughRegular } from './TextStrikethroughRegular';
import { TextStrikethroughRegularDuotone } from './TextStrikethroughRegularDuotone';
import { TextStrikethroughBold } from './TextStrikethroughBold';
import { TextStrikethroughBoldDuotone } from './TextStrikethroughBoldDuotone';
import { TextStrikethroughFill } from './TextStrikethroughFill';
import { TextStrikethroughFillDuotone } from './TextStrikethroughFillDuotone';

export interface TextStrikethroughProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TextStrikethrough - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TextStrikethroughRegular } from 'stera-icons/TextStrikethroughRegular';
 */
const TextStrikethrough = memo(forwardRef<SVGSVGElement, TextStrikethroughProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextStrikethroughBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TextStrikethroughBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TextStrikethroughFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TextStrikethroughFill ref={ref} {...rest} />;
  if (duotone) return <TextStrikethroughRegularDuotone ref={ref} {...rest} />;
  return <TextStrikethroughRegular ref={ref} {...rest} />;
}));

TextStrikethrough.displayName = 'TextStrikethrough';

// Triple export pattern (lucide-react style)
export { TextStrikethrough, TextStrikethrough as TextStrikethroughIcon, TextStrikethrough as SiTextStrikethrough };
