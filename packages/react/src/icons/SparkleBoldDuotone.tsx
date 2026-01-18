import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SparkleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparkleBoldDuotone = memo(
  forwardRef<SVGSVGElement, SparkleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12.8 22.6a1 1 0 0 0 .16-.9L12 18.58l.14-.45a9 9 0 0 1 5.99-5.99l.44-.13-.45-.13a9 9 0 0 1-5.98-6L12 5.44l.96-3.14a1 1 0 0 0 0-.58l1.09 3.58a7 7 0 0 0 4.66 4.66l3.58 1.1a1 1 0 0 1 0 1.9l-3.58 1.1a7 7 0 0 0-4.66 4.66l-1.1 3.58a1 1 0 0 1-.15.3" opacity={.4} />
        <path fill="currentColor" d="M11.04 1.71a1 1 0 0 1 1.92.58l-1.1 3.59a9 9 0 0 1-5.98 5.99l-.45.13.45.14a9 9 0 0 1 5.99 5.98l1.09 3.59a1 1 0 0 1-1.92.58l-1.09-3.58a7 7 0 0 0-4.66-4.66l-3.58-1.1a1 1 0 0 1 0-1.9l3.58-1.1A7 7 0 0 0 9.95 5.3z" />
    </IconBase>
  ))
);

SparkleBoldDuotone.displayName = 'SparkleBoldDuotone';

export { SparkleBoldDuotone };
export type { SparkleBoldDuotoneProps };
