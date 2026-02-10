import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HourglassEmptyFillProps = Omit<IconBaseProps, 'children'>;

const HourglassEmptyFill = memo(
  forwardRef<SVGSVGElement, HourglassEmptyFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="hourglass-empty-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.5 3a1 1 0 1 1 0 2H18v1c0 .86 0 1.49-.16 2.07a4 4 0 0 1-.71 1.36c-.38.48-.9.83-1.6 1.32L13.74 12l1.79 1.25c.7.49 1.22.84 1.6 1.32a4 4 0 0 1 .7 1.36c.18.58.17 1.21.17 2.07v1h.5a1 1 0 1 1 0 2h-13a1 1 0 1 1 0-2H6v-1c0-.86 0-1.49.17-2.07a4 4 0 0 1 .7-1.36c.38-.48.9-.83 1.6-1.32L10.26 12l-1.79-1.25h-.01c-.7-.5-1.21-.84-1.59-1.32a4 4 0 0 1-.7-1.36C5.99 7.5 6 6.86 6 6V5h-.5a1 1 0 0 1 0-2zM8.3 16a2 2 0 0 0-.22.5A6 6 0 0 0 8 18v1h8v-1c0-.98 0-1.26-.08-1.5a2 2 0 0 0-.23-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

HourglassEmptyFill.displayName = 'HourglassEmptyFill';

// Triple export pattern (lucide-react style)
export { HourglassEmptyFill, HourglassEmptyFill as HourglassEmptyFillIcon, HourglassEmptyFill as SiHourglassEmptyFill };
export default HourglassEmptyFill;
export type { HourglassEmptyFillProps };
