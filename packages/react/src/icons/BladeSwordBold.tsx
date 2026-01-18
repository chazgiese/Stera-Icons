import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BladeSwordBoldProps = Omit<IconBaseProps, 'children'>;

const BladeSwordBold = memo(
  forwardRef<SVGSVGElement, BladeSwordBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M2.3 2.3a1 1 0 0 1 .94-.27l4 1a1 1 0 0 1 .47.26L17 12.6l1.3-1.3a1 1 0 1 1 1.4 1.42L18 14.4v2.18l2.04 2.04 1.22.4q.28.1.49.3l.28.29c.49.48.49 1.28 0 1.76l-.65.65c-.45.46-1.18.49-1.67.09l-.1-.09-.27-.28q-.16-.15-.25-.36l-.06-.13-.4-1.22L16.59 18H14.4l-1.7 1.7a1 1 0 0 1-1.42-1.4l1.3-1.3-9.3-9.3a1 1 0 0 1-.22-.33l-.04-.13-1-4a1 1 0 0 1 .26-.95m2.6 4.19 9.1 9.1L15.59 14l-9.1-9.1-2.12-.53z" clipRule="evenodd" />
    </IconBase>
  ))
);

BladeSwordBold.displayName = 'BladeSwordBold';

// Triple export pattern (lucide-react style)
export { BladeSwordBold, BladeSwordBold as BladeSwordBoldIcon, BladeSwordBold as SiBladeSwordBold };
export type { BladeSwordBoldProps };
