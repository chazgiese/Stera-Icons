import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RewindBoldProps = Omit<IconBaseProps, 'children'>;

const RewindBold = memo(
  forwardRef<SVGSVGElement, RewindBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="rewind-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M21.19 5.77a2 2 0 0 1 1.42.81c.26.36.33.77.36 1.08q.04.49.03 1.17v6.34q0 .68-.03 1.17c-.03.31-.1.72-.36 1.08a2 2 0 0 1-1.42.8 2 2 0 0 1-1.11-.24q-.45-.22-1.02-.58l-5.29-3.17q-.55-.32-.94-.6a2 2 0 0 1-.72-.83l-.11-.34v3.34q0 .3-.03.54c-.03.31-.1.72-.36 1.08a2 2 0 0 1-1.42.8 2 2 0 0 1-1.11-.24q-.45-.22-1.02-.58l-5.29-3.17q-.55-.32-.94-.6a2 2 0 0 1-.72-.83 2 2 0 0 1 0-1.6c.17-.4.47-.65.72-.83q.39-.28.94-.6l5.3-3.17q.57-.36 1-.58c.25-.12.58-.25.95-.25h.17a2 2 0 0 1 1.42.81c.26.36.33.77.36 1.08q.04.49.03 1.17v2.71l.11-.34c.17-.4.47-.65.72-.83q.39-.28.94-.6l5.3-3.17q.57-.36 1-.58c.25-.12.58-.25.95-.25zM9.94 7.82q-.25.13-.85.5L3.8 11.48c-.4.23-.63.37-.79.49L3 12l.02.02c.16.12.4.26.8.5l5.28 3.17q.6.37.85.49h.04v-.02l.02-.4V8.84c0-.49 0-.78-.02-.99v-.03zm11 0q-.25.13-.85.5l-5.29 3.17c-.4.23-.63.37-.79.49L14 12l.02.02c.16.12.4.26.8.5l5.28 3.17q.6.37.85.49h.04v-.02c.02-.21.02-.5.02-.99V8.83c0-.49 0-.78-.02-.99v-.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

RewindBold.displayName = 'RewindBold';

// Triple export pattern (lucide-react style)
export { RewindBold, RewindBold as RewindBoldIcon, RewindBold as SiRewindBold };
export default RewindBold;
export type { RewindBoldProps };
