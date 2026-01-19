import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FigmaRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FigmaRegularDuotone = memo(
  forwardRef<SVGSVGElement, FigmaRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="figma-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.34 1.25a4.08 4.08 0 0 1 2.35 7.42 4.08 4.08 0 0 0-4.94 6.5v3.5a4.08 4.08 0 1 1-6.44-3.34 4.08 4.08 0 0 1 0-6.66 4.08 4.08 0 0 1 2.36-7.42zM8.67 16.08a2.58 2.58 0 1 0 2.58 2.59v-2.59zm0-6.66a2.58 2.58 0 0 0 0 5.16h2.58V9.42zm0-6.67a2.58 2.58 0 0 0 0 5.17h2.58V2.75zm4.08 5.17h2.59a2.58 2.58 0 0 0 0-5.17h-2.59z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.34 7.92a4.08 4.08 0 1 1 0 8.16 4.08 4.08 0 0 1 0-8.16m0 1.5a2.58 2.58 0 1 0 0 5.16 2.58 2.58 0 0 0 0-5.16" clipRule="evenodd" />
    </IconBase>
  ))
);

FigmaRegularDuotone.displayName = 'FigmaRegularDuotone';

// Triple export pattern (lucide-react style)
export { FigmaRegularDuotone, FigmaRegularDuotone as FigmaRegularDuotoneIcon, FigmaRegularDuotone as SiFigmaRegularDuotone };
export default FigmaRegularDuotone;
export type { FigmaRegularDuotoneProps };
