import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownRightCircleBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowDownRightCircleBold = memo(
  forwardRef<SVGSVGElement, ArrowDownRightCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.83 8.17c.55 0 1 .45 1 1v5.66q0 .41-.3.7c-.18.2-.44.3-.7.3H9.17c-.55 0-1-.45-1-1s.45-1 1-1h3.24L8.46 9.88c-.39-.4-.39-1.02 0-1.42.4-.39 1.03-.39 1.42 0l3.95 3.95V9.17c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowDownRightCircleBold.displayName = 'ArrowDownRightCircleBold';

// Triple export pattern
export { ArrowDownRightCircleBold, ArrowDownRightCircleBold as ArrowDownRightCircleBoldIcon, ArrowDownRightCircleBold as SiArrowDownRightCircleBold };
export default ArrowDownRightCircleBold;
export type { ArrowDownRightCircleBoldProps };
