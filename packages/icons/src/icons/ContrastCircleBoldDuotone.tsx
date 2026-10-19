import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContrastCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, ContrastCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 3.5c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5v-4c-1.2 0-2.34-.47-3.18-1.32C7.97 14.34 7.5 13.2 7.5 12s.47-2.34 1.32-3.18C9.66 7.97 10.8 7.5 12 7.5zm0 13c2.49 0 4.5-2.01 4.5-4.5S14.49 7.5 12 7.5z" clipRule="evenodd" opacity={.4} />
        <path d="M12 7.5c2.49 0 4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5z" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 6c-1.2 0-2.34.47-3.18 1.32C7.97 9.66 7.5 10.8 7.5 12s.47 2.34 1.32 3.18c.84.85 1.99 1.32 3.18 1.32v4c4.7 0 8.5-3.8 8.5-8.5S16.7 3.5 12 3.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastCircleBoldDuotone.displayName = 'ContrastCircleBoldDuotone';

// Triple export pattern
export { ContrastCircleBoldDuotone, ContrastCircleBoldDuotone as ContrastCircleBoldDuotoneIcon, ContrastCircleBoldDuotone as SiContrastCircleBoldDuotone };
export default ContrastCircleBoldDuotone;
export type { ContrastCircleBoldDuotoneProps };
