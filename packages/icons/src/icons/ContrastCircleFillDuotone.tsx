import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContrastCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, ContrastCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25V16.5c-1.2 0-2.34-.47-3.18-1.32C7.97 14.34 7.5 13.2 7.5 12s.47-2.34 1.32-3.18C9.66 7.97 10.8 7.5 12 7.5zm0 14.75c2.49 0 4.5-2.01 4.5-4.5S14.49 7.5 12 7.5z" clipRule="evenodd" opacity={.4} />
        <path d="M12 7.5c-1.2 0-2.34.47-3.18 1.32C7.97 9.66 7.5 10.8 7.5 12s.47 2.34 1.32 3.18c.84.85 1.99 1.32 3.18 1.32v5.75C6.34 22.25 1.75 17.66 1.75 12S6.34 1.75 12 1.75zM12 7.5c2.49 0 4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5z" />
    </IconBase>
  ))
);

ContrastCircleFillDuotone.displayName = 'ContrastCircleFillDuotone';

// Triple export pattern
export { ContrastCircleFillDuotone, ContrastCircleFillDuotone as ContrastCircleFillDuotoneIcon, ContrastCircleFillDuotone as SiContrastCircleFillDuotone };
export default ContrastCircleFillDuotone;
export type { ContrastCircleFillDuotoneProps };
