import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EyeClosedFillProps = Omit<IconBaseProps, 'children'>;

const EyeClosedFill = memo(
  forwardRef<SVGSVGElement, EyeClosedFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M19.63 8.3a1.5 1.5 0 0 1 2.66 1.4q-.48.9-1.13 1.71l1.36 1.27a1.5 1.5 0 0 1-2.04 2.2l-1.5-1.4q-1.18.85-2.56 1.39l.5 1.71a1.5 1.5 0 0 1-2.88.84l-.53-1.82a12 12 0 0 1-3.02 0l-.53 1.82a1.5 1.5 0 0 1-2.88-.84l.5-1.71q-1.38-.54-2.55-1.39l-1.51 1.4a1.5 1.5 0 0 1-2.04-2.2l1.36-1.27q-.64-.8-1.13-1.71a1.5 1.5 0 0 1 2.66-1.4 8.3 8.3 0 0 0 5.42 4.13l.05.01h.01a9 9 0 0 0 4.3 0l.06-.01a8.3 8.3 0 0 0 5.42-4.13" />
    </IconBase>
  ))
);

EyeClosedFill.displayName = 'EyeClosedFill';

// Triple export pattern (lucide-react style)
export { EyeClosedFill, EyeClosedFill as EyeClosedFillIcon, EyeClosedFill as SiEyeClosedFill };
export type { EyeClosedFillProps };
