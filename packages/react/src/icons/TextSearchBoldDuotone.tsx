import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextSearchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextSearchBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextSearchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.1 17a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2h5.1M8.1 11a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2h5.1M21 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M15.5 9a4.5 4.5 0 0 1 3.8 6.9l1.9 1.9a1 1 0 1 1-1.4 1.4l-1.9-1.9q-1.06.69-2.4.7a4.5 4.5 0 1 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
    </IconBase>
  ))
);

TextSearchBoldDuotone.displayName = 'TextSearchBoldDuotone';

export { TextSearchBoldDuotone };
export type { TextSearchBoldDuotoneProps };
