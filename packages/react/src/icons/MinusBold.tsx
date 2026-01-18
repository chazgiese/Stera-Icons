import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MinusBoldProps = Omit<IconBaseProps, 'children'>;

const MinusBold = memo(
  forwardRef<SVGSVGElement, MinusBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

MinusBold.displayName = 'MinusBold';

export { MinusBold };
export type { MinusBoldProps };
