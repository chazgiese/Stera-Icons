import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HeartBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HeartBoldDuotone = memo(
  forwardRef<SVGSVGElement, HeartBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="heart-bold-duotone" {...props}>
      <path d="M12.9 7.45a1 1 0 0 0 .01-.85A6 6 0 0 0 12 5.2a5.7 5.7 0 0 1 4.29-1.95A5.73 5.73 0 0 1 22 9a8.6 8.6 0 0 1-1.73 4.87c-2.25 3.17-5.38 5.34-7.64 7.16l-.03.02.18-.17a1 1 0 0 0-.15-1.4l-.63-.5c2.26-1.79 4.77-3.64 6.64-6.27A6.6 6.6 0 0 0 20 9a3.71 3.71 0 0 0-7.09-1.56" opacity={.4} />
        <path d="M7.71 3.25c2.32 0 4.3 1.38 5.2 3.35a1 1 0 0 1-1.82.83A3.71 3.71 0 0 0 4 9c0 1.71.93 3.1 1.36 3.71 2.04 2.88 4.86 4.82 7.27 6.76a1 1 0 0 1-1.26 1.56c-2.26-1.82-5.4-4-7.64-7.16A8.6 8.6 0 0 1 2 9a5.73 5.73 0 0 1 5.71-5.75" />
    </IconBase>
  ))
);

HeartBoldDuotone.displayName = 'HeartBoldDuotone';

// Triple export pattern (lucide-react style)
export { HeartBoldDuotone, HeartBoldDuotone as HeartBoldDuotoneIcon, HeartBoldDuotone as SiHeartBoldDuotone };
export default HeartBoldDuotone;
export type { HeartBoldDuotoneProps };
