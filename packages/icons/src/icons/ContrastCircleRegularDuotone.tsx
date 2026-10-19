import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContrastCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ContrastCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 3.25c4.83 0 8.75 3.92 8.75 8.75s-3.92 8.75-8.75 8.75V16.5c-1.2 0-2.34-.47-3.18-1.32C7.97 14.34 7.5 13.2 7.5 12s.47-2.34 1.32-3.18C9.66 7.97 10.8 7.5 12 7.5zm0 13.25c2.49 0 4.5-2.01 4.5-4.5S14.49 7.5 12 7.5z" clipRule="evenodd" opacity={.4} />
        <path d="M12 7.5c2.49 0 4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5z" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 5.75c-1.2 0-2.34.47-3.18 1.32C7.97 9.66 7.5 10.8 7.5 12s.47 2.34 1.32 3.18c.84.85 1.99 1.32 3.18 1.32v4.25c4.83 0 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastCircleRegularDuotone.displayName = 'ContrastCircleRegularDuotone';

// Triple export pattern
export { ContrastCircleRegularDuotone, ContrastCircleRegularDuotone as ContrastCircleRegularDuotoneIcon, ContrastCircleRegularDuotone as SiContrastCircleRegularDuotone };
export default ContrastCircleRegularDuotone;
export type { ContrastCircleRegularDuotoneProps };
