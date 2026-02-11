import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronRightRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronRightRegular = memo(
  forwardRef<SVGSVGElement, ChevronRightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-right" {...props}>
      <path d="M8.47 4.47c.3-.3.77-.3 1.06 0l7 7c.3.3.3.77 0 1.06l-7 7a.75.75 0 1 1-1.06-1.06L14.94 12 8.47 5.53a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ChevronRightRegular.displayName = 'ChevronRightRegular';

// Triple export pattern (lucide-react style)
export { ChevronRightRegular, ChevronRightRegular as ChevronRightRegularIcon, ChevronRightRegular as SiChevronRightRegular };
export default ChevronRightRegular;
export type { ChevronRightRegularProps };
