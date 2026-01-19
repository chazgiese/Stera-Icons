import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SparkleBoldProps = Omit<IconBaseProps, 'children'>;

const SparkleBold = memo(
  forwardRef<SVGSVGElement, SparkleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="sparkle-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a1 1 0 0 1 .96.7l1.09 3.6a7 7 0 0 0 4.66 4.65l3.58 1.1a1 1 0 0 1 0 1.9l-3.58 1.1a7 7 0 0 0-4.66 4.66l-1.1 3.58a1 1 0 0 1-1.9 0l-1.1-3.58a7 7 0 0 0-4.66-4.66l-3.58-1.1a1 1 0 0 1 0-1.9l3.58-1.1A7 7 0 0 0 9.95 5.3l1.1-3.58A1 1 0 0 1 12 1m-.13 4.88a9 9 0 0 1-6 5.99l-.44.13.45.13a9 9 0 0 1 5.99 6l.13.44.13-.45a9 9 0 0 1 6-5.99l.44-.13-.45-.13a9 9 0 0 1-5.99-6L12 5.44z" clipRule="evenodd" />
    </IconBase>
  ))
);

SparkleBold.displayName = 'SparkleBold';

// Triple export pattern (lucide-react style)
export { SparkleBold, SparkleBold as SparkleBoldIcon, SparkleBold as SiSparkleBold };
export type { SparkleBoldProps };
