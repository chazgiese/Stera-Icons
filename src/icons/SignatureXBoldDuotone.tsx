import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignatureXBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignatureXBoldDuotone = memo(
  forwardRef<SVGSVGElement, SignatureXBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="signature-x-bold-duotone" {...props}>
      <path d="M7.86 17q-.67 1.1-1.35 2H2a1 1 0 0 1 0-2zM22 17a1 1 0 1 1 0 2H8.96q.63-.95 1.2-2zM4.3 11.3a1 1 0 1 1 1.4 1.4l-.79.8.8.8a1 1 0 0 1-1.42 1.4l-.79-.79-.8.8a1 1 0 0 1-1.4-1.42l.79-.79-.8-.8a1 1 0 0 1 1.42-1.4l.79.79z" opacity={0.4} />
        <path fillRule="evenodd" d="M10 3q1.25-.01 2.12.73c.57.49.89 1.15 1.06 1.85.32 1.35.11 3.08-.34 4.82a26 26 0 0 1-1.07 3.21q.35-.03.79-.24c.71-.35 1.1-.6 1.41-.92a8 8 0 0 0 1.15-1.73 1 1 0 0 1 1.88.47c0 .7.07 1.68.27 2.47q.16.6.31.81l.05-.01q.15-.05.4-.21.5-.33 1.09-.92c.79-.79 1.55-1.79 2-2.61a1 1 0 0 1 1.76.95 14 14 0 0 1-2.35 3.08q-.7.7-1.42 1.18c-.44.28-1.01.57-1.61.57a1.9 1.9 0 0 1-1.57-.9c-.29-.43-.48-.96-.6-1.45l-.04-.2a7 7 0 0 1-1.85 1.22q-1.26.6-2.48.4l-.05-.02a27 27 0 0 1-3.13 5.08 1 1 0 0 1-1.56-1.26c1.01-1.24 2.03-2.91 2.89-4.69l-.2-.17a8.4 8.4 0 0 1-2.25-4.15 9 9 0 0 1 0-4.69A4 4 0 0 1 7.8 3.8Q8.71 3 10 3m0 2q-.58.01-.86.3-.35.29-.58.97c-.3.95-.29 2.28.04 3.61a7 7 0 0 0 1.36 2.85q.59-1.45.95-2.83c.42-1.64.53-2.99.32-3.86-.1-.42-.26-.66-.41-.8-.15-.12-.39-.24-.82-.24" clipRule="evenodd" />
    </IconBase>
  ))
);

SignatureXBoldDuotone.displayName = 'SignatureXBoldDuotone';

// Triple export pattern (lucide-react style)
export { SignatureXBoldDuotone, SignatureXBoldDuotone as SignatureXBoldDuotoneIcon, SignatureXBoldDuotone as SiSignatureXBoldDuotone };
export default SignatureXBoldDuotone;
export type { SignatureXBoldDuotoneProps };
