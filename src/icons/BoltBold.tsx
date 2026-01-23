import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoltBoldProps = Omit<IconBaseProps, 'children'>;

const BoltBold = memo(
  forwardRef<SVGSVGElement, BoltBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="bolt-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M13.91 2c1.24 0 2.08-.01 2.86.23a5 5 0 0 1 1.77 1c.6.53 1.04 1.25 1.68 2.31l1.6 2.6c.7 1.15 1.18 1.92 1.37 2.77a5 5 0 0 1 0 2.18c-.19.85-.67 1.62-1.38 2.77l-1.59 2.6c-.64 1.06-1.07 1.78-1.68 2.31a5 5 0 0 1-1.77 1c-.78.24-1.62.23-2.86.23H10.1c-1.24 0-2.08.01-2.86-.23a5 5 0 0 1-1.77-1c-.6-.53-1.04-1.25-1.68-2.31l-1.6-2.6C1.49 14.7 1 13.94.82 13.09a5 5 0 0 1 0-2.18c.19-.85.67-1.62 1.38-2.77l1.59-2.6c.64-1.06 1.07-1.78 1.68-2.31a5 5 0 0 1 1.77-1C8.01 2 8.85 2 10.1 2zM10.1 4c-1.37 0-1.84.01-2.25.14a3 3 0 0 0-1.06.6c-.33.28-.58.67-1.3 1.84L3.9 9.18c-.77 1.28-1.03 1.72-1.13 2.17a3 3 0 0 0 0 1.3c.1.45.36.9 1.13 2.17l1.6 2.6a8 8 0 0 0 1.29 1.84 3 3 0 0 0 1.06.6c.4.13.88.14 2.25.14h3.82c1.38 0 1.85-.01 2.25-.14a3 3 0 0 0 1.06-.6c.33-.28.58-.67 1.3-1.84l1.59-2.6c.78-1.28 1.03-1.72 1.13-2.17a3 3 0 0 0 0-1.3c-.1-.45-.35-.9-1.13-2.17l-1.6-2.6a8 8 0 0 0-1.29-1.84 3 3 0 0 0-1.06-.6c-.4-.13-.87-.14-2.25-.14z" clipRule="evenodd" />
    </IconBase>
  ))
);

BoltBold.displayName = 'BoltBold';

// Triple export pattern (lucide-react style)
export { BoltBold, BoltBold as BoltBoldIcon, BoltBold as SiBoltBold };
export default BoltBold;
export type { BoltBoldProps };
