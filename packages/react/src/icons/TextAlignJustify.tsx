import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextAlignJustifyRegular } from './TextAlignJustifyRegular';
import { TextAlignJustifyRegularDuotone } from './TextAlignJustifyRegularDuotone';
import { TextAlignJustifyBold } from './TextAlignJustifyBold';
import { TextAlignJustifyBoldDuotone } from './TextAlignJustifyBoldDuotone';
import { TextAlignJustifyFill } from './TextAlignJustifyFill';
import { TextAlignJustifyFillDuotone } from './TextAlignJustifyFillDuotone';

export interface TextAlignJustifyProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TextAlignJustify with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { TextAlignJustifyRegular } from 'stera-icons/TextAlignJustifyRegular';
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

export { TextAlignJustify };
