import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BrightnessLowFillProps = Omit<IconBaseProps, 'children'>;

const BrightnessLowFill = memo(
  forwardRef<SVGSVGElement, BrightnessLowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 18.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M5.99 16.6A1 1 0 1 1 7.4 18 1 1 0 0 1 6 16.6M16.6 16.6A1 1 0 1 1 18 18a1 1 0 0 1-1.41-1.41M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10M4.5 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2M19.5 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2M5.99 5.99A1 1 0 1 1 7.4 7.4 1 1 0 0 1 6 5.99M16.6 5.99A1 1 0 1 1 18 7.4 1 1 0 0 1 16.6 6M12 3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
    </IconBase>
  ))
);

BrightnessLowFill.displayName = 'BrightnessLowFill';

export { BrightnessLowFill };
export type { BrightnessLowFillProps };
