import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PilcrowRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PilcrowRegularDuotone = memo(
  forwardRef<SVGSVGElement, PilcrowRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.75 20a.75.75 0 0 1-1.5 0V4.75h1.5zM17.75 20a.75.75 0 0 1-1.5 0V4.75h1.5z" />
        <path fill="currentColor" d="M19 3.25a.75.75 0 0 1 0 1.5h-9a4.25 4.25 0 0 0 0 8.5h2.25v1.5H10a5.75 5.75 0 0 1 0-11.5z" />
    </IconBase>
  ))
);

PilcrowRegularDuotone.displayName = 'PilcrowRegularDuotone';

export { PilcrowRegularDuotone };
export type { PilcrowRegularDuotoneProps };
