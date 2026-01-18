import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleSlashFillProps = Omit<IconBaseProps, 'children'>;

const CircleSlashFill = memo(
  forwardRef<SVGSVGElement, CircleSlashFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M19.04 20.45A11 11 0 0 1 3.54 4.96zM4.96 3.55a11 11 0 0 1 15.5 15.49z" />
    </IconBase>
  ))
);

CircleSlashFill.displayName = 'CircleSlashFill';

export { CircleSlashFill };
export type { CircleSlashFillProps };
