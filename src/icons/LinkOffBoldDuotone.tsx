import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LinkOffBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LinkOffBoldDuotone = memo(
  forwardRef<SVGSVGElement, LinkOffBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="link-off-bold-duotone" {...props}>
      <path d="M6.06 10.46a1 1 0 0 1 1.41 1.41l-1.5 1.51a3.3 3.3 0 0 0 4.65 4.66l1.5-1.51a1 1 0 0 1 1.42 1.41l-1.5 1.51a5.3 5.3 0 0 1-7.49-7.48zM11.97 4.55a5.3 5.3 0 0 1 7.48 7.48l-1.5 1.51a1 1 0 0 1-1.42-1.41l1.5-1.51a3.3 3.3 0 0 0-4.65-4.66l-1.5 1.51a1 1 0 0 1-1.42-1.41z" opacity={0.4} />
        <path fill="currentColor" d="M4.18 4.18a1 1 0 0 1 1.42 0L19.82 18.4a1 1 0 0 1-1.42 1.42L4.18 5.6a1 1 0 0 1 0-1.42" />
    </IconBase>
  ))
);

LinkOffBoldDuotone.displayName = 'LinkOffBoldDuotone';

// Triple export pattern (lucide-react style)
export { LinkOffBoldDuotone, LinkOffBoldDuotone as LinkOffBoldDuotoneIcon, LinkOffBoldDuotone as SiLinkOffBoldDuotone };
export type { LinkOffBoldDuotoneProps };
