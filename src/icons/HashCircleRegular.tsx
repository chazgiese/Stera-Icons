import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HashCircleRegularProps = Omit<IconBaseProps, 'children'>;

const HashCircleRegular = memo(
  forwardRef<SVGSVGElement, HashCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="hash-circle" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14 6.25c.41 0 .75.34.75.75v2.25H17a.75.75 0 0 1 0 1.5h-2.25v2.5H17a.75.75 0 0 1 0 1.5h-2.25V17a.75.75 0 0 1-1.5 0v-2.25h-2.5V17a.75.75 0 0 1-1.5 0v-2.25H7a.75.75 0 0 1 0-1.5h2.25v-2.5H7a.75.75 0 0 1 0-1.5h2.25V7a.75.75 0 0 1 1.5 0v2.25h2.5V7c0-.41.34-.75.75-.75m-3.25 7h2.5v-2.5h-2.5z" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

HashCircleRegular.displayName = 'HashCircleRegular';

// Triple export pattern (lucide-react style)
export { HashCircleRegular, HashCircleRegular as HashCircleRegularIcon, HashCircleRegular as SiHashCircleRegular };
export default HashCircleRegular;
export type { HashCircleRegularProps };
