import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowsLeftRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowsLeftRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowsLeftRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.5 16.75a.75.75 0 0 1 0 1.5H4.31l-.75-.75.75-.75zM20.44 7.5l-.75.75H3.5a.75.75 0 0 1 0-1.5h16.19z" />
        <path fill="currentColor" d="M5.97 12.97a.75.75 0 1 1 1.06 1.06L3.56 17.5l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06zM16.97 2.97c.3-.3.77-.3 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l3.47-3.47-3.47-3.47a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ArrowsLeftRightRegularDuotone.displayName = 'ArrowsLeftRightRegularDuotone';

export { ArrowsLeftRightRegularDuotone };
export type { ArrowsLeftRightRegularDuotoneProps };
