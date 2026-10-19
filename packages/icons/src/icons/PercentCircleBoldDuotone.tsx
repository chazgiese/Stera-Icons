import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PercentCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, PercentCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M14.8 7.8c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-7 7c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4zM14.75 13.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M9.25 7.75c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

PercentCircleBoldDuotone.displayName = 'PercentCircleBoldDuotone';

// Triple export pattern
export { PercentCircleBoldDuotone, PercentCircleBoldDuotone as PercentCircleBoldDuotoneIcon, PercentCircleBoldDuotone as SiPercentCircleBoldDuotone };
export default PercentCircleBoldDuotone;
export type { PercentCircleBoldDuotoneProps };
