import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PercentCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, PercentCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M14.97 7.97c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-7 7c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06zM14.75 13.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M9.25 7.75c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

PercentCircleRegularDuotone.displayName = 'PercentCircleRegularDuotone';

// Triple export pattern
export { PercentCircleRegularDuotone, PercentCircleRegularDuotone as PercentCircleRegularDuotoneIcon, PercentCircleRegularDuotone as SiPercentCircleRegularDuotone };
export default PercentCircleRegularDuotone;
export type { PercentCircleRegularDuotoneProps };
