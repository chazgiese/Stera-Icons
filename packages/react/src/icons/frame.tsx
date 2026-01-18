import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FrameRegular } from './FrameRegular';
import { FrameRegularDuotone } from './FrameRegularDuotone';
import { FrameBold } from './FrameBold';
import { FrameBoldDuotone } from './FrameBoldDuotone';
import { FrameFill } from './FrameFill';
import { FrameFillDuotone } from './FrameFillDuotone';

export interface FrameProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Frame with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { FrameRegular } from 'stera-icons/FrameRegular';
 */
const Frame = memo(forwardRef<SVGSVGElement, FrameProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FrameBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FrameBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FrameFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FrameFill ref={ref} {...rest} />;
  if (duotone) return <FrameRegularDuotone ref={ref} {...rest} />;
  return <FrameRegular ref={ref} {...rest} />;
}));

Frame.displayName = 'Frame';

export { Frame };
