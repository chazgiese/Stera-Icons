import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BrightnessHighBoldProps = Omit<IconBaseProps, 'children'>;

const BrightnessHighBold = memo(
  forwardRef<SVGSVGElement, BrightnessHighBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="brightness-high-bold" {...props}>
      <path fill="currentColor" d="M12 18.5a1 1 0 0 1 1 1V22a1 1 0 0 1-2 0v-2.5a1 1 0 0 1 1-1M5.99 16.6A1 1 0 1 1 7.4 18l-1.77 1.77a1 1 0 0 1-1.41-1.41zM16.6 16.6a1 1 0 0 1 1.41 0l1.77 1.76a1 1 0 0 1-1.41 1.41l-1.77-1.76a1 1 0 0 1 0-1.42" />
        <path fill="currentColor" fillRule="evenodd" d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
        <path fill="currentColor" d="M4.5 11a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2zM22 11a1 1 0 1 1 0 2h-2.5a1 1 0 0 1 0-2zM4.23 4.22a1 1 0 0 1 1.41 0l1.77 1.77A1 1 0 1 1 5.99 7.4L4.23 5.63a1 1 0 0 1 0-1.41M18.36 4.22a1 1 0 1 1 1.41 1.41L18.01 7.4a1 1 0 0 1-1.42-1.41zM12 1a1 1 0 0 1 1 1v2.5a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

BrightnessHighBold.displayName = 'BrightnessHighBold';

// Triple export pattern (lucide-react style)
export { BrightnessHighBold, BrightnessHighBold as BrightnessHighBoldIcon, BrightnessHighBold as SiBrightnessHighBold };
export type { BrightnessHighBoldProps };
