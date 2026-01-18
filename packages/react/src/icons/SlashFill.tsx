import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SlashFillProps = Omit<IconBaseProps, 'children'>;

const SlashFill = memo(
  forwardRef<SVGSVGElement, SlashFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18.88 2a1.5 1.5 0 0 1 2.24 2l-16 18a1.5 1.5 0 0 1-2.24-2z" />
    </IconBase>
  ))
);

SlashFill.displayName = 'SlashFill';

export { SlashFill };
export type { SlashFillProps };
