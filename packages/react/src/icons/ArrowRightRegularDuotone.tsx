import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="m17.94 12-.75.75H5a.75.75 0 0 1 0-1.5h12.19z" opacity={.4} />
        <path fill="currentColor" d="M11.47 4.47c.3-.3.77-.3 1.06 0l7 7c.3.3.3.77 0 1.06l-7 7a.75.75 0 1 1-1.06-1.06L17.94 12l-6.47-6.47a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ArrowRightRegularDuotone.displayName = 'ArrowRightRegularDuotone';

export { ArrowRightRegularDuotone };
export type { ArrowRightRegularDuotoneProps };
