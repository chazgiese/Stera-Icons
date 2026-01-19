import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SignatureFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignatureFillDuotone = memo(
  forwardRef<SVGSVGElement, SignatureFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="signature-fill-duotone" {...props}>
      <path d="M5.63 15.5a19 19 0 0 1-2.26 3H2a1.5 1.5 0 0 1 0-3zM22 15.5a1.5 1.5 0 0 1 0 3H7.24q1.02-1.43 1.84-3z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M6.8 2.5a4.16 4.16 0 0 1 4.21 2.79c.57 1.53.43 3.42 0 5.22q-.14.54-.31 1.1c.5-.23.83-.41 1.1-.63.38-.3.75-.74 1.36-1.64a1.5 1.5 0 0 1 2.74.85c0 .58.12 1.07.28 1.35q.12.18.16.2.02.02.16.03c.43 0 1.25-.2 2.15-.68a6 6 0 0 0 2.11-1.75 1.5 1.5 0 0 1 2.48 1.7 9 9 0 0 1-3.2 2.71 8 8 0 0 1-3.54 1.02c-1.28 0-2.2-.66-2.77-1.5l-.05.04c-.74.6-1.55.97-2.54 1.36q-.96.38-1.87.45a23 23 0 0 1-4.22 5.96 1.5 1.5 0 0 1-2.1-2.16 19 19 0 0 0 3.24-4.38 6 6 0 0 1-.64-.37 7.6 7.6 0 0 1-2.88-4.12 7.5 7.5 0 0 1 .06-4.79c.3-.75.78-1.46 1.5-1.97q1.1-.79 2.57-.79m0 3q-.58.02-.82.22-.27.18-.46.65c-.28.68-.3 1.72.02 2.82a4.6 4.6 0 0 0 1.91 2.63q.4-1.04.64-2.02c.38-1.58.37-2.77.11-3.47q-.18-.46-.43-.6a1.7 1.7 0 0 0-.97-.23" clipRule="evenodd" />
    </IconBase>
  ))
);

SignatureFillDuotone.displayName = 'SignatureFillDuotone';

// Triple export pattern (lucide-react style)
export { SignatureFillDuotone, SignatureFillDuotone as SignatureFillDuotoneIcon, SignatureFillDuotone as SiSignatureFillDuotone };
export type { SignatureFillDuotoneProps };
