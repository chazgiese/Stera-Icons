import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextAlignCenterBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignCenterBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignCenterBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M17 11a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M19 17a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2zM21 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TextAlignCenterBoldDuotone.displayName = 'TextAlignCenterBoldDuotone';

export { TextAlignCenterBoldDuotone };
export type { TextAlignCenterBoldDuotoneProps };
