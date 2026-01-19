import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SignatureBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignatureBoldDuotone = memo(
  forwardRef<SVGSVGElement, SignatureBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="signature-bold-duotone" {...props}>
      <path d="M5.9 16q-.66 1.06-1.43 2H2a1 1 0 1 1 0-2zM22 16a1 1 0 1 1 0 2H6.98q.68-.96 1.26-2z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M6.8 3q1.36 0 2.37.66c.66.45 1.1 1.08 1.37 1.8.52 1.4.4 3.16-.02 4.93a19 19 0 0 1-.63 2.07l.35-.12a7 7 0 0 0 1.87-.97 8 8 0 0 0 1.47-1.74 1 1 0 0 1 1.82.56c0 .64.13 1.45.4 2.06.28.65.55.75.7.75q.29.01.92-.25.64-.28 1.35-.78c.95-.67 1.85-1.54 2.4-2.34a1 1 0 0 1 1.65 1.13 12 12 0 0 1-4.6 3.82c-.55.24-1.15.42-1.72.42-1.37 0-2.15-1.07-2.54-1.95l-.18-.5q-.2.2-.42.37c-.67.55-1.42.9-2.4 1.28a6 6 0 0 1-2 .44 22 22 0 0 1-4.26 6.08 1 1 0 0 1-1.4-1.44c1.35-1.3 2.6-3.09 3.58-4.97a5 5 0 0 1-1.05-.56 7 7 0 0 1-2.68-3.84 7 7 0 0 1 .04-4.46c.27-.68.7-1.3 1.33-1.76Q5.47 3.01 6.8 3m0 2q-.73.02-1.11.32-.4.28-.64.87c-.32.8-.34 1.97.01 3.14a5 5 0 0 0 1.89 2.77q.35.25.78.39.54-1.32.85-2.57c.39-1.62.4-2.93.09-3.76q-.23-.59-.62-.85A2 2 0 0 0 6.8 5" clipRule="evenodd" />
    </IconBase>
  ))
);

SignatureBoldDuotone.displayName = 'SignatureBoldDuotone';

// Triple export pattern (lucide-react style)
export { SignatureBoldDuotone, SignatureBoldDuotone as SignatureBoldDuotoneIcon, SignatureBoldDuotone as SiSignatureBoldDuotone };
export default SignatureBoldDuotone;
export type { SignatureBoldDuotoneProps };
