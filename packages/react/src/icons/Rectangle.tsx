import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RectangleRegular } from './RectangleRegular';
import { RectangleRegularDuotone } from './RectangleRegularDuotone';
import { RectangleBold } from './RectangleBold';
import { RectangleBoldDuotone } from './RectangleBoldDuotone';
import { RectangleFill } from './RectangleFill';
import { RectangleFillDuotone } from './RectangleFillDuotone';

export interface RectangleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Rectangle with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { RectangleRegular } from 'stera-icons/RectangleRegular';
 */
const Rectangle = memo(forwardRef<SVGSVGElement, RectangleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <RectangleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <RectangleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <RectangleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <RectangleFill ref={ref} {...rest} />;
  if (duotone) return <RectangleRegularDuotone ref={ref} {...rest} />;
  return <RectangleRegular ref={ref} {...rest} />;
}));

Rectangle.displayName = 'Rectangle';

export { Rectangle };
