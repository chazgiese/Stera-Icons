import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SignatureRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignatureRegularDuotone = memo(
  forwardRef<SVGSVGElement, SignatureRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.04 16.25q-.5.78-1.05 1.5H2a.75.75 0 0 1 0-1.5zM22 16.25a.75.75 0 0 1 0 1.5H6.85q.5-.73.96-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M6.8 3.25q1.31 0 2.23.61.91.64 1.28 1.69c.49 1.32.39 3.03-.03 4.78q-.3 1.2-.8 2.49.4-.08.85-.25a7 7 0 0 0 1.94-1c.46-.38.89-.9 1.51-1.8a.75.75 0 0 1 1.37.42c0 .67.13 1.51.42 2.16.3.68.63.9.93.9q.35 0 1.02-.27.66-.3 1.4-.8a10 10 0 0 0 2.46-2.41.75.75 0 0 1 1.24.85 12 12 0 0 1-4.5 3.73c-.53.24-1.1.4-1.62.4-1.22 0-1.93-.95-2.3-1.8a6 6 0 0 1-.3-.87q-.33.36-.7.65a8 8 0 0 1-2.33 1.24q-1.1.41-2.07.42a22 22 0 0 1-4.28 6.15.75.75 0 0 1-1.04-1.08 20 20 0 0 0 3.75-5.3 5 5 0 0 1-1.26-.61 7 7 0 0 1-2.58-3.72 6.7 6.7 0 0 1 .03-4.3c.26-.63.67-1.21 1.25-1.63q.88-.64 2.13-.65m0 1.5c-.55 0-.95.15-1.26.36q-.46.35-.72.98c-.35.88-.36 2.1 0 3.31a5.4 5.4 0 0 0 1.99 2.9q.48.33 1.06.49.61-1.44.95-2.81c.4-1.64.42-3 .08-3.91q-.24-.65-.71-.96a2.4 2.4 0 0 0-1.39-.36" clipRule="evenodd" />
    </IconBase>
  ))
);

SignatureRegularDuotone.displayName = 'SignatureRegularDuotone';

export { SignatureRegularDuotone };
export type { SignatureRegularDuotoneProps };
