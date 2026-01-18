import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextAlignCenterRegular } from './TextAlignCenterRegular';
import { TextAlignCenterRegularDuotone } from './TextAlignCenterRegularDuotone';
import { TextAlignCenterBold } from './TextAlignCenterBold';
import { TextAlignCenterBoldDuotone } from './TextAlignCenterBoldDuotone';
import { TextAlignCenterFill } from './TextAlignCenterFill';
import { TextAlignCenterFillDuotone } from './TextAlignCenterFillDuotone';

export interface TextAlignCenterProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TextAlignCenter - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TextAlignCenterRegular } from 'stera-icons/TextAlignCenterRegular';
 */
const TextAlignCenter = memo(forwardRef<SVGSVGElement, TextAlignCenterProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextAlignCenterBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TextAlignCenterBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TextAlignCenterFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TextAlignCenterFill ref={ref} {...rest} />;
  if (duotone) return <TextAlignCenterRegularDuotone ref={ref} {...rest} />;
  return <TextAlignCenterRegular ref={ref} {...rest} />;
}));

TextAlignCenter.displayName = 'TextAlignCenter';

// Triple export pattern (lucide-react style)
export { TextAlignCenter, TextAlignCenter as TextAlignCenterIcon, TextAlignCenter as SiTextAlignCenter };
