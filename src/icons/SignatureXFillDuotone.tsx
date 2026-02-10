import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignatureXFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignatureXFillDuotone = memo(
  forwardRef<SVGSVGElement, SignatureXFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="signature-x-fill-duotone" {...props}>
      <path d="M7.57 16.5q-.85 1.46-1.73 2.55-.18.22-.25.45H2a1.5 1.5 0 0 1 0-3zM22 16.5a1.5 1.5 0 0 1 0 3H9.23q.93-1.38 1.76-3h5.1c.36.28.82.5 1.41.5.62 0 1.19-.24 1.63-.5zM4.3 11.3a1 1 0 1 1 1.4 1.4l-.79.8.8.8a1 1 0 0 1-1.42 1.4l-.79-.79-.8.8a1 1 0 0 1-1.4-1.42l.79-.79-.8-.8a1 1 0 0 1 1.42-1.4l.79.79z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M10 2.5c.92 0 1.77.26 2.45.85a4 4 0 0 1 1.21 2.11c.35 1.48.12 3.3-.33 5.07q-.3 1.1-.7 2.25c.5-.27.76-.46.99-.68.28-.3.57-.72 1.06-1.62a1.5 1.5 0 0 1 2.82.71 11 11 0 0 0 .32 2.59q.42-.29.95-.8c.76-.76 1.49-1.73 1.91-2.5a1.5 1.5 0 0 1 2.64 1.43 15 15 0 0 1-2.44 3.2c-.47.46-.98.9-1.5 1.23-.46.3-1.13.66-1.88.66a2.4 2.4 0 0 1-1.98-1.12 4 4 0 0 1-.5-1.05q-.62.43-1.36.79-1.22.6-2.46.48a27 27 0 0 1-3.04 4.85 1.5 1.5 0 0 1-2.32-1.9 24 24 0 0 0 2.65-4.25 9 9 0 0 1-2.32-4.33 9.5 9.5 0 0 1 .01-4.95 4.6 4.6 0 0 1 1.3-2.1Q8.52 2.51 10 2.5m0 3c-.27 0-.42.08-.53.17q-.22.16-.43.75c-.26.83-.27 2.07.04 3.34q.29 1.1.75 1.91.34-.96.6-1.9c.41-1.61.5-2.86.31-3.61-.08-.36-.2-.5-.25-.54-.04-.03-.16-.12-.49-.12" clipRule="evenodd" />
    </IconBase>
  ))
);

SignatureXFillDuotone.displayName = 'SignatureXFillDuotone';

// Triple export pattern (lucide-react style)
export { SignatureXFillDuotone, SignatureXFillDuotone as SignatureXFillDuotoneIcon, SignatureXFillDuotone as SiSignatureXFillDuotone };
export default SignatureXFillDuotone;
export type { SignatureXFillDuotoneProps };
