import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ShareBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShareBoldDuotone = memo(
  forwardRef<SVGSVGElement, ShareBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="share-bold-duotone" {...props}>
      <path fill="currentColor" d="M9 8a1 1 0 0 1 0 2H7a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-2a1 1 0 1 1 0-2h2a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-7a4 4 0 0 1 4-4z" opacity={.4} />
        <path fill="currentColor" d="M11.3 1.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L13 4.42V15a1 1 0 1 1-2 0V4.41l-2.3 2.3a1 1 0 0 1-1.4-1.42z" />
    </IconBase>
  ))
);

ShareBoldDuotone.displayName = 'ShareBoldDuotone';

// Triple export pattern (lucide-react style)
export { ShareBoldDuotone, ShareBoldDuotone as ShareBoldDuotoneIcon, ShareBoldDuotone as SiShareBoldDuotone };
export type { ShareBoldDuotoneProps };
