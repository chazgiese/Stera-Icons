import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HashItalicFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HashItalicFillDuotone = memo(
  forwardRef<SVGSVGElement, HashItalicFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M19 13.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM21 7.5a1.5 1.5 0 0 1 0 3H5a1.5 1.5 0 1 1 0-3z" />
        <path d="M8.46 21.33a1.5 1.5 0 0 1-2.92-.66l.92-4.17h3.08zM14.46 21.33a1.5 1.5 0 0 1-2.92-.66l.92-4.17h3.08zM10.2 13.5H7.13l.67-3h3.07zM16.2 13.5h-3.07l.67-3h3.07zM9.54 2.67a1.5 1.5 0 1 1 2.92.66l-.92 4.17H8.46zM15.54 2.67a1.5 1.5 0 1 1 2.92.66l-.92 4.17h-3.08z" />
    </IconBase>
  ))
);

HashItalicFillDuotone.displayName = 'HashItalicFillDuotone';

export { HashItalicFillDuotone };
export type { HashItalicFillDuotoneProps };
