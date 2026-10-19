import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullUpCircleBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronFullUpCircleBold = memo(
  forwardRef<SVGSVGElement, ChevronFullUpCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.01 8.64c.5-.64 1.48-.64 1.98 0l2.99 3.84c.63.82.05 2.02-1 2.02H9.02c-1.04 0-1.62-1.2-.99-2.02z" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullUpCircleBold.displayName = 'ChevronFullUpCircleBold';

// Triple export pattern
export { ChevronFullUpCircleBold, ChevronFullUpCircleBold as ChevronFullUpCircleBoldIcon, ChevronFullUpCircleBold as SiChevronFullUpCircleBold };
export default ChevronFullUpCircleBold;
export type { ChevronFullUpCircleBoldProps };
