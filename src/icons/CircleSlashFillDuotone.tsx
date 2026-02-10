import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleSlashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleSlashFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleSlashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-slash-fill-duotone" {...props}>
      <path d="M18.33 19.74A10 10 0 0 1 4.26 5.67zM5.67 4.26a10 10 0 0 1 14.07 14.07z" opacity={0.4} />
        <path fill="currentColor" d="M19.74 18.33a10 10 0 0 1-1.41 1.41L4.26 5.67a10 10 0 0 1 1.41-1.41z" />
    </IconBase>
  ))
);

CircleSlashFillDuotone.displayName = 'CircleSlashFillDuotone';

// Triple export pattern (lucide-react style)
export { CircleSlashFillDuotone, CircleSlashFillDuotone as CircleSlashFillDuotoneIcon, CircleSlashFillDuotone as SiCircleSlashFillDuotone };
export default CircleSlashFillDuotone;
export type { CircleSlashFillDuotoneProps };
