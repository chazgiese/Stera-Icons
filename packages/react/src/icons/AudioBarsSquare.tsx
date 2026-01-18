import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AudioBarsSquareRegular } from './AudioBarsSquareRegular';
import { AudioBarsSquareRegularDuotone } from './AudioBarsSquareRegularDuotone';
import { AudioBarsSquareBold } from './AudioBarsSquareBold';
import { AudioBarsSquareBoldDuotone } from './AudioBarsSquareBoldDuotone';
import { AudioBarsSquareFill } from './AudioBarsSquareFill';
import { AudioBarsSquareFillDuotone } from './AudioBarsSquareFillDuotone';

export interface AudioBarsSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AudioBarsSquare with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { AudioBarsSquareRegular } from 'stera-icons/AudioBarsSquareRegular';
 */
const AudioBarsSquare = memo(forwardRef<SVGSVGElement, AudioBarsSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AudioBarsSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AudioBarsSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AudioBarsSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AudioBarsSquareFill ref={ref} {...rest} />;
  if (duotone) return <AudioBarsSquareRegularDuotone ref={ref} {...rest} />;
  return <AudioBarsSquareRegular ref={ref} {...rest} />;
}));

AudioBarsSquare.displayName = 'AudioBarsSquare';

export { AudioBarsSquare };
