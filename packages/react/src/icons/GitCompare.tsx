import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GitCompareRegular } from './GitCompareRegular';
import { GitCompareRegularDuotone } from './GitCompareRegularDuotone';
import { GitCompareBold } from './GitCompareBold';
import { GitCompareBoldDuotone } from './GitCompareBoldDuotone';
import { GitCompareFill } from './GitCompareFill';
import { GitCompareFillDuotone } from './GitCompareFillDuotone';

export interface GitCompareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GitCompare with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { GitCompareRegular } from 'stera-icons/GitCompareRegular';
 */
const GitCompare = memo(forwardRef<SVGSVGElement, GitCompareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GitCompareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GitCompareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GitCompareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GitCompareFill ref={ref} {...rest} />;
  if (duotone) return <GitCompareRegularDuotone ref={ref} {...rest} />;
  return <GitCompareRegular ref={ref} {...rest} />;
}));

GitCompare.displayName = 'GitCompare';

export { GitCompare };
