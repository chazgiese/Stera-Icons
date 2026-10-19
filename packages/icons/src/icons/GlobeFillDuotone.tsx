import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GlobeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GlobeFillDuotone = memo(
  forwardRef<SVGSVGElement, GlobeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.5 12.75c.13 2.76 1.06 5.49 2.76 7.83-3.76-.76-6.64-3.93-6.98-7.83zM20.72 12.75c-.34 3.9-3.22 7.07-6.98 7.83 1.7-2.34 2.63-5.07 2.77-7.83zM15 12.75c-.15 2.72-1.15 5.4-3 7.62-1.85-2.22-2.85-4.9-3-7.62zM10.26 3.42c-1.7 2.34-2.63 5.07-2.77 7.83H3.3c.33-3.9 3.2-7.07 6.97-7.83M12 3.63c1.85 2.22 2.85 4.9 3 7.62H9c.15-2.72 1.15-5.4 3-7.62M13.74 3.42c3.76.76 6.64 3.93 6.98 7.83H16.5c-.14-2.76-1.07-5.49-2.77-7.83" opacity={0.4} />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m-8.72 11c.34 3.9 3.22 7.07 6.98 7.83-1.7-2.34-2.63-5.07-2.77-7.83zm13.23 0c-.14 2.76-1.07 5.49-2.77 7.83 3.76-.76 6.64-3.93 6.98-7.83zm-7.51 0c.15 2.72 1.15 5.4 3 7.62 1.85-2.22 2.85-4.9 3-7.62zm1.26-9.33c-3.76.76-6.64 3.93-6.98 7.83H7.5c.14-2.76 1.07-5.49 2.77-7.83m1.74.2c-1.85 2.23-2.85 4.9-3 7.63h6c-.15-2.72-1.15-5.4-3-7.62m1.74-.2c1.7 2.34 2.63 5.07 2.77 7.83h4.2c-.33-3.9-3.21-7.07-6.97-7.83" clipRule="evenodd" />
    </IconBase>
  ))
);

GlobeFillDuotone.displayName = 'GlobeFillDuotone';

// Triple export pattern
export { GlobeFillDuotone, GlobeFillDuotone as GlobeFillDuotoneIcon, GlobeFillDuotone as SiGlobeFillDuotone };
export default GlobeFillDuotone;
export type { GlobeFillDuotoneProps };
