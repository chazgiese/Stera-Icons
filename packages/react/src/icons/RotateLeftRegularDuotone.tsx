import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotateLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, RotateLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 4.25A8.75 8.75 0 1 1 3.25 13a.75.75 0 0 1 1.5 0A7.25 7.25 0 1 0 12 5.75H8.81L8.06 5l.75-.75z" opacity={.4} />
        <path fill="currentColor" d="M10.47.47a.75.75 0 1 1 1.06 1.06L8.06 5l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06z" />
    </IconBase>
  ))
);

RotateLeftRegularDuotone.displayName = 'RotateLeftRegularDuotone';

export { RotateLeftRegularDuotone };
export type { RotateLeftRegularDuotoneProps };
