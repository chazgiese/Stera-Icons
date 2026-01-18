import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlaskRegular } from './FlaskRegular';
import { FlaskRegularDuotone } from './FlaskRegularDuotone';
import { FlaskBold } from './FlaskBold';
import { FlaskBoldDuotone } from './FlaskBoldDuotone';
import { FlaskFill } from './FlaskFill';
import { FlaskFillDuotone } from './FlaskFillDuotone';

export interface FlaskProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Flask with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { FlaskRegular } from 'stera-icons/FlaskRegular';
 */
const Flask = memo(forwardRef<SVGSVGElement, FlaskProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlaskBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlaskBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlaskFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlaskFill ref={ref} {...rest} />;
  if (duotone) return <FlaskRegularDuotone ref={ref} {...rest} />;
  return <FlaskRegular ref={ref} {...rest} />;
}));

Flask.displayName = 'Flask';

export { Flask };
