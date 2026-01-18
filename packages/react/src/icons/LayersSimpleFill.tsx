import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LayersSimpleFillProps = Omit<IconBaseProps, 'children'>;

const LayersSimpleFill = memo(
  forwardRef<SVGSVGElement, LayersSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.6 3.17a5 5 0 0 1 4.8 0l7.07 3.85a2.25 2.25 0 0 1 0 3.96L19.59 12l1.88 1.02a2.25 2.25 0 0 1 0 3.96l-7.08 3.85a5 5 0 0 1-4.78 0l-7.08-3.85a2.25 2.25 0 0 1 0-3.96L4.41 12l-1.88-1.02a2.25 2.25 0 0 1 0-3.96zm4.8 11.66a5 5 0 0 1-4.8 0l-3.1-1.7-3 1.65a.25.25 0 0 0 0 .44l7.06 3.86a3 3 0 0 0 2.88 0l7.07-3.86a.25.25 0 0 0 0-.44l-3.01-1.64z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersSimpleFill.displayName = 'LayersSimpleFill';

export { LayersSimpleFill };
export type { LayersSimpleFillProps };
