import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type QrCodeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const QrCodeBoldDuotone = memo(
  forwardRef<SVGSVGElement, QrCodeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M8.75 13C9.99 13 11 14 11 15.25v4.5C11 20.99 10 22 8.75 22h-4.5C3.01 22 2 21 2 19.75v-4.5C2 14.01 3 13 4.25 13zm-4.5 2a.25.25 0 0 0-.25.25v4.5c0 .14.11.25.25.25h4.5q.23-.02.25-.25v-4.5a.25.25 0 0 0-.25-.25zM19.75 2C20.99 2 22 3 22 4.25v4.5C22 9.99 21 11 19.75 11h-4.5C14.01 11 13 10 13 8.75v-4.5C13 3.01 14 2 15.25 2zm-4.5 2a.25.25 0 0 0-.25.25v4.5q.02.23.25.25h4.5q.23-.02.25-.25v-4.5a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
        <path d="M6.5 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" d="M16 21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h2zM21 19a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-2zM19 19h-3v-3h3zM15 13a1 1 0 0 1 1 1v2h-2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1zM21 13a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2v-2a1 1 0 0 1 1-1z" />
        <path fill="currentColor" fillRule="evenodd" d="M8.75 2C9.99 2 11 3 11 4.25v4.5C11 9.99 10 11 8.75 11h-4.5C3.01 11 2 10 2 8.75v-4.5C2 3.01 3 2 4.25 2zm-4.5 2a.25.25 0 0 0-.25.25v4.5c0 .14.11.25.25.25h4.5q.23-.02.25-.25v-4.5A.25.25 0 0 0 8.75 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

QrCodeBoldDuotone.displayName = 'QrCodeBoldDuotone';

export { QrCodeBoldDuotone };
export type { QrCodeBoldDuotoneProps };
