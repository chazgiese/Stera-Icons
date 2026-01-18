import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RewindBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RewindBoldDuotone = memo(
  forwardRef<SVGSVGElement, RewindBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.19 5.77a2 2 0 0 1 1.42.81c.26.36.33.77.36 1.08q.04.49.03 1.17v6.97q0 .3-.03.54c-.03.31-.1.72-.36 1.08a2 2 0 0 1-1.42.8 2 2 0 0 1-1.11-.24q-.45-.22-1.02-.58l-5.29-3.17q-.55-.32-.94-.6a2 2 0 0 1-.72-.83 2 2 0 0 1 0-1.6c.17-.4.47-.65.72-.83q.39-.28.94-.6l5.3-3.17q.57-.36 1-.58c.25-.12.58-.25.95-.25zm-.25 2.05q-.25.13-.85.5L3.8 11.48c-.4.23-.63.37-.79.49L3 12l.02.02q.22.16.79.5l5.29 3.17q.6.37.85.49h.04v-.02l.02-.4V8.84c0-.49 0-.78-.02-.99v-.03z" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M21.19 5.77a2 2 0 0 1 1.42.81c.26.36.33.77.36 1.08q.04.49.03 1.17v6.34q0 .68-.03 1.17c-.03.31-.1.72-.36 1.08a2 2 0 0 1-1.42.8 2 2 0 0 1-1.11-.24q-.45-.22-1.02-.58l-5.29-3.17q-.55-.32-.94-.6a2 2 0 0 1-.72-.83 2 2 0 0 1 0-1.6c.17-.4.47-.65.72-.83q.39-.28.94-.6l5.3-3.17q.57-.36 1-.58c.25-.12.58-.25.95-.25zm-.25 2.05q-.25.13-.85.5l-5.29 3.17c-.4.23-.63.37-.79.49L14 12l.02.02q.22.16.79.5l5.29 3.17q.6.37.85.49h.04v-.02c.02-.21.02-.5.02-.99V8.83c0-.49 0-.78-.02-.99v-.03z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

RewindBoldDuotone.displayName = 'RewindBoldDuotone';

export { RewindBoldDuotone };
export type { RewindBoldDuotoneProps };
