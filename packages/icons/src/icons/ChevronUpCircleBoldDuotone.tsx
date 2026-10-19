import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronUpCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronUpCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronUpCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 8.5q.42 0 .7.3l4 4c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L12 10.92l-3.3 3.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l4-4q.28-.28.7-.29" />
    </IconBase>
  ))
);

ChevronUpCircleBoldDuotone.displayName = 'ChevronUpCircleBoldDuotone';

// Triple export pattern
export { ChevronUpCircleBoldDuotone, ChevronUpCircleBoldDuotone as ChevronUpCircleBoldDuotoneIcon, ChevronUpCircleBoldDuotone as SiChevronUpCircleBoldDuotone };
export default ChevronUpCircleBoldDuotone;
export type { ChevronUpCircleBoldDuotoneProps };
