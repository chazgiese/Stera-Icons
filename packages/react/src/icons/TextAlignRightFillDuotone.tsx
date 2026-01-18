import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextAlignRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignRightFillDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 10.5a1.5 1.5 0 0 1 0 3H11a1.5 1.5 0 0 1 0-3z" opacity={.4} />
        <path fill="currentColor" d="M21 16.5a1.5 1.5 0 0 1 0 3H7a1.5 1.5 0 0 1 0-3zM21 4.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

TextAlignRightFillDuotone.displayName = 'TextAlignRightFillDuotone';

export { TextAlignRightFillDuotone };
export type { TextAlignRightFillDuotoneProps };
