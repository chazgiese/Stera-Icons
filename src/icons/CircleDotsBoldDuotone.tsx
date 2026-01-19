import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleDotsBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDotsBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleDotsBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-dots-bold-duotone" {...props}>
      <path d="M4.22 16.95a2 2 0 1 1 0 2.83 2 2 0 0 1 0-2.83M16.95 16.95a2 2 0 0 1 2.83 2.82v.01a2 2 0 1 1-2.83-2.83M4.23 4.22a2 2 0 1 1 2.82 2.83 2 2 0 0 1-2.83-2.82zM16.95 4.22a2 2 0 0 1 2.82 0h.01a2 2 0 1 1-2.83 2.83 2 2 0 0 1 0-2.83" opacity={0.4} />
        <path fill="currentColor" d="M12 19a2 2 0 0 1 0 4 2 2 0 0 1 0-4M3 10A2 2 0 1 1 1 12v-.02c0-1.1.9-2 2-2M21 10a2 2 0 1 1-2 2c0-1.1.9-2 2-2M12 1a2 2 0 0 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

CircleDotsBoldDuotone.displayName = 'CircleDotsBoldDuotone';

// Triple export pattern (lucide-react style)
export { CircleDotsBoldDuotone, CircleDotsBoldDuotone as CircleDotsBoldDuotoneIcon, CircleDotsBoldDuotone as SiCircleDotsBoldDuotone };
export type { CircleDotsBoldDuotoneProps };
