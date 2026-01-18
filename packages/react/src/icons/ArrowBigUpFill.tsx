import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowBigUpFillProps = Omit<IconBaseProps, 'children'>;

const ArrowBigUpFill = memo(
  forwardRef<SVGSVGElement, ArrowBigUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M10.4 3.68c.89-.88 2.31-.88 3.2 0l8.25 8.26a1.5 1.5 0 0 1-1.06 2.56H17V19a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4.5H3.2a1.5 1.5 0 0 1-1.05-2.56z" />
    </IconBase>
  ))
);

ArrowBigUpFill.displayName = 'ArrowBigUpFill';

export { ArrowBigUpFill };
export type { ArrowBigUpFillProps };
