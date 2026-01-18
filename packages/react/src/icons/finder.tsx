import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FinderRegular } from './FinderRegular';
import { FinderRegularDuotone } from './FinderRegularDuotone';
import { FinderBold } from './FinderBold';
import { FinderBoldDuotone } from './FinderBoldDuotone';
import { FinderFill } from './FinderFill';
import { FinderFillDuotone } from './FinderFillDuotone';

export interface FinderProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Finder with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { FinderRegular } from 'stera-icons/FinderRegular';
 */
const Finder = memo(forwardRef<SVGSVGElement, FinderProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FinderBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FinderBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FinderFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FinderFill ref={ref} {...rest} />;
  if (duotone) return <FinderRegularDuotone ref={ref} {...rest} />;
  return <FinderRegular ref={ref} {...rest} />;
}));

Finder.displayName = 'Finder';

export { Finder };
