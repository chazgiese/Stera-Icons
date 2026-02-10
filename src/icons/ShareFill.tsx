import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShareFillProps = Omit<IconBaseProps, 'children'>;

const ShareFill = memo(
  forwardRef<SVGSVGElement, ShareFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="share-fill" {...props}>
      <path fill="currentColor" d="M11 15a1 1 0 1 0 2 0V8.5h1.4q1.44-.01 2.38.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76.06.94.05 2.38v.3q.01 1.44-.05 2.38a5 5 0 0 1-.44 1.76 4.5 4.5 0 0 1-1.97 1.97 5 5 0 0 1-1.76.44q-.94.06-2.38.05H9.6q-1.44.01-2.38-.05a5 5 0 0 1-1.76-.44 4.5 4.5 0 0 1-1.97-1.97 5 5 0 0 1-.44-1.76Q3 16.84 3 15.4v-.3q-.01-1.44.05-2.38a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44q.94-.06 2.38-.05H11z" />
        <path fill="currentColor" d="M12 1.5a1 1 0 0 1 .7.3l3.5 3.5a1 1 0 1 1-1.4 1.4L13 4.92V8.5h-2V4.91l-1.8 1.8a1 1 0 1 1-1.4-1.42l3.5-3.5a1 1 0 0 1 .7-.29" />
    </IconBase>
  ))
);

ShareFill.displayName = 'ShareFill';

// Triple export pattern (lucide-react style)
export { ShareFill, ShareFill as ShareFillIcon, ShareFill as SiShareFill };
export default ShareFill;
export type { ShareFillProps };
