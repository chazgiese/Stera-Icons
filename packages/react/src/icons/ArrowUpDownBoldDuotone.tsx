import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowUpDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13 4.41V19.6l-1 1-1-1V4.4l1-1z" opacity={.4} />
        <path fill="currentColor" d="M15.8 16.8a1 1 0 0 1 1.4 1.4l-4.5 4.5a1 1 0 0 1-1.33.08l-.08-.07-4.5-4.5a1 1 0 1 1 1.42-1.42L12 20.6zM12 1a1 1 0 0 1 .7.3l4.5 4.5a1 1 0 1 1-1.4 1.4L12 3.42l-3.8 3.8a1 1 0 1 1-1.4-1.42l4.5-4.5.07-.06A1 1 0 0 1 12 1" />
    </IconBase>
  ))
);

ArrowUpDownBoldDuotone.displayName = 'ArrowUpDownBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowUpDownBoldDuotone, ArrowUpDownBoldDuotone as ArrowUpDownBoldDuotoneIcon, ArrowUpDownBoldDuotone as SiArrowUpDownBoldDuotone };
export type { ArrowUpDownBoldDuotoneProps };
