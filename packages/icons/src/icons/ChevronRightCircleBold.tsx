import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronRightCircleBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronRightCircleBold = memo(
  forwardRef<SVGSVGElement, ChevronRightCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.8 7.3c.38-.4 1.02-.4 1.4 0l4 4q.3.28.3.7t-.3.7l-4 4c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l3.29-3.3-3.3-3.3c-.39-.38-.39-1.02 0-1.4" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronRightCircleBold.displayName = 'ChevronRightCircleBold';

// Triple export pattern
export { ChevronRightCircleBold, ChevronRightCircleBold as ChevronRightCircleBoldIcon, ChevronRightCircleBold as SiChevronRightCircleBold };
export default ChevronRightCircleBold;
export type { ChevronRightCircleBoldProps };
