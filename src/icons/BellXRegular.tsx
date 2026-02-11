import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellXRegularProps = Omit<IconBaseProps, 'children'>;

const BellXRegular = memo(
  forwardRef<SVGSVGElement, BellXRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="bell-x" {...props}>
      <path d="M13.47 7.97a.75.75 0 0 1 1.06 1.06l-1.47 1.47 1.47 1.47a.75.75 0 0 1-1.06 1.06L12 11.56l-1.47 1.47a.75.75 0 0 1-1.06-1.06l1.47-1.47-1.47-1.47a.75.75 0 1 1 1.06-1.06L12 9.44z" />
        <path fillRule="evenodd" d="M12 2.25c3.76 0 6.75 3.2 6.75 7.05v.38c0 1.04.3 2.05.88 2.92l.92 1.37a2.75 2.75 0 0 1-2.29 4.28h-2.08a4.25 4.25 0 0 1-8.36 0H5.74c-2.2 0-3.5-2.45-2.29-4.28l.92-1.37c.57-.87.88-1.88.88-2.92V9.3c0-3.86 2.99-7.05 6.75-7.05m-2.64 16a2.75 2.75 0 0 0 5.28 0zM12 3.75A5.4 5.4 0 0 0 6.75 9.3v.38c0 1.34-.4 2.64-1.13 3.75L4.7 14.8c-.56.83.04 1.94 1.04 1.94h12.52c1 0 1.6-1.11 1.04-1.94l-.92-1.38a6.8 6.8 0 0 1-1.13-3.75V9.3A5.4 5.4 0 0 0 12 3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

BellXRegular.displayName = 'BellXRegular';

// Triple export pattern (lucide-react style)
export { BellXRegular, BellXRegular as BellXRegularIcon, BellXRegular as SiBellXRegular };
export default BellXRegular;
export type { BellXRegularProps };
