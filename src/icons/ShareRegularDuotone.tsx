import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShareRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShareRegularDuotone = memo(
  forwardRef<SVGSVGElement, ShareRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="share-duotone" {...props}>
      <path fill="currentColor" d="M15 8.75c1.33 0 2.2-.01 2.9.24a4.3 4.3 0 0 1 2.61 2.6c.25.72.24 1.58.24 2.91v.9q.01 1.44-.05 2.36a4 4 0 0 1-.41 1.67c-.41.8-1.06 1.45-1.86 1.86q-.74.36-1.67.41-.93.06-2.36.05H9.6q-1.44.01-2.36-.05a4 4 0 0 1-1.67-.41 4.3 4.3 0 0 1-1.86-1.86 4 4 0 0 1-.41-1.67q-.06-.92-.05-2.36v-.9c0-1.33-.01-2.2.24-2.9a4.3 4.3 0 0 1 2.6-2.61c.72-.25 1.58-.24 2.91-.24a.75.75 0 0 1 0 1.5c-1.46 0-2 .01-2.4.15-.8.28-1.42.9-1.7 1.7-.14.4-.15.94-.15 2.4v.9c0 1 0 1.7.04 2.24.05.54.13.86.26 1.1q.4.8 1.2 1.21c.25.13.58.21 1.11.26.55.04 1.25.04 2.24.04h4.8c1 0 1.7 0 2.24-.04a3 3 0 0 0 1.1-.26q.8-.4 1.21-1.2c.13-.25.21-.57.25-1.11s.05-1.25.05-2.24v-.9c0-1.46-.01-2-.15-2.4a2.8 2.8 0 0 0-1.7-1.7c-.4-.14-.94-.15-2.4-.15a.75.75 0 0 1 0-1.5" opacity={.4} />
        <path fill="currentColor" d="M12 1.75q.31 0 .53.22l3.5 3.5a.75.75 0 1 1-1.06 1.06l-2.22-2.22V15a.75.75 0 0 1-1.5 0V4.31L9.03 6.53a.75.75 0 1 1-1.06-1.06l3.5-3.5a.8.8 0 0 1 .53-.22" />
    </IconBase>
  ))
);

ShareRegularDuotone.displayName = 'ShareRegularDuotone';

// Triple export pattern (lucide-react style)
export { ShareRegularDuotone, ShareRegularDuotone as ShareRegularDuotoneIcon, ShareRegularDuotone as SiShareRegularDuotone };
export default ShareRegularDuotone;
export type { ShareRegularDuotoneProps };
