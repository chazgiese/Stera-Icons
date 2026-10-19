import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.13 22.21C5.87 21.77 1.74 17.37 1.74 12s4.12-9.77 9.38-10.21zM12.88 1.79c5.25.44 9.37 4.84 9.37 10.21s-4.12 9.77-9.37 10.21z" opacity={0.4} />
        <path d="M12 1.75q.45 0 .88.04V22.2q-.45.03-.88.04-.45 0-.87-.04V1.79q.43-.04.87-.04" />
    </IconBase>
  ))
);

CircleDivideFillDuotone.displayName = 'CircleDivideFillDuotone';

// Triple export pattern
export { CircleDivideFillDuotone, CircleDivideFillDuotone as CircleDivideFillDuotoneIcon, CircleDivideFillDuotone as SiCircleDivideFillDuotone };
export default CircleDivideFillDuotone;
export type { CircleDivideFillDuotoneProps };
