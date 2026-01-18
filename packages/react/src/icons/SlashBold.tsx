import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SlashBoldProps = Omit<IconBaseProps, 'children'>;

const SlashBold = memo(
  forwardRef<SVGSVGElement, SlashBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M19.25 2.34a1 1 0 0 1 1.5 1.32l-16 18a1 1 0 0 1-1.5-1.32z" />
    </IconBase>
  ))
);

SlashBold.displayName = 'SlashBold';

export { SlashBold };
export type { SlashBoldProps };
