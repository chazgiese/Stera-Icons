import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleSlashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleSlashFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleSlashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-slash-fill-duotone" {...props}>
      <path d="M19.04 20.45a11 11 0 0 1-15.5-15.5zM12 1a11 11 0 0 1 8.45 18.04L4.96 3.54A11 11 0 0 1 12 1" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M19.04 20.45 3.54 4.96q.64-.77 1.42-1.41l15.5 15.49q-.64.77-1.42 1.41" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleSlashFillDuotone.displayName = 'CircleSlashFillDuotone';

// Triple export pattern (lucide-react style)
export { CircleSlashFillDuotone, CircleSlashFillDuotone as CircleSlashFillDuotoneIcon, CircleSlashFillDuotone as SiCircleSlashFillDuotone };
export default CircleSlashFillDuotone;
export type { CircleSlashFillDuotoneProps };
