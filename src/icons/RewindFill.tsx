import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RewindFillProps = Omit<IconBaseProps, 'children'>;

const RewindFill = memo(
  forwardRef<SVGSVGElement, RewindFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="rewind-fill" {...props}>
      <path fill="currentColor" d="M21.19 5.77a2 2 0 0 1 1.42.81c.26.36.33.77.36 1.08q.04.49.03 1.17v6.34q0 .68-.03 1.17c-.03.31-.1.72-.36 1.08a2 2 0 0 1-1.42.8 2 2 0 0 1-1.11-.24q-.45-.22-1.02-.58l-5.29-3.17q-.55-.32-.94-.6a2 2 0 0 1-.72-.83l-.11-.34v3.34q0 .3-.03.54c-.03.31-.1.72-.36 1.08a2 2 0 0 1-1.42.8 2 2 0 0 1-1.11-.24q-.45-.22-1.02-.58l-5.29-3.17q-.55-.32-.94-.6a2 2 0 0 1-.72-.83 2 2 0 0 1 0-1.6c.17-.4.47-.65.72-.83q.39-.28.94-.6l5.3-3.17q.57-.36 1-.58c.25-.12.58-.25.95-.25h.17a2 2 0 0 1 1.42.81c.26.36.33.77.36 1.08q.04.49.03 1.17v2.71l.11-.34c.17-.4.47-.65.72-.83q.39-.28.94-.6l5.3-3.17q.57-.36 1-.58c.25-.12.58-.25.95-.25z" />
    </IconBase>
  ))
);

RewindFill.displayName = 'RewindFill';

// Triple export pattern (lucide-react style)
export { RewindFill, RewindFill as RewindFillIcon, RewindFill as SiRewindFill };
export default RewindFill;
export type { RewindFillProps };
