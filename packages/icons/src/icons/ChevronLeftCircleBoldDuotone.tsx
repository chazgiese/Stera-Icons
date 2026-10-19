import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronLeftCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronLeftCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronLeftCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M12.8 7.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L10.92 12l3.3 3.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-4-4q-.28-.28-.29-.7t.3-.7z" />
    </IconBase>
  ))
);

ChevronLeftCircleBoldDuotone.displayName = 'ChevronLeftCircleBoldDuotone';

// Triple export pattern
export { ChevronLeftCircleBoldDuotone, ChevronLeftCircleBoldDuotone as ChevronLeftCircleBoldDuotoneIcon, ChevronLeftCircleBoldDuotone as SiChevronLeftCircleBoldDuotone };
export default ChevronLeftCircleBoldDuotone;
export type { ChevronLeftCircleBoldDuotoneProps };
