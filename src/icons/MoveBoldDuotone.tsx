import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoveBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoveBoldDuotone = memo(
  forwardRef<SVGSVGElement, MoveBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="move-bold-duotone" {...props}>
      <path fill="currentColor" d="M13 5.41V11h5.59l1 1-1 1H13v5.59l-1 1-1-1V13H5.41l-1-1 1-1H11V5.41l1-1z" opacity={.4} />
        <path fill="currentColor" d="M13.8 17.8a1 1 0 1 1 1.4 1.4l-2.5 2.5a1 1 0 0 1-1.4 0l-2.5-2.5a1 1 0 1 1 1.4-1.4l1.8 1.79zM4.8 8.8a1 1 0 1 1 1.4 1.4L4.42 12l1.8 1.8a1 1 0 1 1-1.42 1.4l-2.5-2.5a1 1 0 0 1 0-1.4zM17.8 8.8a1 1 0 0 1 1.4 0l2.5 2.5a1 1 0 0 1 0 1.4l-2.5 2.5a1 1 0 1 1-1.4-1.4l1.79-1.8-1.8-1.8a1 1 0 0 1 0-1.4M12 2a1 1 0 0 1 .7.3l2.5 2.5a1 1 0 1 1-1.4 1.4L12 4.42l-1.8 1.8a1 1 0 1 1-1.4-1.42l2.5-2.5.07-.06A1 1 0 0 1 12 2" />
    </IconBase>
  ))
);

MoveBoldDuotone.displayName = 'MoveBoldDuotone';

// Triple export pattern (lucide-react style)
export { MoveBoldDuotone, MoveBoldDuotone as MoveBoldDuotoneIcon, MoveBoldDuotone as SiMoveBoldDuotone };
export default MoveBoldDuotone;
export type { MoveBoldDuotoneProps };
