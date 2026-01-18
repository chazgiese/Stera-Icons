import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LinkOffBoldProps = Omit<IconBaseProps, 'children'>;

const LinkOffBold = memo(
  forwardRef<SVGSVGElement, LinkOffBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M6.06 10.46a1 1 0 0 1 1.41 1.41l-1.5 1.51a3.3 3.3 0 0 0 4.65 4.66l1.5-1.51a1 1 0 0 1 1.42 1.41l-1.5 1.51a5.3 5.3 0 0 1-7.49-7.48zM4.18 4.18a1 1 0 0 1 1.42 0L19.82 18.4a1 1 0 0 1-1.42 1.42L4.18 5.6a1 1 0 0 1 0-1.42M11.97 4.55a5.3 5.3 0 0 1 7.48 7.48l-1.5 1.51a1 1 0 0 1-1.42-1.41l1.5-1.51a3.3 3.3 0 0 0-4.65-4.66l-1.5 1.51a1 1 0 0 1-1.42-1.41z" />
    </IconBase>
  ))
);

LinkOffBold.displayName = 'LinkOffBold';

// Triple export pattern (lucide-react style)
export { LinkOffBold, LinkOffBold as LinkOffBoldIcon, LinkOffBold as SiLinkOffBold };
export type { LinkOffBoldProps };
