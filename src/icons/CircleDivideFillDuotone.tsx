import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleDivideFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-fill-duotone" {...props}>
      <path d="M11 22.95a11 11 0 0 1 0-21.9zM13 1.05a11 11 0 0 1 0 21.9z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11 22.96V1.04a11 11 0 0 1 2 0v21.92a11 11 0 0 1-2 0" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideFillDuotone.displayName = 'CircleDivideFillDuotone';

// Triple export pattern (lucide-react style)
export { CircleDivideFillDuotone, CircleDivideFillDuotone as CircleDivideFillDuotoneIcon, CircleDivideFillDuotone as SiCircleDivideFillDuotone };
export default CircleDivideFillDuotone;
export type { CircleDivideFillDuotoneProps };
