import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextSparkleRegular } from './TextSparkleRegular';
import { TextSparkleRegularDuotone } from './TextSparkleRegularDuotone';
import { TextSparkleBold } from './TextSparkleBold';
import { TextSparkleBoldDuotone } from './TextSparkleBoldDuotone';
import { TextSparkleFill } from './TextSparkleFill';
import { TextSparkleFillDuotone } from './TextSparkleFillDuotone';

export interface TextSparkleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TextSparkle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TextSparkleRegular } from 'stera-icons/TextSparkleRegular';
 */
const TextSparkle = memo(forwardRef<SVGSVGElement, TextSparkleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextSparkleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TextSparkleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TextSparkleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TextSparkleFill ref={ref} {...rest} />;
  if (duotone) return <TextSparkleRegularDuotone ref={ref} {...rest} />;
  return <TextSparkleRegular ref={ref} {...rest} />;
}));

TextSparkle.displayName = 'TextSparkle';

// Triple export pattern (lucide-react style)
export { TextSparkle, TextSparkle as TextSparkleIcon, TextSparkle as SiTextSparkle };
