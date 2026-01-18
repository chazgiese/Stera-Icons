import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScrewdriverRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScrewdriverRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScrewdriverRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.33 3.52a4.35 4.35 0 0 1 6.15 6.15l-3.82 3.81a.8.8 0 0 1-.53.22h-1.08l-.3 1.52a1 1 0 0 1-.2.38l-1.7 1.7c-.3.29-.77.29-1.06 0l-5.08-5.1a.75.75 0 0 1 0-1.05l1.7-1.7.07-.07q.15-.09.3-.13l1.52-.3V7.87q0-.32.22-.53zm5.09 1.06a2.85 2.85 0 0 0-4.03 0l-3.59 3.6v1.38c0 .36-.25.67-.6.74l-1.9.38-1 1 4.02 4.02 1-1 .38-1.9c.07-.35.38-.6.74-.6h1.38l3.6-3.6a2.85 2.85 0 0 0 0-4.02" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="m9.78 15.28-6.25 6.25a.75.75 0 0 1-1.06-1.06l6.25-6.25zM10.31 13.7v-.02zM16.88 6.06a.75.75 0 0 1 1.06 1.07l-2.55 2.54a.75.75 0 1 1-1.06-1.06z" />
    </IconBase>
  ))
);

ScrewdriverRegularDuotone.displayName = 'ScrewdriverRegularDuotone';

export { ScrewdriverRegularDuotone };
export type { ScrewdriverRegularDuotoneProps };
