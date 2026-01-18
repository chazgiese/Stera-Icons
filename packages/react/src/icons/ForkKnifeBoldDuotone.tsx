import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ForkKnifeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ForkKnifeBoldDuotone = memo(
  forwardRef<SVGSVGElement, ForkKnifeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m10.92 9.4-1.18 2.74a3 3 0 0 0-.24 1.18v6.18a2.5 2.5 0 0 1-5 0v-6.18a3 3 0 0 0-.24-1.18L3.09 9.4c.15.35.5.59.91.59h1.52l.58 1.35a5 5 0 0 1 .4 1.97v6.18a.5.5 0 0 0 1 0v-6.18a5 5 0 0 1 .4-1.97L8.48 10H10a1 1 0 0 0 .92-.6M19 4.33a4.7 4.7 0 0 0-2.82 2.31c-.74 1.43-1.12 3.67-1.17 7.36H16v2h-2a1 1 0 0 1-1-1c0-4.3.35-7.25 1.4-9.29 1.13-2.15 2.95-3.12 5.37-3.68A1 1 0 0 1 21 3v11h-2z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M21 19.5a2.5 2.5 0 0 1-5 0V14h5zm-3 0a.5.5 0 0 0 1 0V16h-1z" clipRule="evenodd" />
        <path fill="currentColor" d="M10 2a1 1 0 0 1 1 1v6.1a1 1 0 0 1-1 .9H4a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v5h1V3.5a1 1 0 0 1 2 0V8h1V3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ForkKnifeBoldDuotone.displayName = 'ForkKnifeBoldDuotone';

// Triple export pattern (lucide-react style)
export { ForkKnifeBoldDuotone, ForkKnifeBoldDuotone as ForkKnifeBoldDuotoneIcon, ForkKnifeBoldDuotone as SiForkKnifeBoldDuotone };
export type { ForkKnifeBoldDuotoneProps };
