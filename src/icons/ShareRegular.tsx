import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ShareRegularProps = Omit<IconBaseProps, 'children'>;

const ShareRegular = memo(
  forwardRef<SVGSVGElement, ShareRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="share" {...props}>
      <path fill="currentColor" d="M9 8.25a.75.75 0 0 1 0 1.5H7c-1.24 0-2.25 1-2.25 2.25v7c0 1.24 1 2.25 2.25 2.25h10c1.24 0 2.25-1 2.25-2.25v-7c0-1.24-1-2.25-2.25-2.25h-2a.75.75 0 0 1 0-1.5h2A3.75 3.75 0 0 1 20.75 12v7A3.75 3.75 0 0 1 17 22.75H7A3.75 3.75 0 0 1 3.25 19v-7A3.75 3.75 0 0 1 7 8.25z" />
        <path fill="currentColor" d="M11.47 1.47c.3-.3.77-.3 1.06 0l4 4a.75.75 0 0 1-1.06 1.06l-2.72-2.72V15a.75.75 0 0 1-1.5 0V3.81L8.53 6.53a.75.75 0 0 1-1.06-1.06z" />
    </IconBase>
  ))
);

ShareRegular.displayName = 'ShareRegular';

// Triple export pattern (lucide-react style)
export { ShareRegular, ShareRegular as ShareRegularIcon, ShareRegular as SiShareRegular };
export type { ShareRegularProps };
