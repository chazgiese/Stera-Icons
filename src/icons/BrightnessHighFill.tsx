import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BrightnessHighFillProps = Omit<IconBaseProps, 'children'>;

const BrightnessHighFill = memo(
  forwardRef<SVGSVGElement, BrightnessHighFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="brightness-high-fill" {...props}>
      <path fill="currentColor" d="M12 18.5a1 1 0 0 1 1 1V22a1 1 0 0 1-2 0v-2.5a1 1 0 0 1 1-1M6 16.6A1 1 0 0 1 7.4 18l-1.76 1.77a1 1 0 0 1-1.42-1.41zM16.6 16.6a1 1 0 0 1 1.42 0l1.77 1.76a1 1 0 0 1-1.42 1.41l-1.77-1.76a1 1 0 0 1 0-1.42M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10M4.5 11a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2zM22 11a1 1 0 1 1 0 2h-2.5a1 1 0 0 1 0-2zM4.23 4.22a1 1 0 0 1 1.41 0l1.77 1.77A1 1 0 1 1 6 7.4L4.23 5.63a1 1 0 0 1 0-1.41M18.37 4.22a1 1 0 0 1 1.4 1.41L18.02 7.4a1 1 0 0 1-1.41-1.41zM12 1a1 1 0 0 1 1 1v2.5a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

BrightnessHighFill.displayName = 'BrightnessHighFill';

// Triple export pattern (lucide-react style)
export { BrightnessHighFill, BrightnessHighFill as BrightnessHighFillIcon, BrightnessHighFill as SiBrightnessHighFill };
export default BrightnessHighFill;
export type { BrightnessHighFillProps };
