import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleDotsBoldProps = Omit<IconBaseProps, 'children'>;

const CircleDotsBold = memo(
  forwardRef<SVGSVGElement, CircleDotsBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-dots-bold" {...props}>
      <path fill="currentColor" d="M12 19a2 2 0 0 1 0 4 2 2 0 0 1 0-4M4.22 16.95a2 2 0 1 1 0 2.83 2 2 0 0 1 0-2.83M16.95 16.95a2 2 0 0 1 2.83 2.82v.01a2 2 0 1 1-2.83-2.83M3 10A2 2 0 1 1 1 12v-.02c0-1.1.9-2 2-2M21 10a2 2 0 1 1-2 2c0-1.1.9-2 2-2M4.23 4.22a2 2 0 1 1 2.82 2.83 2 2 0 0 1-2.83-2.82zM16.95 4.22a2 2 0 0 1 2.82 0h.01a2 2 0 1 1-2.83 2.83 2 2 0 0 1 0-2.83M12 1a2 2 0 0 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

CircleDotsBold.displayName = 'CircleDotsBold';

// Triple export pattern (lucide-react style)
export { CircleDotsBold, CircleDotsBold as CircleDotsBoldIcon, CircleDotsBold as SiCircleDotsBold };
export type { CircleDotsBoldProps };
