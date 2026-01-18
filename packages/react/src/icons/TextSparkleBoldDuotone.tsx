import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextSparkleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextSparkleBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextSparkleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.1 17a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2h5.1M8.1 11a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2h5.1M21 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
        <path fill="currentColor" d="M16.39 10.26a.65.65 0 0 1 1.22 0l.25.69a5.2 5.2 0 0 0 3.2 3.2l.68.24a.65.65 0 0 1 0 1.22l-.69.25a5.2 5.2 0 0 0-3.2 3.2l-.24.68a.65.65 0 0 1-1.22 0l-.25-.69a5.2 5.2 0 0 0-3.19-3.2l-.7-.24a.65.65 0 0 1 0-1.22l.7-.25a5.2 5.2 0 0 0 3.2-3.19z" />
    </IconBase>
  ))
);

TextSparkleBoldDuotone.displayName = 'TextSparkleBoldDuotone';

export { TextSparkleBoldDuotone };
export type { TextSparkleBoldDuotoneProps };
