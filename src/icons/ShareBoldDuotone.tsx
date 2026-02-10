import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShareBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShareBoldDuotone = memo(
  forwardRef<SVGSVGElement, ShareBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="share-bold-duotone" {...props}>
      <path fill="currentColor" d="M15 8.5c1.31 0 2.22-.01 2.99.25a4.5 4.5 0 0 1 2.76 2.76c.26.77.25 1.68.25 2.99v.9q.01 1.44-.05 2.38a5 5 0 0 1-.44 1.76 4.5 4.5 0 0 1-1.97 1.97 5 5 0 0 1-1.76.44q-.94.06-2.38.05H9.6q-1.44.01-2.38-.05a5 5 0 0 1-1.76-.44 4.5 4.5 0 0 1-1.97-1.97 5 5 0 0 1-.44-1.76Q3 16.84 3 15.4v-.9c0-1.31-.01-2.22.25-2.99a4.5 4.5 0 0 1 2.76-2.76C6.78 8.5 7.7 8.5 9 8.5a1 1 0 0 1 0 2c-1.48 0-1.97.01-2.33.14a2.5 2.5 0 0 0-1.53 1.53c-.13.36-.14.85-.14 2.33v.9c0 1 0 1.68.04 2.22.05.52.13.8.23 1.01q.37.73 1.1 1.1c.2.1.5.18 1.01.23.54.04 1.22.04 2.22.04h4.8c1 0 1.68 0 2.22-.04.52-.05.8-.13 1.01-.23a2.5 2.5 0 0 0 1.1-1.1c.1-.2.18-.5.23-1.01.04-.54.04-1.22.04-2.22v-.9c0-1.48-.01-1.97-.14-2.33a2.5 2.5 0 0 0-1.53-1.53c-.36-.13-.85-.14-2.33-.14a1 1 0 1 1 0-2" opacity={.4} />
        <path fill="currentColor" d="M12 1.5a1 1 0 0 1 .7.3l3.5 3.5a1 1 0 1 1-1.4 1.4L13 4.92V15a1 1 0 0 1-2 0V4.91l-1.8 1.8a1 1 0 1 1-1.4-1.42l3.5-3.5a1 1 0 0 1 .7-.29" />
    </IconBase>
  ))
);

ShareBoldDuotone.displayName = 'ShareBoldDuotone';

// Triple export pattern (lucide-react style)
export { ShareBoldDuotone, ShareBoldDuotone as ShareBoldDuotoneIcon, ShareBoldDuotone as SiShareBoldDuotone };
export default ShareBoldDuotone;
export type { ShareBoldDuotoneProps };
