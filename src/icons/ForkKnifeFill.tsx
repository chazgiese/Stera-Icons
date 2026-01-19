import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ForkKnifeFillProps = Omit<IconBaseProps, 'children'>;

const ForkKnifeFill = memo(
  forwardRef<SVGSVGElement, ForkKnifeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="fork-knife-fill" {...props}>
      <path fill="currentColor" d="M9.75 2a1 1 0 0 1 1 1v6q0 .15-.06.3l-1.18 2.74q-.26.61-.26 1.28v6.18a2.25 2.25 0 0 1-4.5 0v-6.18q0-.66-.26-1.28L3.3 9.3a1 1 0 0 1-.06-.3V3a1 1 0 0 1 2 0v5.25H6V3.5a1 1 0 0 1 2 0v4.75h.75V3a1 1 0 0 1 1-1M19.83 2.27a.75.75 0 0 1 .92.73v16.5a2.25 2.25 0 0 1-4.5 0v-3.75H14a.75.75 0 0 1-.75-.75c0-4.3.35-7.2 1.38-9.17 1.08-2.06 2.82-3 5.2-3.56" />
    </IconBase>
  ))
);

ForkKnifeFill.displayName = 'ForkKnifeFill';

// Triple export pattern (lucide-react style)
export { ForkKnifeFill, ForkKnifeFill as ForkKnifeFillIcon, ForkKnifeFill as SiForkKnifeFill };
export type { ForkKnifeFillProps };
