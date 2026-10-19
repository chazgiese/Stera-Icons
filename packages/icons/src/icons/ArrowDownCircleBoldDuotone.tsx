import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 7c.55 0 1 .45 1 1v5.59l2.3-2.3c.38-.39 1.02-.39 1.4 0 .4.4.4 1.03 0 1.42l-4 4q-.28.28-.7.29t-.7-.3l-4-4c-.4-.38-.4-1.02 0-1.4.38-.4 1.02-.4 1.4 0l2.3 2.29V8c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

ArrowDownCircleBoldDuotone.displayName = 'ArrowDownCircleBoldDuotone';

// Triple export pattern
export { ArrowDownCircleBoldDuotone, ArrowDownCircleBoldDuotone as ArrowDownCircleBoldDuotoneIcon, ArrowDownCircleBoldDuotone as SiArrowDownCircleBoldDuotone };
export default ArrowDownCircleBoldDuotone;
export type { ArrowDownCircleBoldDuotoneProps };
