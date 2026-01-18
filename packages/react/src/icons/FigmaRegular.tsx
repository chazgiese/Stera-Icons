import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FigmaRegularProps = Omit<IconBaseProps, 'children'>;

const FigmaRegular = memo(
  forwardRef<SVGSVGElement, FigmaRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.34 1.25a4.08 4.08 0 0 1 2.35 7.42 4.08 4.08 0 1 1-4.94 6.5v3.5a4.08 4.08 0 1 1-6.44-3.34 4.08 4.08 0 0 1 0-6.66 4.08 4.08 0 0 1 2.36-7.42zM8.65 16.08a2.58 2.58 0 1 0 2.6 2.59v-2.59h-2.6m6.69-6.66a2.58 2.58 0 1 0 0 5.16 2.58 2.58 0 0 0 0-5.16m-6.67 0a2.58 2.58 0 0 0-.02 5.16h2.6V9.42zm0-6.67a2.58 2.58 0 0 0 0 5.17h2.58V2.75zm4.08 5.17h2.59a2.58 2.58 0 0 0 0-5.17h-2.59z" clipRule="evenodd" />
    </IconBase>
  ))
);

FigmaRegular.displayName = 'FigmaRegular';

// Triple export pattern (lucide-react style)
export { FigmaRegular, FigmaRegular as FigmaRegularIcon, FigmaRegular as SiFigmaRegular };
export type { FigmaRegularProps };
