import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrightnessLowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrightnessLowBoldDuotone = memo(
  forwardRef<SVGSVGElement, BrightnessLowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brightness-low-bold-duotone" {...props}>
      <path d="M13 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 19.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M18.01 7.4A1 1 0 1 1 16.6 6 1 1 0 0 1 18 7.4M7.4 18.01A1 1 0 1 1 6 16.6 1 1 0 0 1 7.4 18M19.5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2M4.5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2M16.6 18.01A1 1 0 1 1 18 16.6 1 1 0 0 1 16.6 18M5.99 7.4A1 1 0 1 1 7.4 6 1 1 0 0 1 6 7.4" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

BrightnessLowBoldDuotone.displayName = 'BrightnessLowBoldDuotone';

// Triple export pattern (lucide-react style)
export { BrightnessLowBoldDuotone, BrightnessLowBoldDuotone as BrightnessLowBoldDuotoneIcon, BrightnessLowBoldDuotone as SiBrightnessLowBoldDuotone };
export default BrightnessLowBoldDuotone;
export type { BrightnessLowBoldDuotoneProps };
