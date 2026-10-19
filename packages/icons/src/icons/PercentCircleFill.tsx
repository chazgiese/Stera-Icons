import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentCircleFillProps = Omit<IconBaseProps, 'children'>;

const PercentCircleFill = memo(
  forwardRef<SVGSVGElement, PercentCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m4.12 6.13c-.34-.34-.9-.34-1.24 0l-7 7c-.34.34-.34.9 0 1.24s.9.34 1.24 0l7-7c.34-.34.34-.9 0-1.24m-1.37 5.37c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m-5.5-5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

PercentCircleFill.displayName = 'PercentCircleFill';

// Triple export pattern
export { PercentCircleFill, PercentCircleFill as PercentCircleFillIcon, PercentCircleFill as SiPercentCircleFill };
export default PercentCircleFill;
export type { PercentCircleFillProps };
