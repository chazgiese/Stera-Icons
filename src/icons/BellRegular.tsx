import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellRegularProps = Omit<IconBaseProps, 'children'>;

const BellRegular = memo(
  forwardRef<SVGSVGElement, BellRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="bell" {...props}>
      <path fillRule="evenodd" d="M12 2.25c3.76 0 6.75 3.2 6.75 7.05v.38c0 1.04.3 2.05.88 2.92l.92 1.37a2.75 2.75 0 0 1-2.29 4.28h-2.08a4.25 4.25 0 0 1-8.36 0H5.74c-2.2 0-3.5-2.45-2.29-4.28l.92-1.37c.57-.87.88-1.88.88-2.92V9.3c0-3.86 2.99-7.05 6.75-7.05m-2.64 16a2.75 2.75 0 0 0 5.28 0zM12 3.75A5.4 5.4 0 0 0 6.75 9.3v.38c0 1.34-.4 2.64-1.13 3.75L4.7 14.8c-.56.83.04 1.94 1.04 1.94h12.52c1 0 1.6-1.11 1.04-1.94l-.92-1.38a6.8 6.8 0 0 1-1.13-3.75V9.3A5.4 5.4 0 0 0 12 3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

BellRegular.displayName = 'BellRegular';

// Triple export pattern (lucide-react style)
export { BellRegular, BellRegular as BellRegularIcon, BellRegular as SiBellRegular };
export default BellRegular;
export type { BellRegularProps };
