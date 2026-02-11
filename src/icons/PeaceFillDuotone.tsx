import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PeaceFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PeaceFillDuotone = memo(
  forwardRef<SVGSVGElement, PeaceFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="peace-fill-duotone" {...props}>
      <path d="M13 2.05a10 10 0 1 1-2 0v9.54l-6.74 6.74q.64.78 1.41 1.41L11 14.41v7.54a10 10 0 0 0 2 0V14.4l5.33 5.33q.78-.64 1.41-1.41L13 11.59z" opacity={.4} />
        <path d="M12 2q.5 0 1 .05v9.54l6.74 6.74q-.64.78-1.41 1.41L13 14.41v7.54a10 10 0 0 1-2 0V14.4l-5.33 5.33q-.78-.64-1.41-1.41L11 11.59V2.05Q11.5 2 12 2" />
    </IconBase>
  ))
);

PeaceFillDuotone.displayName = 'PeaceFillDuotone';

// Triple export pattern (lucide-react style)
export { PeaceFillDuotone, PeaceFillDuotone as PeaceFillDuotoneIcon, PeaceFillDuotone as SiPeaceFillDuotone };
export default PeaceFillDuotone;
export type { PeaceFillDuotoneProps };
