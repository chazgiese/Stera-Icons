import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignatureBoldProps = Omit<IconBaseProps, 'children'>;

const SignatureBold = memo(
  forwardRef<SVGSVGElement, SignatureBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="signature-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.8 3q1.36 0 2.37.66c.66.45 1.1 1.08 1.37 1.8.52 1.4.4 3.17-.02 4.93q-.24 1.01-.63 2.07l.35-.12a7 7 0 0 0 1.87-.97 8 8 0 0 0 1.47-1.74 1 1 0 0 1 1.82.56c0 .64.13 1.45.4 2.06.28.65.55.75.7.75q.29.01.92-.25.64-.28 1.35-.78c.95-.67 1.85-1.54 2.4-2.34a1 1 0 0 1 1.66 1.13 12 12 0 0 1-4.6 3.82c-.56.24-1.16.42-1.73.42-1.37 0-2.15-1.07-2.54-1.95l-.18-.5q-.2.2-.41.37c-.68.55-1.43.9-2.4 1.28q-1.06.4-2.01.44-.35.69-.72 1.36H22a1 1 0 1 1 0 2H6.98Q5.9 19.52 4.7 20.72a1 1 0 1 1-1.4-1.44q.6-.59 1.17-1.28H2a1 1 0 1 1 0-2h3.9q.53-.82.98-1.7a5 5 0 0 1-1.05-.55 7 7 0 0 1-2.68-3.84 7 7 0 0 1 .04-4.46c.28-.68.7-1.3 1.33-1.76Q5.47 3.01 6.8 3m0 2q-.74.02-1.1.32-.42.28-.65.87c-.32.8-.34 1.97.01 3.14a5 5 0 0 0 1.89 2.77q.36.25.78.39.54-1.32.85-2.57c.39-1.62.4-2.93.09-3.76q-.23-.59-.62-.85A2 2 0 0 0 6.8 5" clipRule="evenodd" />
    </IconBase>
  ))
);

SignatureBold.displayName = 'SignatureBold';

// Triple export pattern (lucide-react style)
export { SignatureBold, SignatureBold as SignatureBoldIcon, SignatureBold as SiSignatureBold };
export default SignatureBold;
export type { SignatureBoldProps };
