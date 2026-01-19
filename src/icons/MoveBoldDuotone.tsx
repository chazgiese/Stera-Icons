import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoveBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoveBoldDuotone = memo(
  forwardRef<SVGSVGElement, MoveBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="move-bold-duotone" {...props}>
      <path fill="currentColor" d="M13 4.42V11h6.59l1 1-1 1H13v6.58l-1 1-1-.99V13H4.41l-1-1 1-1h6.6V4.4l.99-.99z" opacity={.4} />
        <path fill="currentColor" d="M13.8 18.8a1 1 0 1 1 1.4 1.4l-2.5 2.5a1 1 0 0 1-1.33.07l-.08-.06-2.5-2.5a1 1 0 1 1 1.42-1.42L12 20.6zM3.8 8.8a1 1 0 1 1 1.4 1.4L3.42 12l1.8 1.8a1 1 0 1 1-1.42 1.4l-2.5-2.5a1 1 0 0 1-.06-1.33l.06-.08zM18.8 8.8a1 1 0 0 1 1.4 0l2.5 2.5.07.07a1 1 0 0 1-.06 1.34l-2.5 2.5a1 1 0 1 1-1.42-1.42L20.6 12l-1.8-1.8a1 1 0 0 1 0-1.4M12 1a1 1 0 0 1 .7.3l2.5 2.5a1 1 0 1 1-1.4 1.4L12 3.42l-1.8 1.8a1 1 0 1 1-1.4-1.42l2.5-2.5.07-.06A1 1 0 0 1 12 1" />
    </IconBase>
  ))
);

MoveBoldDuotone.displayName = 'MoveBoldDuotone';

// Triple export pattern (lucide-react style)
export { MoveBoldDuotone, MoveBoldDuotone as MoveBoldDuotoneIcon, MoveBoldDuotone as SiMoveBoldDuotone };
export type { MoveBoldDuotoneProps };
