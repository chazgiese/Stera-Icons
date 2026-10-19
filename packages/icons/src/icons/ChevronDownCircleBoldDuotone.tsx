import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronDownCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronDownCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronDownCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M15.3 9.8c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-4 4q-.28.3-.7.3t-.7-.3l-4-4c-.4-.38-.4-1.02 0-1.4.38-.4 1.02-.4 1.4 0l3.3 3.29z" />
    </IconBase>
  ))
);

ChevronDownCircleBoldDuotone.displayName = 'ChevronDownCircleBoldDuotone';

// Triple export pattern
export { ChevronDownCircleBoldDuotone, ChevronDownCircleBoldDuotone as ChevronDownCircleBoldDuotoneIcon, ChevronDownCircleBoldDuotone as SiChevronDownCircleBoldDuotone };
export default ChevronDownCircleBoldDuotone;
export type { ChevronDownCircleBoldDuotoneProps };
