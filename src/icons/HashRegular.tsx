import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HashRegularProps = Omit<IconBaseProps, 'children'>;

const HashRegular = memo(
  forwardRef<SVGSVGElement, HashRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="hash" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15 2.25c.41 0 .75.34.75.75v5.25H21a.75.75 0 0 1 0 1.5h-5.25v4.5H21a.75.75 0 0 1 0 1.5h-5.25V21a.75.75 0 0 1-1.5 0v-5.25h-4.5V21a.75.75 0 0 1-1.5 0v-5.25H3a.75.75 0 0 1 0-1.5h5.25v-4.5H3a.75.75 0 0 1 0-1.5h5.25V3a.75.75 0 0 1 1.5 0v5.25h4.5V3c0-.41.34-.75.75-.75m-5.25 12h4.5v-4.5h-4.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

HashRegular.displayName = 'HashRegular';

// Triple export pattern (lucide-react style)
export { HashRegular, HashRegular as HashRegularIcon, HashRegular as SiHashRegular };
export type { HashRegularProps };
