import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LayoutListBoldProps = Omit<IconBaseProps, 'children'>;

const LayoutListBold = memo(
  forwardRef<SVGSVGElement, LayoutListBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M7.6 13q.61 0 1.07.02t.96.25q.73.37 1.1 1.1.22.49.25.96T11 16.4v2.2q0 .61-.02 1.07t-.25.96a2.5 2.5 0 0 1-1.1 1.1q-.49.22-.96.25T7.6 22H5.4q-.61 0-1.07-.02a3 3 0 0 1-.96-.25 2.5 2.5 0 0 1-1.1-1.1 3 3 0 0 1-.25-.96Q2 19.2 2 18.6v-2.2q0-.61.02-1.07t.25-.96a2.5 2.5 0 0 1 1.1-1.1q.49-.22.96-.25T5.4 13zm-2.2 2a13 13 0 0 0-1.09.04l-.03.01a.5.5 0 0 0-.23.22v.04q-.02.06-.03.19c-.02.2-.02.46-.02.9v2.2a13 13 0 0 0 .04 1.09l.01.03a.5.5 0 0 0 .23.23h.03q.06.02.19.03c.2.02.46.02.9.02h2.2a13 13 0 0 0 1.09-.04l.03-.01a.5.5 0 0 0 .23-.22v-.04q.02-.06.03-.19c.02-.2.02-.46.02-.9v-2.2a13 13 0 0 0-.04-1.09l-.01-.03a.5.5 0 0 0-.22-.23h-.04q-.06-.02-.19-.03C8.3 15 8.04 15 7.6 15z" clipRule="evenodd" />
        <path fill="currentColor" d="M21 19a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zM21 14a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M7.6 2q.61 0 1.07.02t.96.25q.73.37 1.1 1.1.22.49.25.96T11 5.4v2.2q0 .61-.02 1.07t-.25.96a2.5 2.5 0 0 1-1.1 1.1q-.49.22-.96.25T7.6 11H5.4q-.61 0-1.07-.02a3 3 0 0 1-.96-.25 2.5 2.5 0 0 1-1.1-1.1 3 3 0 0 1-.25-.96Q2 8.2 2 7.6V5.4q0-.61.02-1.07t.25-.96a2.5 2.5 0 0 1 1.1-1.1q.49-.22.96-.25T5.4 2zM5.4 4a13 13 0 0 0-1.09.04l-.03.01a.5.5 0 0 0-.23.22v.04q-.02.06-.03.19C4 4.7 4 4.96 4 5.4v2.2a13 13 0 0 0 .04 1.09l.01.03a.5.5 0 0 0 .23.23h.03q.06.02.19.03c.2.02.46.02.9.02h2.2a13 13 0 0 0 1.09-.04l.03-.01a.5.5 0 0 0 .23-.22v-.04q.02-.06.03-.19C9 8.3 9 8.04 9 7.6V5.4a13 13 0 0 0-.04-1.09l-.01-.03a.5.5 0 0 0-.22-.23h-.04q-.06-.02-.19-.03C8.3 4 8.04 4 7.6 4z" clipRule="evenodd" />
        <path fill="currentColor" d="M21 8a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zM21 3a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

LayoutListBold.displayName = 'LayoutListBold';

// Triple export pattern (lucide-react style)
export { LayoutListBold, LayoutListBold as LayoutListBoldIcon, LayoutListBold as SiLayoutListBold };
export type { LayoutListBoldProps };
