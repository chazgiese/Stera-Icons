import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellOffRegularProps = Omit<IconBaseProps, 'children'>;

const BellOffRegular = memo(
  forwardRef<SVGSVGElement, BellOffRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="bell-off" {...props}>
      <path fillRule="evenodd" d="M3.47 3.47c.3-.3.77-.3 1.06 0l13.5 13.5 2.5 2.5a.75.75 0 1 1-1.06 1.06l-2.28-2.28h-1a4.25 4.25 0 0 1-8.37 0H5.74c-2.2 0-3.5-2.45-2.3-4.28l.93-1.37c.57-.87.88-1.88.88-2.92V9.3q0-1.35.45-2.54L3.47 4.53a.75.75 0 0 1 0-1.06m5.89 14.78a2.75 2.75 0 0 0 5.28 0zM6.9 7.96q-.15.65-.15 1.34v.38c0 1.34-.4 2.64-1.13 3.75L4.7 14.8c-.56.83.04 1.94 1.04 1.94h9.95z" clipRule="evenodd" />
        <path d="M12 2.25c3.76 0 6.75 3.2 6.75 7.05v.38c0 1.04.3 2.05.88 2.92l.92 1.37c.46.69.56 1.47.39 2.17a.75.75 0 0 1-1.46-.35q.13-.5-.18-.98l-.92-1.38a6.8 6.8 0 0 1-1.13-3.75V9.3A5.4 5.4 0 0 0 12 3.75c-1.15 0-2.22.4-3.09 1.06A.75.75 0 0 1 8 3.62a6.5 6.5 0 0 1 4-1.37" />
    </IconBase>
  ))
);

BellOffRegular.displayName = 'BellOffRegular';

// Triple export pattern (lucide-react style)
export { BellOffRegular, BellOffRegular as BellOffRegularIcon, BellOffRegular as SiBellOffRegular };
export default BellOffRegular;
export type { BellOffRegularProps };
