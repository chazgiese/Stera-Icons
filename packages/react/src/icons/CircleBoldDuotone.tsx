import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3 12a9 9 0 1 0 18 0h2a11 11 0 0 1-22 0z" opacity={.4} />
        <path fill="currentColor" d="M12 1a11 11 0 0 1 11 11h-2a9 9 0 1 0-18 0H1A11 11 0 0 1 12 1" />
    </IconBase>
  ))
);

CircleBoldDuotone.displayName = 'CircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { CircleBoldDuotone, CircleBoldDuotone as CircleBoldDuotoneIcon, CircleBoldDuotone as SiCircleBoldDuotone };
export type { CircleBoldDuotoneProps };
