import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleSlashBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleSlashBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleSlashBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.97 6.38a9 9 0 0 0 12.65 12.65l1.42 1.42a11 11 0 0 1-15.5-15.5zM12 1a11 11 0 0 1 8.45 18.04l-1.42-1.42A9 9 0 0 0 6.38 4.97L4.96 3.55A11 11 0 0 1 12 1" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M19.04 20.45 3.54 4.96q.64-.77 1.42-1.41l15.5 15.49q-.64.77-1.42 1.41" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleSlashBoldDuotone.displayName = 'CircleSlashBoldDuotone';

// Triple export pattern (lucide-react style)
export { CircleSlashBoldDuotone, CircleSlashBoldDuotone as CircleSlashBoldDuotoneIcon, CircleSlashBoldDuotone as SiCircleSlashBoldDuotone };
export type { CircleSlashBoldDuotoneProps };
