import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextAlignLeftRegular } from './TextAlignLeftRegular';
import { TextAlignLeftRegularDuotone } from './TextAlignLeftRegularDuotone';
import { TextAlignLeftBold } from './TextAlignLeftBold';
import { TextAlignLeftBoldDuotone } from './TextAlignLeftBoldDuotone';
import { TextAlignLeftFill } from './TextAlignLeftFill';
import { TextAlignLeftFillDuotone } from './TextAlignLeftFillDuotone';

export interface TextAlignLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TextAlignLeft with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { TextAlignLeftRegular } from 'stera-icons/TextAlignLeftRegular';
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

export { TextAlignLeft };
