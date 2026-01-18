import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleSlashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleSlashFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleSlashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.04 20.45a11 11 0 0 1-15.5-15.5zM12 1a11 11 0 0 1 8.45 18.04L4.96 3.54A11 11 0 0 1 12 1" />
        <path fill="currentColor" fillRule="evenodd" d="M19.04 20.45 3.54 4.96q.64-.77 1.42-1.41l15.5 15.49q-.64.77-1.42 1.41" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleSlashFillDuotone.displayName = 'CircleSlashFillDuotone';

export { CircleSlashFillDuotone };
export type { CircleSlashFillDuotoneProps };
