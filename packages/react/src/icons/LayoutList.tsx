import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LayoutListRegular } from './LayoutListRegular';
import { LayoutListRegularDuotone } from './LayoutListRegularDuotone';
import { LayoutListBold } from './LayoutListBold';
import { LayoutListBoldDuotone } from './LayoutListBoldDuotone';
import { LayoutListFill } from './LayoutListFill';
import { LayoutListFillDuotone } from './LayoutListFillDuotone';

export interface LayoutListProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LayoutList with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { LayoutListRegular } from 'stera-icons/LayoutListRegular';
 */
const LayoutList = memo(forwardRef<SVGSVGElement, LayoutListProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LayoutListBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LayoutListBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LayoutListFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LayoutListFill ref={ref} {...rest} />;
  if (duotone) return <LayoutListRegularDuotone ref={ref} {...rest} />;
  return <LayoutListRegular ref={ref} {...rest} />;
}));

LayoutList.displayName = 'LayoutList';

export { LayoutList };
