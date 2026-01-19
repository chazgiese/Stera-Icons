import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SignatureXFillProps = Omit<IconBaseProps, 'children'>;

const SignatureXFill = memo(
  forwardRef<SVGSVGElement, SignatureXFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="signature-x-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10 2.5c.92 0 1.77.26 2.45.85a4 4 0 0 1 1.21 2.11c.35 1.48.12 3.3-.33 5.07q-.3 1.1-.7 2.25c.5-.27.76-.46.99-.68.28-.3.57-.72 1.06-1.62a1.5 1.5 0 0 1 2.82.71 11 11 0 0 0 .32 2.59q.42-.29.95-.8c.76-.76 1.49-1.73 1.91-2.5a1.5 1.5 0 0 1 2.64 1.43 15 15 0 0 1-2.44 3.2 10 10 0 0 1-1.75 1.39H22a1.5 1.5 0 0 1 0 3H9.23q-.52.78-1.07 1.45A1.5 1.5 0 0 1 5.6 19.5H2a1.5 1.5 0 0 1 0-3h5.57q.48-.81.92-1.7a9 9 0 0 1-2.32-4.33 9.5 9.5 0 0 1 .01-4.95 4.6 4.6 0 0 1 1.3-2.1Q8.52 2.51 10 2.5m5.01 12.33q-.6.43-1.35.79-1.22.6-2.46.48l-.2.4h5.1q-.37-.3-.58-.62a4 4 0 0 1-.5-1.05M10 5.5c-.27 0-.42.08-.53.17q-.22.16-.43.75c-.26.83-.27 2.07.04 3.34q.28 1.1.75 1.91.34-.96.6-1.9c.41-1.61.5-2.86.31-3.61-.08-.36-.2-.5-.25-.54-.04-.03-.16-.12-.49-.12" clipRule="evenodd" />
        <path fill="currentColor" d="M4.3 11.3a1 1 0 1 1 1.4 1.4l-.79.8.8.8a1 1 0 1 1-1.42 1.4l-.79-.79-.8.8a1 1 0 1 1-1.4-1.42l.79-.79-.8-.8a1 1 0 1 1 1.42-1.4l.79.79z" />
    </IconBase>
  ))
);

SignatureXFill.displayName = 'SignatureXFill';

// Triple export pattern (lucide-react style)
export { SignatureXFill, SignatureXFill as SignatureXFillIcon, SignatureXFill as SiSignatureXFill };
export type { SignatureXFillProps };
