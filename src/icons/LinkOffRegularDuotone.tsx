import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LinkOffRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LinkOffRegularDuotone = memo(
  forwardRef<SVGSVGElement, LinkOffRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="link-off-duotone" {...props}>
      <path d="M6.23 10.64A.75.75 0 0 1 7.3 11.7l-1.5 1.5a3.54 3.54 0 0 0 5 5.01l1.51-1.5a.75.75 0 0 1 1.06 1.06l-1.5 1.5a5.04 5.04 0 0 1-7.13-7.13zM12.14 4.73a5.04 5.04 0 0 1 7.13 7.13l-1.5 1.5a.75.75 0 0 1-1.06-1.06l1.5-1.5a3.54 3.54 0 0 0-5-5.01l-1.51 1.5a.75.75 0 0 1-1.06-1.06z" opacity={0.4} />
        <path fill="currentColor" d="M4.36 4.36c.3-.3.77-.3 1.06 0l14.22 14.22a.75.75 0 0 1-1.06 1.06L4.36 5.42a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

LinkOffRegularDuotone.displayName = 'LinkOffRegularDuotone';

// Triple export pattern (lucide-react style)
export { LinkOffRegularDuotone, LinkOffRegularDuotone as LinkOffRegularDuotoneIcon, LinkOffRegularDuotone as SiLinkOffRegularDuotone };
export default LinkOffRegularDuotone;
export type { LinkOffRegularDuotoneProps };
