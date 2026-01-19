import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ForkKnifeBoldProps = Omit<IconBaseProps, 'children'>;

const ForkKnifeBold = memo(
  forwardRef<SVGSVGElement, ForkKnifeBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="fork-knife-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10 2a1 1 0 0 1 1 1v6.099999999999999q-.02.15-.08.3l-1.18 2.74a3 3 0 0 0-.24 1.18v6.18a2.5 2.5 0 0 1-5 0v-6.18a3 3 0 0 0-.24-1.18L3.09 9.4A1 1 0 0 1 3 9.04V3a1 1 0 0 1 2 0v5h1V3.5a1 1 0 0 1 2 0V8h1V3a1 1 0 0 1 1-1m-3.9 9.35a5 5 0 0 1 .4 1.97v6.18a.5.5 0 0 0 1 0v-6.18a5 5 0 0 1 .4-1.97L8.48 10H5.52zM19.77 2.03A1 1 0 0 1 21 3v16.5a2.5 2.5 0 0 1-5 0V16h-2a1 1 0 0 1-1-1c0-4.3.35-7.25 1.4-9.29 1.13-2.15 2.95-3.12 5.37-3.68M18 19.5a.5.5 0 0 0 1 0V16h-1zm1-15.17a4.7 4.7 0 0 0-2.82 2.31c-.74 1.43-1.12 3.67-1.17 7.36H19z" clipRule="evenodd" />
    </IconBase>
  ))
);

ForkKnifeBold.displayName = 'ForkKnifeBold';

// Triple export pattern (lucide-react style)
export { ForkKnifeBold, ForkKnifeBold as ForkKnifeBoldIcon, ForkKnifeBold as SiForkKnifeBold };
export type { ForkKnifeBoldProps };
