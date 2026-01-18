import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowUpLeftDownRightRegular } from './ArrowUpLeftDownRightRegular';
import { ArrowUpLeftDownRightRegularDuotone } from './ArrowUpLeftDownRightRegularDuotone';
import { ArrowUpLeftDownRightBold } from './ArrowUpLeftDownRightBold';
import { ArrowUpLeftDownRightBoldDuotone } from './ArrowUpLeftDownRightBoldDuotone';
import { ArrowUpLeftDownRightFill } from './ArrowUpLeftDownRightFill';
import { ArrowUpLeftDownRightFillDuotone } from './ArrowUpLeftDownRightFillDuotone';

export interface ArrowUpLeftDownRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowUpLeftDownRight with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowUpLeftDownRightRegular } from 'stera-icons/ArrowUpLeftDownRightRegular';
 */
const ArrowUpLeftDownRight = memo(forwardRef<SVGSVGElement, ArrowUpLeftDownRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowUpLeftDownRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowUpLeftDownRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowUpLeftDownRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowUpLeftDownRightFill ref={ref} {...rest} />;
  if (duotone) return <ArrowUpLeftDownRightRegularDuotone ref={ref} {...rest} />;
  return <ArrowUpLeftDownRightRegular ref={ref} {...rest} />;
}));

ArrowUpLeftDownRight.displayName = 'ArrowUpLeftDownRight';

export { ArrowUpLeftDownRight };
