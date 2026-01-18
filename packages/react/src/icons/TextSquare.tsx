import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextSquareRegular } from './TextSquareRegular';
import { TextSquareRegularDuotone } from './TextSquareRegularDuotone';
import { TextSquareBold } from './TextSquareBold';
import { TextSquareBoldDuotone } from './TextSquareBoldDuotone';
import { TextSquareFill } from './TextSquareFill';
import { TextSquareFillDuotone } from './TextSquareFillDuotone';

export interface TextSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TextSquare with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { TextSquareRegular } from 'stera-icons/TextSquareRegular';
 */
const TextSquare = memo(forwardRef<SVGSVGElement, TextSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TextSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TextSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TextSquareFill ref={ref} {...rest} />;
  if (duotone) return <TextSquareRegularDuotone ref={ref} {...rest} />;
  return <TextSquareRegular ref={ref} {...rest} />;
}));

TextSquare.displayName = 'TextSquare';

export { TextSquare };
