import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShareFillProps = Omit<IconBaseProps, 'children'>;

const ShareFill = memo(
  forwardRef<SVGSVGElement, ShareFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="share-fill" {...props}>
      <path fill="currentColor" d="M11.3 1.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L13 4.42V8h-2V4.41l-2.3 2.3a1 1 0 0 1-1.4-1.42zM17 8a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-7a4 4 0 0 1 4-4h4v7a1 1 0 1 0 2 0V8z" />
    </IconBase>
  ))
);

ShareFill.displayName = 'ShareFill';

// Triple export pattern (lucide-react style)
export { ShareFill, ShareFill as ShareFillIcon, ShareFill as SiShareFill };
export default ShareFill;
export type { ShareFillProps };
