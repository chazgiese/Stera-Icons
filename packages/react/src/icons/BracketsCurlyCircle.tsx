import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BracketsCurlyCircleRegular } from './BracketsCurlyCircleRegular';
import { BracketsCurlyCircleRegularDuotone } from './BracketsCurlyCircleRegularDuotone';
import { BracketsCurlyCircleBold } from './BracketsCurlyCircleBold';
import { BracketsCurlyCircleBoldDuotone } from './BracketsCurlyCircleBoldDuotone';
import { BracketsCurlyCircleFill } from './BracketsCurlyCircleFill';
import { BracketsCurlyCircleFillDuotone } from './BracketsCurlyCircleFillDuotone';

export interface BracketsCurlyCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BracketsCurlyCircle with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { BracketsCurlyCircleRegular } from 'stera-icons/BracketsCurlyCircleRegular';
 */
const BracketsCurlyCircle = memo(forwardRef<SVGSVGElement, BracketsCurlyCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BracketsCurlyCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BracketsCurlyCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BracketsCurlyCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BracketsCurlyCircleFill ref={ref} {...rest} />;
  if (duotone) return <BracketsCurlyCircleRegularDuotone ref={ref} {...rest} />;
  return <BracketsCurlyCircleRegular ref={ref} {...rest} />;
}));

BracketsCurlyCircle.displayName = 'BracketsCurlyCircle';

export { BracketsCurlyCircle };
