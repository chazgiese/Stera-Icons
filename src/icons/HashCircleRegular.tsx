import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashCircleRegularProps = Omit<IconBaseProps, 'children'>;

const HashCircleRegular = memo(
  forwardRef<SVGSVGElement, HashCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="hash-circle" {...props}>
      <path fillRule="evenodd" d="M14 6.75c.41 0 .75.34.75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75v2.5h1.75a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 0 1-1.5 0v-1.75h-2.5v1.75a.75.75 0 0 1-1.5 0v-1.75H7.5a.75.75 0 0 1 0-1.5h1.75v-2.5H7.5a.75.75 0 0 1 0-1.5h1.75V7.5a.75.75 0 0 1 1.5 0v1.75h2.5V7.5c0-.41.34-.75.75-.75m-3.25 6.5h2.5v-2.5h-2.5z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

HashCircleRegular.displayName = 'HashCircleRegular';

// Triple export pattern (lucide-react style)
export { HashCircleRegular, HashCircleRegular as HashCircleRegularIcon, HashCircleRegular as SiHashCircleRegular };
export default HashCircleRegular;
export type { HashCircleRegularProps };
