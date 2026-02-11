import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FigmaBoldProps = Omit<IconBaseProps, 'children'>;

const FigmaBold = memo(
  forwardRef<SVGSVGElement, FigmaBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="figma-bold" {...props}>
      <path fillRule="evenodd" d="M15.34 1a4.33 4.33 0 0 1 2.76 7.67 4.32 4.32 0 0 1-5.1 6.98v3.02a4.33 4.33 0 1 1-7.1-3.34 4.33 4.33 0 0 1 0-6.66A4.32 4.32 0 0 1 8.67 1zM8.65 16.33A2.33 2.33 0 1 0 11 18.67v-2.34H8.65m6.69-6.66a2.33 2.33 0 1 0 0 4.66 2.33 2.33 0 0 0 0-4.66m-6.67 0a2.33 2.33 0 0 0-.02 4.66H11V9.67zm0-6.67a2.33 2.33 0 0 0 0 4.67H11V3zM13 7.67h2.34a2.33 2.33 0 0 0 0-4.67H13z" clipRule="evenodd" />
    </IconBase>
  ))
);

FigmaBold.displayName = 'FigmaBold';

// Triple export pattern (lucide-react style)
export { FigmaBold, FigmaBold as FigmaBoldIcon, FigmaBold as SiFigmaBold };
export default FigmaBold;
export type { FigmaBoldProps };
