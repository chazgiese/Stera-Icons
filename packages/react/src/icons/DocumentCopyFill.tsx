import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DocumentCopyFillProps = Omit<IconBaseProps, 'children'>;

const DocumentCopyFill = memo(
  forwardRef<SVGSVGElement, DocumentCopyFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.17 6q.4-.02.84.06.35.09.65.27.37.26.63.55l3.83 3.83c.18.18.4.38.55.63q.18.3.27.65c.07.29.06.58.06.84v6.77q0 .61-.02 1.07t-.25.96a2.5 2.5 0 0 1-1.1 1.1q-.49.22-.96.25T13.6 23H6.4q-.61 0-1.07-.02a3 3 0 0 1-.96-.25 2.5 2.5 0 0 1-1.1-1.1 3 3 0 0 1-.25-.96Q3 20.2 3 19.6V9.4q0-.61.02-1.07t.25-.96a2.5 2.5 0 0 1 1.1-1.1q.49-.22.96-.25T6.4 6zm.81 4.04c0 .69.01 1.03.15 1.3q.18.35.54.53c.26.14.6.14 1.29.15l2.54.03-4.54-4.55z" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M14.17 1q.4-.01.84.06.35.09.65.27.37.26.63.55l3.83 3.83c.18.18.4.38.55.63q.18.3.27.65c.07.29.06.58.06.84v6.77q0 .61-.02 1.07t-.25.96a2.5 2.5 0 0 1-1.1 1.1q-.49.22-.96.25L18 18v-5.17c0-.21.01-.64-.09-1.07a3 3 0 0 0-.26-.72l-.13-.22-.09-.14c-.21-.3-.47-.55-.6-.68L13 6.17c-.13-.13-.37-.39-.68-.6l-.14-.1-.22-.12a3 3 0 0 0-.47-.2l-.25-.06-.16-.03c-.37-.07-.72-.06-.9-.06H7v-.6q0-.61.02-1.07t.25-.96a2.5 2.5 0 0 1 1.1-1.1q.49-.22.96-.25T10.4 1zM15 5c0 .7 0 1.05.14 1.32q.18.35.54.54C15.95 7 16.3 7 17 7h2.5L15 2.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

DocumentCopyFill.displayName = 'DocumentCopyFill';

export { DocumentCopyFill };
export type { DocumentCopyFillProps };
