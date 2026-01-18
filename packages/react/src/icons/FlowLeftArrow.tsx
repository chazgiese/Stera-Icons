import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowLeftArrowRegular } from './FlowLeftArrowRegular';
import { FlowLeftArrowRegularDuotone } from './FlowLeftArrowRegularDuotone';
import { FlowLeftArrowBold } from './FlowLeftArrowBold';
import { FlowLeftArrowBoldDuotone } from './FlowLeftArrowBoldDuotone';
import { FlowLeftArrowFill } from './FlowLeftArrowFill';
import { FlowLeftArrowFillDuotone } from './FlowLeftArrowFillDuotone';

export interface FlowLeftArrowProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FlowLeftArrow with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { FlowLeftArrowRegular } from 'stera-icons/FlowLeftArrowRegular';
 */
const FlowLeftArrow = memo(forwardRef<SVGSVGElement, FlowLeftArrowProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowLeftArrowBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlowLeftArrowBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlowLeftArrowFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlowLeftArrowFill ref={ref} {...rest} />;
  if (duotone) return <FlowLeftArrowRegularDuotone ref={ref} {...rest} />;
  return <FlowLeftArrowRegular ref={ref} {...rest} />;
}));

FlowLeftArrow.displayName = 'FlowLeftArrow';

export { FlowLeftArrow };
