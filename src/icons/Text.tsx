import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextRegular } from './TextRegular';
import { TextRegularDuotone } from './TextRegularDuotone';
import { TextBold } from './TextBold';
import { TextBoldDuotone } from './TextBoldDuotone';
import { TextFill } from './TextFill';
import { TextFillDuotone } from './TextFillDuotone';

export interface TextProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Text - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TextRegular } from 'stera-icons/icons/TextRegular';
 */
const Text = memo(forwardRef<SVGSVGElement, TextProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TextBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TextFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TextFill ref={ref} {...rest} />;
  if (duotone) return <TextRegularDuotone ref={ref} {...rest} />;
  return <TextRegular ref={ref} {...rest} />;
}));

Text.displayName = 'Text';

// Triple export pattern (lucide-react style)
export { Text, Text as TextIcon, Text as SiText };
