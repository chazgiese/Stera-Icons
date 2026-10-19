import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpLeftCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M14.83 8.17c.55 0 1 .45 1 1s-.45 1-1 1h-3.24l3.95 3.95c.39.4.39 1.03 0 1.42-.4.39-1.03.39-1.42 0l-3.95-3.95v3.24c0 .55-.45 1-1 1s-1-.45-1-1V9.17q0-.41.3-.7c.18-.2.44-.3.7-.3z" />
    </IconBase>
  ))
);

ArrowUpLeftCircleBoldDuotone.displayName = 'ArrowUpLeftCircleBoldDuotone';

// Triple export pattern
export { ArrowUpLeftCircleBoldDuotone, ArrowUpLeftCircleBoldDuotone as ArrowUpLeftCircleBoldDuotoneIcon, ArrowUpLeftCircleBoldDuotone as SiArrowUpLeftCircleBoldDuotone };
export default ArrowUpLeftCircleBoldDuotone;
export type { ArrowUpLeftCircleBoldDuotoneProps };
